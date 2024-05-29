import React from 'react';
import Icon from "../../asset/Icon.png"
import style from "./index.module.css"

const Navbar = () => {
    return (
        <>
            <div className={style.nav}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={Icon} alt="logo" />
                    <h2 style={{ color: '#263238', fontSize: '20px', fontStyle: 'inherit' }}>Nexcent</h2>
                </div>

                <div className={style.midsection}>
                    <a href="https://semicolon.africa/" target="_blank" rel="noreferrer">
                        <p>Home</p>
                    </a>
                    <p>Features</p>
                    <p>Product</p>
                    <p>Service</p>
                    <p>Testimonial</p>
                    <p>FAQ</p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px' }}>
                    <button style={{ color: '#4caf4f', background: 'none', border: 'none', fontSize: '16px', fontWeight: '400' }}>Login</button>
                    <button className="sign-up">Signup</button>
                </div>
            </div>
        </>
    );
}

export default Navbar;
