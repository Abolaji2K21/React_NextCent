import style from './index.module.css';
import arrow from '../../../asset/arrow.png';
import tesla from '../../../asset/tesla.png';
import Img from '../../../asset/img.png';
import Img_2 from '../../../asset/img_2.png';
import Img1 from '../../../asset/img_1.png';
import Img_3 from '../../../asset/img_3.png';
import Img_4 from '../../../asset/img_4.png';
import Img_5 from '../../../asset/img_5.png';
import ImageOne from '../../../asset/image1.png';
import image_2 from '../../../asset/image2.png';
import image_3 from '../../../asset/image3.png';

const TeslaSection = () => {
    return (
        <>
            <div className={style.tesla}>
                <img src={tesla} alt="tesla logo"/>
                <div>
                    <p>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, <br/>
                        vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare,<br/>
                        tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet <br/>
                        elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue <br/>
                        ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum
                        pretium. <br/>
                        Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. <br/>
                        Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id <br/>
                        sem dignissim finibus ac sit amet magna.</p>
                    <h3 style={{color: "#4caf4f"}}>Tim Smith</h3>
                    <p>British Dragon Boat Racing Association</p>
                    <div style={{display:"flex", gap: "38px", justifyContent: "center", alignItems: "center"}}>
                        <img src={Img} alt="logo1"/>
                        <img src={Img1} alt="logo2"/>
                        <img src={Img_2} alt="logo3"/>
                        <img src={Img_3} alt="logo4"/>
                        <img src={Img_4} alt="logo5"/>
                        <img src={Img_5} alt="logo6"/>
                        <h4 style={{color: "#4caf4f"}}>Meet all customers</h4>
                        <img src={arrow} alt="arrow"/>
                    </div>
                </div>
            </div>
            <div style={{color: "#4d4d4d",textAlign: "center"}}>
                <h2>Caring is the new marketing</h2>
                <p>The Nexcent blog is the best place to read about the latest membership insights,<br/>
                    trends and more. See who's joining the community, read about how our community<br/>
                    are increasing their membership income and lot's more.</p>

                <div className={style.imageContainers}>
                    <div className={style.imageBox}>
                        <img src={ImageOne} alt="first image"/>
                        <div className={style.overlayText}>
                            <h4>Creating Streamlined <br/>Safeguarding Processes <br/>with OneRen</h4>
                            <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                                <h4 style={{color: "#4caf4f"}}>Readmore</h4>
                                <img src={arrow} alt="arrow picture"/>
                            </div>
                        </div>
                    </div>

                    <div className={style.imageBox}>
                        <img src={image_2} alt="second image"/>
                        <div className={style.overlayText}>
                            <h4>What are your safeguarding responsibilities and how can you manage them?</h4>
                            <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                                <h4 style={{color: "#4caf4f"}}>Readmore</h4>
                                <img src={arrow} alt="arrow"/>
                            </div>
                        </div>
                    </div>

                    <div className={style.imageBox}>
                        <img src={image_3} alt="third image"/>
                        <div className={style.overlayText}>
                            <h4>Revamping the Membership <br/>Model with Triathlon <br/>Australia</h4>
                            <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                                <h4 style={{color: "#4caf4f"}}>Readmore</h4>
                                <img src={arrow} alt="arrow"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TeslaSection;
