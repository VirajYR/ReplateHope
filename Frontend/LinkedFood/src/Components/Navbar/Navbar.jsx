import React, { useState } from 'react';
import './Navbar.css'; // Import the CSS file for styling
import logo from "../../assets/Logo.jpeg"
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [isDonateMenuOpen, setDonateMenuOpen] = useState(false);

    // Toggle the Donate dropdown menu
    const toggleDonateMenu = () => {
        setDonateMenuOpen(!isDonateMenuOpen);
    };

    return (
        <nav className="navbar">
            {/* Logo */}
            <div className="navbar-logo">
                {/* <a href="/">Linked Food</a> */}
                <Link to="/">
                    <img src={logo} alt="" /></Link>
            </div>

            {/* Navigation Menu */}
            <ul className="navbar-menu">
                <li className="navbar-item">
                    <Link to="/map">  <a>Find Food Pantry</a></Link>
                </li>

                {/* Donate Menu */}
                <li className="navbar-item donate-menu">
                    <button onClick={toggleDonateMenu} className="donate-button">
                        Donate
                    </button>
                    {isDonateMenuOpen && (
                        <ul className="dropdown-menu">
                            <Link to="/add-food">  <li><a href="#donate-money">Donate Food</a></li>
                                <li><a href="#donate-food">Donate Money</a></li></Link>
                        </ul>
                    )}
                </li>

                <li className="navbar-item">
                    <Link to="/volunteer">  <a>Volunteer</a></Link>
                </li>
                <li className="navbar-item">
                    <Link to="/partner">  <a>Partner</a></Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
