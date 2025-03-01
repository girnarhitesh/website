import React from "react";
import { Link } from "react-router-dom"; // Correct import
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="FooterContainer">
            <div className="Footeritms">
                <p><Link to="/">Mirror</Link></p>
                <p><Link to="/projects">Projects</Link></p>
                <p><Link to="/services">Services</Link></p>
                <p><Link to="/about">About</Link></p>
                <p><Link to="/contact">Contact</Link></p> {/* Fixed spelling */}
                <p>© 2025</p>
            </div>
        </footer>
    );
};

export default Footer;
