import { Link } from "react-router-dom";

function NavItem({ children, to }) {
  const styles =
    "flex items-center p-1.5 gap-2.5 hover:shadow-md duration-300 hover:bg-blue-50 focus:outline-1 focus:outline-offset-2 focus:outline-none focus:ring focus:ring-blue-300";

  return (
    <Link className={styles} to={to}>
      {children}
    </Link>
  );
}

export default NavItem;
