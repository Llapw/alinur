import { useState } from "react";
import "../App.css";

import Navbar from "./MobileNavbar";
import DesktopNav from "./DesktopNav";


function Header(){
    const [sidebarOpen, setSidebarOpen] = useState(false);


    const openSidebar = () => {
        setSidebarOpen(true);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };
    
    return(
        <header className="header">
            <h1>ALINUR</h1>
            <DesktopNav></DesktopNav>

            <button
                className="menu-button"
                aria-label="Open menu"
                onClick={openSidebar}
            >
                <span></span>
                <span></span>
                <span></span>
                </button>

            {/* <Navbar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} /> */}
        </header>
    );
}

export default Header;