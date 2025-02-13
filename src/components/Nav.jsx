import { NavLink } from "react-router-dom"
function Nav() {
    return (
        <>
            <nav>
                <i>LOGO</i>
                <div className="nav-items">
                    <ul>
                        <NavLink push to={"/projects"}> <li>Projects</li></NavLink>
                        <NavLink to={"/contact"}> <li>Contact</li></NavLink>
                        <a href="/src/assets/Tech cv.pdf" download><li>Download Resume</li></a>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Nav
