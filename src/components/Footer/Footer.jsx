import React from "react";
import { FaEnvelope, FaLocationArrow, FaMobileAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Payment from "../../assets/payments.png";
import "./Footer.scss";
const Footer = () => {
    const navigate = useNavigate();
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                    Explore the world of Believer Arts, your premier destination for inspired creations and personalized masterpieces. Whether you're seeking curated artworks or envisioning your own masterpiece, our platform offers endless possibilities. Shop our collection or collaborate with our artists to bring your vision to life. Join us in celebrating the beauty of art and individual expression.
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <a href="https://www.google.com/maps/search/?api=1&query=331+whiteview+Rd,+Northeast+-+Calgary">331 Whiteview Rd, Northeast - Calgary</a>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone:  <a href="tel:4376638599">437-663-8599</a></div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: <a href="mailto:imaginebeliever777@gmail.com">imaginebeliever777@gmail.com</a></div>

                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text" onClick={() => navigate(`/category/5`)}>Calligraphy Verse Lettering</span>
                    <span className="text"onClick={() => navigate(`/category/6`)}>Portraits Sketch</span>
                    <span className="text"onClick={() => navigate(`/category/7`)}>Landscape Sketch</span>
                    <span className="text"onClick={() => navigate(`/category/8`)}>Sketch with Verses</span>
                   
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text" onClick={() => navigate(`/`)}>Home</span>
                    <span className="text"onClick={() => navigate(`/about`)}>About</span>
                    <span className="text" onClick={() => navigate(`/privacypolicy`)}>Privacy Policy</span>
                   
                    <span className="text"onClick={() => navigate(`/termsandconditions`)}>Terms & Conditions</span>
                    <span className="text" onClick={() => navigate(`/contact`)}>Contact Us</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">
                        Believer Arts ©2024
                        
                    </span>
                    <img src={Payment} />
                </div>
            </div>
        </div>
    );
};

export default Footer;
