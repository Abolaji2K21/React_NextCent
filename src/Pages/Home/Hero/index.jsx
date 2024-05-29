import React from 'react';
import style from "./index.module.css";
import Illustration from "../../../asset/Illustration.png"


const Hero = () => {
    return (
        <>
            <div className={style.heroSection}>
                <div>
                    <h1> Lessons And Insights <span style={{ color: '#4caf4f', display: 'block' }}> From 8 Years </span></h1>
                    <p> Where to grow your business as a photographer: site or social media? </p>
                    <button style={{ color: '#ffffff', background: '#4caf4f', border: 'none', borderRadius: '5px', padding: '15px 50px' }}>Register</button>
                </div>
                <img src={Illustration} alt="illustration"/>
            </div>
        </>
    );
}

export default Hero;
