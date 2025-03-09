import NavItem from "./NavItem";

function SideBar({ styles }) {
  return (
    <nav className="row-span-8 flex col-span-1 justify-center rounded-2xl ">
      <ul className=" flex  flex-col justify-center w-full px-1 h-60  gap-10 mt-18 ">
        <NavItem to="/" styles={styles}>
          <i className="fa-solid fa-house text-blue-700 bg-blue-200 p-2 rounded-2xl"></i>
          <p>Home</p>
        </NavItem>

        <NavItem to="/customers" styles={styles}>
          <i className="fa-solid fa-circle-user text-blue-700 bg-blue-200 p-2 rounded-2xl"></i>
          <p>Customer</p>
        </NavItem>

        <NavItem to="/tickets" styles={styles}>
          <i className="fa-solid fa-list-check text-blue-700 bg-blue-200 p-2 rounded-2xl"></i>
          <p>Tasks</p>
        </NavItem>

        <NavItem to="/reports">
          <i className="fa-solid fa-chart-bar text-blue-700 bg-blue-200 p-2 rounded-2xl"></i>
          <p>Reports</p>
        </NavItem>
      </ul>
    </nav>
  );
}

export default SideBar;
