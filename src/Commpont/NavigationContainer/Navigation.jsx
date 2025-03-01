import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons

function Navbar() {
    const [isVisible, setIsVisible] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    let lastScrollY = window.scrollY;

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsVisible(true);  // Show navbar on scroll
            } else {
                setIsVisible(false); // Hide navbar when at top
            }
            lastScrollY = window.scrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Toggle Sidebar
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            {/* Top Navigation Bar */}
            <nav className={`nav ${isVisible ? "show" : "hide"}`}>
                <div className="menu-icon" onClick={toggleSidebar}>
                    <FiMenu size={30} />
                </div>
                <h2><Link to="/projects">Projects</Link></h2>
                <h2><Link to="/services">Services</Link></h2>
                <h2 className="center"><Link to="/">Mirror</Link></h2>
                <h2 className="right"><Link to="/about">About</Link></h2>
                <h2 className="right"><Link to="/contact">Contact</Link></h2>
            </nav>

            {/* Sidebar Navigation */}
            <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
                <div className="close-icon" onClick={toggleSidebar}>
                    <FiX size={30} />
                </div>
                <ul>
                    <li><Link to="/" onClick={toggleSidebar}>Home</Link></li>
                    <li><Link to="/projects" onClick={toggleSidebar}>Projects</Link></li>
                    <li><Link to="/services" onClick={toggleSidebar}>Services</Link></li>
                    <li><Link to="/about" onClick={toggleSidebar}>About</Link></li>
                    <li><Link to="/contact" onClick={toggleSidebar}>Contact</Link></li>
                </ul>
            </div>
        </>
    );
}

export default Navbar;
