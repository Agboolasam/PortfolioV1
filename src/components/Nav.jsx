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
                        <a href="/src/assets/AgboolaSamsonIfedolapo.pdf" download><li>Download Resume</li></a>
                    </ul>
                </div>
                <Hamburger />
            </nav>
        </>
    )
}

export default Nav
