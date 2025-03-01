import React, { useEffect, useState } from "react";
import "./Background.css"
import { useNavigate } from "react-router-dom";  // Import useNavigate
import Animation from "../AnimationContainer/Animation";


const Background = () => {
    const [scrollPos, setScrollPos] = useState(0);
    const navigate = useNavigate();  // Initialize useNavigate

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
            <div className="BackgroundimgConntainer">
                <img src="https://plus.unsplash.com/premium_photo-1671586882852-2eb037d2e5c3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMzfHx0ZW5pc2JvbCUyMGxhZHklMjBpbWd8ZW58MHx8MHx8fDA%3D" alt="" />
                <div className="BackgroundCOntainerContant">
                    <h1>Some of my skills...</h1>
                    <div className="paregraphcontainet">
                        <p>User interface</p>
                        <p>Typography</p>
                        <p>User testing</p>
                        <p>Design sprints</p>
                        <p>User experience</p>
                        <p>Color theory</p>
                        <p>Responsive design</p>
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
                                <button onClick={goToServices}>Shchbule a call</button> {/* Button Click Navigation */}
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
            <Animation />

        </>
    )
}

export default Background;