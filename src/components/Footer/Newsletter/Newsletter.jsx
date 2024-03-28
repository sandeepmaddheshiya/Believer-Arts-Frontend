import axios from "axios";
import React, { useState } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import "./Newsletter.scss";

const Newsletter = () => {
    const [email, setEmail] = useState("");
    const [toastMessage, setToastMessage] = useState(null);

    const handleSubscribe = async () => {
        if (!email || !validateEmail(email)) {
            setToastMessage("Please enter a valid email address.");
            return;
        }
    
        try {
            const response = await axios.post(
                process.env.REACT_APP_SHEETDB_API_URL,
                { data: { Email: email } },
                { headers: { "Content-Type": "application/json" } }
            );
    
            if (response.status === 201) {
                setToastMessage("You've subscribed to the newsletter!");
            } else {
                console.error("Error subscribing:", response.statusText);
                setToastMessage("Subscription failed. Please try again later.");
            }
        } catch (error) {
            console.error("Error subscribing:", error.message);
            setToastMessage("Subscription failed. Please try again later.");
        }
    };
    

    const handleChange = (e) => {
        setEmail(e.target.value);
        setToastMessage(null); // Clear toast message when user changes input
    };

    const validateEmail = (email) => {
        // Regular expression to validate email format
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    return (
        <div className="newsletter-section">
            <div className="newsletter-content">
                <span className="small-text">Newsletter</span>
                <span className="big-text">
                    Sign up for latest updates and offers
                </span>
                <div className="form">
                    <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={handleChange}
                    />
                    <button onClick={handleSubscribe}>Subscribe</button>
                </div>
                <span className="text">
                    Will be used in accordance with our Privacy Policy
                </span>
                {toastMessage && (
                    <span className="toast">{toastMessage}</span>
                )}
                <span className="social-icons">
                    <a href="https://www.facebook.com/himal.acharya.794/?show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_review_changes=0&show_community_rollback=0&show_follower_visibility_disclosure=0">
                        <div className="icon">
                            <FaFacebookF size={14} />
                        </div>
                    </a>
                    <a href="https://www.instagram.com/believer_arts_/">
                        <div className="icon">
                            <FaInstagram size={14} />
                        </div>
                    </a>
                </span>
            </div>
        </div>
    );
};

export default Newsletter;
