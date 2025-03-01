import React, { useEffect } from "react";
import "./project.css";
import { IoIosArrowRoundDown } from "react-icons/io";
import Animation from "../AnimationContainer/Animation";
import ProjectData from "./Project1";

const Projects = () => {
    const handleClick = () => {
        // Page ko smoothly neeche scroll karega
        window.scrollTo({
            top: window.scrollY + window.innerHeight, // Scroll one screen down
            behavior: "smooth",
        });
    };
    useEffect(() => {
        window.scrollTo(0, 0);  // This ensures the page opens from the top
    }, []);

    return (
        <>
            <div className="projectContainer">
                {/* Left Image */}
                <div className="projectItem left">
                    <img
                        src="https://images.unsplash.com/photo-1483193722442-5422d99849bc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJ1dHRpZnVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D"
                        alt="Left Image"
                    />
                </div>

                {/* Content */}
                <div className="projectContent">
                    <h1>Projects</h1>
                    <p>Here is where you get to binge my projects.</p>
                    <span>
                        Duis elit augue, viverra suscipit luctus eget, malesuada sed turpis. 
                        Ut ullamcorper libero ante interdum.
                    </span>
                    <div className="icone" onClick={handleClick}>
                        <button className="animated-btn"><IoIosArrowRoundDown /></button>
                    </div>
                </div>

                {/* Right Image */}
                <div className="projectItem right">
                    <img
                        src="https://images.unsplash.com/photo-1445053023192-8d45cb66099d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJ1dHRpZnVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D"
                        alt="Right Image"
                    />
                </div>
            </div>

            {/* Project Grid */}
            <div className="projectContainer">
                <div className="project-grid">
                    {ProjectData?.map((item, index) => (
                        <div className="projectcont" key={index}>
                            <div className="projectcola">
                                <img src={item.img} alt={item.Name} />
                            </div>
                            <div className="contant">
                                <span>{item.Name}</span>
                                <span>{item.Number}</span>
                            </div>
                            <p>{item.id}</p>
                        </div>
                    ))}
                </div>
            </div>

            <Animation />
        </>
    );
};

export default Projects;
