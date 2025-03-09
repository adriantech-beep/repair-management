import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/FakeAuthContext";

function Header() {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/");
  }
  return (
    <div className="col-span-8 row-start-1 col-start-2 bg-gray-800 p-4 text-white flex items-center justify-end gap-6">
      <div className="flex items-center gap-1.5">
        <h1>Hello {user.name}</h1>
        <img src={user.avatar} className="rounded-3xl w-11" />
      </div>
      <div>
        <button
          onClick={handleLogout}
          className="bg-violet-600  rounded-2xl cursor-pointer px-4 py-1 hover:bg-violet-700 ease-in"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Header;
