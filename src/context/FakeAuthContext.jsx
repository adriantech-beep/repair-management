import { createContext, useContext, useReducer } from "react";
const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "logout":
      return { ...state, user: null, isAuthenticated: false };
    default:
      throw new Error("Unknown action");
  }
}

const FAKE_USER = [
  {
    name: "Admin",
    email: "admin@example.com",
    password: "qwerty",
    avatar: "https://i.pravatar.cc/100?u=zz",
    role: "admin",
  },
  {
    name: "Juan",
    email: "juan@gmail.com",
    password: "1234",
    avatar: "https://i.pravatar.cc/100?u=bb",
    role: "assignee",
  },
  {
    name: "John",
    email: "john@gmail.com",
    password: "1234",
    avatar: "https://i.pravatar.cc/100?u=cc",
    role: "assignee",
  },
];

function AuthProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function login(email, password) {
    const activeUser = FAKE_USER.find(
      (user) => user.email === email && user.password === password
    );

    if (activeUser) {
      dispatch({ type: "login", payload: activeUser });
      return true;
    }
    return false;
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside AuthProvider");
  return context;
}

export { AuthProvider, useAuth };
