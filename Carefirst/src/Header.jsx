import logo from "./assets/about-circle-logo.svg"

function Header() {
    return (
        <header className="header">
            <nav className="navbar">
                <div className="tlogo">
                    <img className="imglogo" src={logo} alt="logo" />
                    <span className="brand-name">CareFirst</span>
                </div>
                <ul className="menu">
                    <div className="nav-item">
                    Home
                    <div className="dropdown">
                        <a href="#option1">Image</a>
                        <a href="#option2">Video</a>
                        <a href="#option3">Slider</a>
                    </div>
                    </div>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#services">Services</a></li>
                    <div className="nav-item">
                    Pages
                    <div className="dropdown">
                        <a href="#option1">Services Detail</a>
                        <a href="#option2">Our Blog</a>
                        <a href="#option3">Blog Detail</a>
                        <a href="#option3">Our Detail</a>
                        <a href="#option3">Team Detail</a>
                    </div>
                    </div>
                    <li><a href="#contact">Contact Us</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;