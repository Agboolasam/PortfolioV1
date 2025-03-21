import { NavLink } from "react-router-dom";
import Hamburger from "./Hamburger";

function Nav() {
    return (
        <>
            <nav>
                <NavLink to={"/"}>  <i>LOGO</i></NavLink>
                <div className="nav-items">
                    <ul >
                        <NavLink to={"/projects"}> <li>Projects</li></NavLink>
                        <NavLink to={"/contact"}> <li>Contact</li></NavLink>
                        <a href="https://docs.google.com/document/d/11F-iTWCiEkMI8_hl-QATYDuBTNSK7tfgknoXYdQZDqk/edit?usp=sharing" target="_blank"><li>Download Resume</li></a>
                    </ul>
                </div>
                <Hamburger />
            </nav>
        </>
    )
}

export default Nav
