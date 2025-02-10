import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
        <div className="logo"></div>
        <div className="list">
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home Page</NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu">Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about-us">About Us</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact-us">Contact Us</NavLink>
                    </li>
                </ul>
            </nav>
        </div>

    </header>
  );
}
