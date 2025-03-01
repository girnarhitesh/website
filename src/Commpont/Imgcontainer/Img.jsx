import React from "react";
import "./Img.css";
import ImgData from "./Img2"

const Img = () => {
    return (
        <>
            <div className="imgcontainer">
                <h1>Selected Works</h1>
                <div className="img-grid">
                    {ImgData?.map((item, index) => (
                        <div className="imgcont" key={index}>
                            <div className="imgcola">
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
                {/* <div className="buttonclass" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div className="btn1">
                        <button style={{ height: "20vh", width: "20vh" }}>
                            <Link to="/projects">View All Projects</Link>
                        </button>
                    </div>
                </div> */}
            </div>


        </>
    );
};

export default Img;
