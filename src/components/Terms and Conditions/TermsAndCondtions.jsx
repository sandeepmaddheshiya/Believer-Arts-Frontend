import React from "react";

import "./TermsAndCondtions.scss";
import TermsAndCondtionsContent from "./TermsAndCondtionsContent";

const TermsAndCondtions = () => {
    
    return (
        <div>
            
            <div className="main-content">
                <div className="layout">
                    <TermsAndCondtionsContent/>
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

export default TermsAndCondtions;
