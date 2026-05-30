import { Link } from "react-router-dom";
import { NavData } from "./NavData";

type NavbarProps = {
  sidebarOpen: boolean;
  closeSidebar: () => void;
};

function Navbar({ sidebarOpen, closeSidebar }: NavbarProps) {
  return (
    <nav className={sidebarOpen ? "nav-menu active" : "nav-menu"}>
      <ul className="nav-menu-items">
        <li className="navbar-toggle">
          <button onClick={closeSidebar}>close</button>
        </li>

        {NavData.map((item, index) => (
          <li key={index} className={item.cName}>
            <Link to={item.path}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;