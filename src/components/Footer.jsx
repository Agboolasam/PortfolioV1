

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <div id="footer">
            &copy; {currentYear} TheRealAgboola. All rights reserved.
        </div>
    )
}

export default Footer
