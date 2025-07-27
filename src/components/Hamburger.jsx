/* eslint-disable no-unused-vars */
import { UseHamburger } from "../contexts/HamburgerContext";
function Hamburger() {
    const [isOpen, toggleHamburger] = UseHamburger();

    const toggle = () => {
        toggleHamburger();
    }

    return (
        <div id="hamburger" className="hamburgerContainer" onClick={() => toggle()}>
            <div className="hamburger"></div>
            <div className="hamburger"></div>
            <div className="hamburger"></div>
        </div >
    )
}

export default Hamburger;
