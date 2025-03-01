import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate
import "./Aboutpage.css";
import Animation from "../AnimationContainer/Animation";

const Aboutpage = () => {
    const [scrollPos, setScrollPos] = useState(0);
    
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
            <div className="AboutpageContaner">
                <div className="leftContant">
                    <h1>Sarah Pratt</h1>
                    <p>Lorem ipsum dolor sit amet, consect adipiscing elit. Sed lacinia faucibus lectus, non.</p>
                </div>
                <div className="AboutimgContaner">
                    <img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fG1vZGVsJTIwaW1nfGVufDB8fDB8fHww" alt="Sarah Pratt" />
                    <h2>About me</h2>
                    <p>Hello, I'm a super-fun web designer living in Brooklyn, New York.</p>
                </div>
            </div>
            <div className="AboutpageContantContainer">
                <div className="heading">
                    <h1>My story</h1>
                </div>
                <div className="Aboutperegraph">
                    <p>I'm an empathetic designer based in Brooklyn, New York, with over five years of experience.</p>
                    <div className="SpanContant">
                        <span>Nunc sit amet justo nec turpis consectetur ullamcorper vitae eu nulla. Praesent feugiat metus non sapien rutrum mollis. Donec lacinia rhoncus ligula non tincidunt. Morbi cursus elit aliquam gravida sollicitudin. Ut tempor laoreet justo, iaculis finibus massa viverra vel. Curabitur nisi ex, ullamcorper nec risus eu, semper vestibulum orci. Aenean</span>
                        <span>consequat egestas lectus, a sodales tortor posuere nec. Nunc fermentum ante sodales magna vulputate sollicitudin. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus consectetur facilisis justo. Lorem ipsum dolor sit amet, consectetur adipis.</span>
                    </div>
                </div>
            </div>
            <div className="SliderContainers">
                <div
                    className="SliderContainer"
                    style={{ transform: `translateX(${scrollPos * 0.2}px)` }}
                >
                    <div className="Container1">
                        <img
                            src="https://images.unsplash.com/photo-1627483298235-f3bac2567c1c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZpdG5lcyUyMGdpcmx8ZW58MHx8MHx8fDA%3D"
                            alt=""
                        />
                    </div>
                    <div className="Container2">
                        <img
                            src="https://images.unsplash.com/photo-1554067559-1e017957fa3b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZpdG5lcyUyMGdpcmx8ZW58MHx8MHx8fDA%3D"
                            alt=""
                        />
                    </div>
                </div>
                <div
                    className="Slider2"
                    style={{ transform: `translateX(-${scrollPos * 0.2}px)` }}
                >
                    <div className="Container3">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1672352100050-65cb2ee4d818?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGZpdG5lcyUyMGdpcmx8ZW58MHx8MHx8fDA%3D"
                            alt=""
                        />
                    </div>
                    <div className="Container4">
                        <img
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGZpdG5lcyUyMGdpcmx8ZW58MHx8MHx8fDA%3D"
                            alt=""
                        />
                    </div>
                </div>
            </div>
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
            <Animation/>

        </>
    );
}

export default Aboutpage;





