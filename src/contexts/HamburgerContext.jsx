import { createContext, useContext, useEffect, useState } from "react";


const HamburgerContext = createContext();
const UseHamburger = () => {
    return useContext(HamburgerContext);
};

function HamburgerProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleHamburger = () => {
        setIsOpen(prev => !prev);

    }

    useEffect(() => {
        const hamburger = document.getElementsByClassName("hamburger");
        if (isOpen && (hamburger[1].style.display == "block" || hamburger[1].style.display == "flex")) {
            hamburger[1].style.display = "none";
            hamburger[0].style.position = "relative";
            hamburger[0].style.transform = "rotate(45deg)";
            hamburger[2].style.position = "absolute";
            hamburger[2].style.transform = "rotate(-45deg)";
        } else {
            hamburger[1].style.display = "block";
            hamburger[0].style.position = "";
            hamburger[0].style.transform = "rotate(0deg)";
            hamburger[2].style.position = "";
            hamburger[2].style.transform = "rotate(0deg)";
            document.getElementsByClassName("hamburgerContainer")[0].style.display = "flex";
        }
    }, [isOpen]);

    return (
        <HamburgerContext.Provider value={[isOpen, toggleHamburger]}>
            {children}
        </HamburgerContext.Provider>
    );
}

export { HamburgerProvider, UseHamburger };
