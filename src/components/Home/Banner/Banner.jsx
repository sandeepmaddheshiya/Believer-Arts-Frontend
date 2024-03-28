import React, { useRef } from "react";
import BannerImg from "../../../assets/banner-img1.png";
import "./Banner.scss";


const Banner = () => {
    const bottomRef = useRef(null);
 

    const scrollToBottom = () => {
        bottomRef.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h2>BELIEVER</h2>
                    <h1>ARTS</h1>
                    <p>
                    Elevate your space with our handcrafted artworks, each piece a testament to creativity and skill. Browse our curated collection and find the perfect addition to your home or a thoughtful gift for someone special. Shop now and bring the beauty of handmade art into your life.
                    </p>
                    <div className="ctas">
                        <div className="banner-cta" onClick={scrollToBottom}>All Products</div>
                        <div className="banner-cta v2" onClick={() => window.open(process.env.REACT_APP_REQUEST_NEW_URL, "_blank")}>Request New</div>

                    </div>
                </div>
                <img className="banner-img" src={BannerImg} />
            </div>
            {/* This element will be scrolled into view */}
            <div ref={bottomRef}></div>
        </div>
    );
};

export default Banner;
