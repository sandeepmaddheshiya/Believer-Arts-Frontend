import React from 'react';
import './PrivacyPolicy.scss'; // Importing the SCSS file for styling

const PrivacyPolicyContent = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <div className="left-content">
          <h2 className="about-us-heading">Privacy Policy</h2>
          
          <p>
                Welcome to Believer Art's Privacy Policy. This policy outlines how we collect, use, maintain, and disclose information collected from users (each, a "User") of our website, www.believerarts.com.
            </p>
            <h2 className="about-us-heading">Information Collection</h2>
            <p>
                At Believer Arts, we respect the privacy of our users. We do not require users to register accounts to browse or make purchases on our website. However, when users engage in activities such as making a purchase, subscribing to newsletters, responding to surveys, or filling out forms, we may collect personal identification information. This information may include but is not limited to name, email address, mailing address, phone number, and payment details.
            </p>
            <h2 className="about-us-heading">Use of Information</h2>
            <p>
                Any information we collect from users may be used for the following purposes:
            </p>
            <ul>
                <li>To process transactions: We use the information users provide when placing an order to fulfill that order. We do not share this information with outside parties except to the extent necessary to provide the service.</li>
                <li>To send periodic emails: The email address users provide for order processing may be used to send them information and updates pertaining to their order. It may also be used to respond to their inquiries, questions, and/or other requests. If a user decides to opt-in to our mailing list, they will receive emails that may include company news, updates, related product or service information, etc.</li>
            </ul>
            <br></br>
            <h2 className="about-us-heading">Protection of Information</h2>
            <p>
                We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of users' personal information, username, password, transaction information, and data stored on our website.
            </p>
            {/* Include more sections as per your website's privacy policy */}
            <h2 className="about-us-heading">Changes to This Policy</h2>
            <p>
                Believer Arts has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the bottom of this page. We encourage users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications.
            </p>
            <h2 className="about-us-heading">Contacting Us</h2>
            <p>
                If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at imaginebeliever777@gmail.com.
            </p>

        </div>
       
      </div>
    </div>
  );
};

export default PrivacyPolicyContent;
