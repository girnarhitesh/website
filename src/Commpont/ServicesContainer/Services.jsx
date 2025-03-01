import React, { useEffect, useState } from "react";
import { IoIosArrowRoundDown } from "react-icons/io";
import "./Services.css"
import Animation from "../AnimationContainer/Animation";
import Background from "../BackgroundimgContainer/Background";

const Services = () => {
    const handleClick = () => {
        window.scrollTo({
            top: window.scrollY + window.innerHeight,
            behavior: "smooth",
        });
    };
    const [scrollPos, setScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPos(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);  // This ensures the page opens from the top
    }, []);

    return (
        <>
            <div className="ServicesContainer">
                {/* Left Image */}
                <div className="ServicesItem left">
                    <img
                        src="https://plus.unsplash.com/premium_photo-1709932754626-29f30c6058bb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGVuaXNib2wlMjBzZXR1cHxlbnwwfHwwfHx8MA%3D%3D"
                        alt="Left Image"
                    />
                </div>

                {/* Content */}
                <div className="ServicesContant">
                    <h1>Services</h1>
                    <p>Let's find the perfect service to drive positive results.</p>
                    <span>
                        Duis elit augue, viverra suscipit luctus eget, malesuada sed turpis. Ut ullamcorper libero ante interdum.
                    </span>
                    <div className="icone" onClick={handleClick}>
                        <button className="animated-btn"><IoIosArrowRoundDown /></button>
                    </div>
                </div>

                {/* Right Image */}
                <div className="ServicesItem right">
                    <img
                        src="https://plus.unsplash.com/premium_photo-1709932754626-29f30c6058bb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGVuaXNib2wlMjBzZXR1cHxlbnwwfHwwfHx8MA%3D%3D"
                        alt="Right Image"
                    />
                </div>
            </div>
            <div className="left">
                <div className="SliderContainer">
                    <div className="Sliderimg">
                        <div className="container1">
                            <img
                                src="https://images.unsplash.com/photo-1508606572321-901ea443707f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzQ0fHxkZXNpbmVyJTIwaW1ycm9yJTIwaW1nJTIwaW4lMjBnaXJsfGVufDB8fDB8fHww"
                                alt="Image 1"
                                style={{ transform: `translatex(${scrollPos * 0.1}px)` }}
                            />
                        </div>
                        <div className="container2">
                            <img
                                src="https://images.unsplash.com/photo-1503342394128-c104d54dba01?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDEwfHxkZXNpbmVyJTIwaW1ycm9yJTIwaW1nJTIwaW4lMjBnaXJsfGVufDB8fDB8fHww"
                                alt="Image 2"
                                style={{ transform: `translatex(-${scrollPos * 0.1}px)` }} />
                            <div className="Slidercontant">
                                <h1>Web design</h1>
                                <p>Let's create an engaging website.</p>
                                <span>Nam dapibus libero velit, non consectetur dolor blandit quis. Fusce tristique magna ante, in maximus enim rutrum eget. Nulla id mollis lacus. Phasellus commodo aliquam urna. Vivamus vel augue quis tortor bibend. </span>
                                <div className="btnon">
                                    <button style={{ textTransform: "uppercase" }}>Shchbule a call</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Background />
        </>
    );
};

export default Services;
