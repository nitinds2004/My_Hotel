import React from 'react';
import './Footer.css'
import { assets } from '../../assets/assets';

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footercontaint">
                <div className="footercontentleft">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ipsum quod totam provident atque est explicabo nemo iure voluptates vel.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>

                </div>
                <div className="footercontentcenter">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footercontentright">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+5666466646</li>
                        <li>nitin.com</li>

                    </ul>

                </div>

            </div>
            <hr />
            <p className="footer-copyright">Copyright 2024 Tomato.com -All Right Reserved.</p>

        </div>
    );
}

export default Footer;
