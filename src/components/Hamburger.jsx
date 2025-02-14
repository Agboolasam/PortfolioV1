
function Hamburger() {
    const hamburger = document.getElementsByClassName("hamburger");
    const toggle = () => {
        if (hamburger[1].style.display == "block" || hamburger[1].style.display == "flex") {
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
            document.getElementById("hamburger").style.display = "flex"

        }
    }

    return (
        <div id="hamburger" onClick={() => toggle()}>
            <div className="hamburger"></div>
            <div className="hamburger"></div>
            <div className="hamburger"></div>
        </div >
    )
}

export default Hamburger;
