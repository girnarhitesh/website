import React from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate
import "./Animation.css";

const Animation = () => {
    const navigate = useNavigate();  // Initialize useNavigate

    const goToContact = () => {
        navigate("/contact");  // Navigate to the Contact Page
    };

    return (
        <>
            <div className="AnimationContainer">
                <div className="container">
                    <h1>Let's talk</h1>
                    <p>Let's create a binge-worthy experience for your brand.</p>
                    <span>Duis elit augue, viverra suscipit luctus eget, malesuada sed turpis. Ut ullamcorper libero ante interdum.</span>
                    <div className="buttons">
                        <button onClick={goToContact}>Schedule Call</button>  {/* Button navigates to Contact Page */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Animation;
