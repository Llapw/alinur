import { Link } from "react-router-dom";
import { NavData } from "./NavData";

function DesktopNav(){
    return(
        <nav className="desktop-nav">
            {NavData.map((item) => (
                <Link key={item.path} to={item.path}>
                    {item.title}
                </Link>
            ))}
        </nav>
    );
}

export default DesktopNav;