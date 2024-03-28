import React from "react";
import "./About.scss";
import AboutUs from "./AboutUs";

const About = () => {
    
    return (
        <div>
            
            <div className="main-content">
                <div className="layout">
                    <AboutUs/>
                    {/* <Category categories={categories} /> */}
                    {/* <Products
                        headingText="Popular Products"
                        products={products}
                    /> */}
                </div>
            </div>
        </div>
    );
};

export default About;
