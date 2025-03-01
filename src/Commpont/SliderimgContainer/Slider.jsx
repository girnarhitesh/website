import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate
import "./Slider.css";

const Slider = () => {
    const [scrollPos, setScrollPos] = useState(0);
    const navigate = useNavigate();  // Initialize useNavigate
    useEffect(() => {
        window.scrollTo(0, 0);  // This ensures the page opens from the top
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPos(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Function to navigate to the Services page
    const goToServices = () => {
        navigate("/services");  // Navigates to Services Page
    };

    return (
        <>
            <div className="left">
                <div className="SliderContainer">
                    <div className="Sliderimg">
                        <div className="container1">
                            <img
                                src="https://images.unsplash.com/photo-1508606572321-901ea443707f?w=900&auto=format&fit=crop&q=60"
                                alt="Image 1"
                                style={{ transform: `translateX(${scrollPos * 0.1}px)` }}
                            />
                        </div>
                        <div className="container2">
                            <img
                                src="https://images.unsplash.com/photo-1503342394128-c104d54dba01?w=900&auto=format&fit=crop&q=60"
                                alt="Image 2"
                                style={{ transform: `translateX(-${scrollPos * 0.1}px)` }} 
                            />
                            <div className="Slidercontant">
                                <h1>Web design</h1>
                                <p>Let's create an engaging website.</p>
                                <span>
                                    Nam dapibus libero velit, non consectetur dolor blandit quis. 
                                    Fusce tristique magna ante, in maximus enim rutrum eget. Nulla id mollis lacus.
                                </span>
                                <div className="btnon">
                                    <button onClick={goToServices}>VIEW MY SERVICES</button> {/* Button Click Navigation */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="right">
                <div className="SliderContainer">
                    <div className="Sliderimg">
                        <div className="Slidercontants">
                            <h1>Branding</h1>
                            <p>Let's give your brand a personality.</p>
                            <span>
                                Nam dapibus libero velit, non consectetur dolor blandit quis.
                                Fusce tristique magna ante, in maximus enim rutrum eget.
                            </span>
                            <div className="btnon">
                                <button onClick={goToServices}>VIEW MY SERVICES</button> {/* Button Click Navigation */}
                            </div>
                        </div>
                        <div className="container3">
                            <img
                                src="https://images.unsplash.com/photo-1530021232320-687d8e3dba54?w=900&auto=format&fit=crop&q=60"
                                alt="Image 1"
                                style={{ transform: `translateX(${scrollPos * 0.1}px)` }}
                            />
                        </div>
                        <div className="container4">
                            <img
                                src="https://images.unsplash.com/photo-1485811661309-ab85183a729c?w=900&auto=format&fit=crop&q=60"
                                alt="Image 2"
                                style={{ transform: `translateX(-${scrollPos * 0.1}px)` }} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Slider;
