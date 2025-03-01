import React from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate
import "./About.css";

const About = () => {
    const navigate = useNavigate();  // Initialize useNavigate

    // Function to navigate to About Page
    const goToAbout = () => {
        navigate("/about");  // Navigate to About Page
    };

    return (
        <>
            <div className="Aboutcontainer">
                <h1>ABOUT ME</h1>
                <p>
                    I'm an empathetic designer based in Brooklyn, New York. With over five years of experience, 
                    I've learned best practices for putting myself in a customer's shoes to create the best results for your brand. 
                    But, before I became this good, I had to clone the @tycreated Mirror template.
                </p>
                <div className="btn1">
                    <button onClick={goToAbout}>MORE ABOUT ME</button>  {/* Button Click Navigation */}
                </div>
                <hr />
            </div>
        </>
    );
};

export default About;
