import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";  
import "./Hero.css";
import About from "../AboutContainer/About";
import Slider from "../SliderimgContainer/Slider";
import Imgcom from "../imgcommoponet/imgcom";
import Img from "../Imgcontainer/Img";
import Animation from "../AnimationContainer/Animation";

function Hero() {
    const navigate = useNavigate();  

    useEffect(() => {
        window.scrollTo(0, 0);  // Ensures the page always opens from the top
    }, []);

    const goToProjects = () => {
        navigate("/projects");  
    };

    return (
        <>
            <div className="hero-container">
                {/* Left Section */}
                <div className="hero-left">
                    <h1>Hello, I'm a super-fun web designer living in Brooklyn, NY.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliqu adapi.</p>
                </div>
                <div className="btn">
                    <button onClick={goToProjects}>MY WORK</button>  
                </div>

                {/* Right Section */}
                <div className="hero-right">
                    <img
                        src="https://images.unsplash.com/photo-1518518873111-6ca469aa4560?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHxkZXNpbmVyJTIwaW1ycm9yJTIwaW1nJTIwaW4lMjBnaXJsfGVufDB8fDB8fHww"
                        alt="Designer"
                    />
                </div>
            </div>
            <About />
            <Slider />
            <Imgcom />
            <Img />
            <Animation />
        </>
    );
}

export default Hero;
