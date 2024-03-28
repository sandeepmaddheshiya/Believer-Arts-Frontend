import React from "react";

import "./PrivacyPolicy.scss";
import PrivacyPolicyContent from "./PrivacyPolicyContent";

const PrivacyPolicy = () => {
    
    return (
        <div>
            
            <div className="main-content">
                <div className="layout">
                    <PrivacyPolicyContent/>
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

export default PrivacyPolicy;
