import React from 'react';
import style from "./index.module.css";
import Img from "../../../asset/img.png";
import Img1 from "../../../asset/img_1.png";
import Img2 from "../../../asset/img_2.png";
import Img3 from "../../../asset/img_3.png";
import Img4 from "../../../asset/img_4.png";
import Img5 from "../../../asset/img_5.png";
import { Members } from "./data";

const Clients = () => {
    return (
        <>
            <div className={style.subHeroSection}>
                <div>
                    <h1> Our Clients <span style={{ color: '#4caf4f', display: 'block' }}> </span></h1>
                    <p> We have been working with some Fortune 500+ clients </p>
                </div>
                <div className={style.imageContainer}>
                    <img src={Img} alt="Image 1" />
                    <img src={Img1} alt="Image 2" />
                    <img src={Img2} alt="Image 3" />
                    <img src={Img3} alt="Image 4" />
                    <img src={Img4} alt="Image 5" />
                    <img src={Img5} alt="Image 6" />
                    <img src={Img2} alt="Image 3" />
                </div>
                <div className={style.subHeroSectionOne}>
                    <div>
                        <h1> Manage Your Entire Community <span style={{ display: "block" }}> In A Single System</span>
                        </h1>
                        <p> Who is Nextcent suitable for?</p>
                    </div>
                </div>
                <div className={style.memberships}>
                    {
                        Members.map((value, index) => (
                            <div key={index} >
                                <img src={value.image} />
                                <h2>{value.title}</h2>
                                <p>{value.text}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default Clients;
