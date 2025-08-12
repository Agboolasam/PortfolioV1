import { NavLink } from "react-router-dom";
import Hamburger from "./Hamburger";
import { UseHamburger } from "../contexts/HamburgerContext";
import ToggleDarkMode from "./theme/ToggleDarkMode";

function Nav() {
    const [isOpen, toggleHamburger] = UseHamburger();

    const home = () => {
        if (isOpen) {
            toggleHamburger();
        }
    }

    return (
        <nav>
            <NavLink to={"/"} onClick={home}><i>
                <h4 style={{ fontSize: "1em", fontWeight: "bold", wordSpacing: "0.3em" }}>
                    THEREALAGBOOLA.
                </h4></i></NavLink>

            <ToggleDarkMode />
            <div
                className="nav-items"
                id="desktop-nav"
            >
                <ul style={{ display: isOpen ? "none" : "flex" }}>
                    <NavLink to={"/"}><li>Home</li></NavLink>
                    <NavLink to={"/projects"}><li>Projects</li></NavLink>
                    <NavLink to={"/contact"}><li>Contact</li></NavLink>
                    <a href="https://docs.google.com/document/d/11F-iTWCiEkMI8_hl-QATYDuBTNSK7tfgknoXYdQZDqk/edit?usp=sharing" target="_blank"><li>Download Resume</li></a>
                </ul>
            </div>


            <div className="MobileNav">
                <div
                    className="nav-items"
                    id="mobile-nav"
                    style={{ display: isOpen ? "flex" : "none", zIndex: 1000 }}
                >
                    <ul style={{ display: isOpen ? "flex" : "none" }}>
                        <NavLink to={"/"} onClick={toggleHamburger}><li>Home</li></NavLink>
                        <NavLink to={"/projects"} onClick={toggleHamburger}><li>Projects</li></NavLink>
                        <NavLink to={"/contact"} onClick={toggleHamburger}><li>Contact</li></NavLink>
                        <a href="https://docs.google.com/document/d/11F-iTWCiEkMI8_hl-QATYDuBTNSK7tfgknoXYdQZDqk/edit?usp=sharing" target="_blank"><li>Download Resume</li></a>
                    </ul>
                </div>
                <Hamburger />
            </div>
        </nav>
    );
}

export default Nav;
