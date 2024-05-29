import React from 'react';
import inst from "../../asset/insta.png"
import Icon from "../../asset/Icon.png"
import web from "../../asset/web.png"
import twitter from "../../asset/twitter.png"
import youtube from "../../asset/youtube.png"
import send from "../../asset/send.png"
import style from "./index.module.css"







const Footer = () => {
    return (
        <>
            <div className={style.endOfPage}>
                <button style={{ color: '#ffffff', background: '#4caf4f', border: 'none', borderRadius: '5px', padding: '15px 30px' }}>Get a Demo</button>
            </div>

            <div className={style.footer}>
                <div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={Icon} alt="logo" />
                        <h2 style={{ color: '#ffffff', fontSize: '30px' }}>Nexcent</h2>
                    </div>
                    <p style={{ color: '#ffffff' }}>Copyright © 2020 Nexcent ltd. <br/>All rights reserved</p>
                    <div>
                        <img src={inst} alt="instagram logo" />
                        <img src={web} alt="web logo" />
                        <img src={twitter} alt="twitter logo" />
                        <img src={youtube} alt="youtube logo" />
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '100px' }}>
                    <div>
                        <h3 style={{ color: '#ffffff' }}>Company</h3>
                        <p style={{ color: '#ffffff' }}>About us</p>
                        <p style={{ color: '#ffffff' }}>Blog</p>
                        <p style={{ color: '#ffffff' }}>Contact us</p>
                        <p style={{ color: '#ffffff' }}>Pricing</p>
                        <p style={{ color: '#ffffff' }}>Testimonials</p>
                    </div>
                    <div>
                        <h3 style={{ color: '#ffffff' }}>Support</h3>
                        <p style={{ color: '#ffffff' }}>Help center</p>
                        <p style={{ color: '#ffffff' }}>Terms of service</p>
                        <p style={{ color: '#ffffff' }}>Legal</p>
                        <p style={{ color: '#ffffff' }}>Privacy policy</p>
                        <p style={{ color: '#ffffff' }}>Status</p>
                    </div>
                    <div>
                        <h3 style={{ color: '#ffffff' }}>Stay up to date</h3>
                        <div style={{ background: '#515b60' }}>
                            <input className={style.LastFooter} type="text" placeholder="Your Email Address" style={{ background: 'transparent', border: 'none' }} />
                            <img src={send} alt="Last logo" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
