import React from "react";
import "./imgcom.css"
import { MdOutlineArrowForward } from "react-icons/md";
import { HiOutlineArrowLeft } from "react-icons/hi";

const Imgcom = () => {
    return (

        <>
            <div className="imgcomponet">
                <h1>"Quisque id elit semper, vehicula tellus in, posuere Curab nisi eros, finibus ac eleif at.</h1>
                <div className="contant">
                    <img src="https://images.unsplash.com/photo-1554126807-6b10f6f6692a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym95fGVufDB8fDB8fHww" alt="" />
                    <div className="pila">
                        <p> Ryan Baser</p>
                        <span>Delta Airlines</span>
                    </div>
                </div>
                <div className="button">
                    <HiOutlineArrowLeft className="con" />
                    <MdOutlineArrowForward className="con"/>
                </div>
            </div>

        </>
    )
}

export default Imgcom;