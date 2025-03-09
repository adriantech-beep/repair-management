import { useEffect, useState } from "react";
import { useAuth } from "../context/FakeAuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (email && password) login(email, password);
  }
  useEffect(
    function () {
      if (isAuthenticated) navigate("/", { replace: true });
    },
    [isAuthenticated, navigate]
  );
  return (
    <main className="w-full h-dvh bg-gray-700 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-gray-800 h-90 w-md  p-6">
        <div>
          <h1 className="text-center text-3xl font-extrabold text-white">
            Welcome back
          </h1>
          <p className="mt-4 text-center text-gray-400">Sign in to continue</p>
        </div>
        <div className="mt-4">
          <label htmlFor="email"></label>
          <input
            className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Email address"
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className="mt-4">
          <label htmlFor="password"></label>
          <input
            className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Password"
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <button
          className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-gray-900 bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-8"
          type="submit"
        >
          submit
        </button>
      </form>
    </main>
  );
}

export default Login;
