import React from 'react';
import './TermsAndCondtionsContent.scss'; // Importing the SCSS file for styling

const TermsAndCondtionsContent = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <div className="left-content">
          <h2 className="about-us-heading">Terms and Conditions</h2>
          
            <p>
                Welcome to Believer Arts! These terms and conditions outline the rules and regulations for the use of our website, located at www.believerarts.com.
            </p>
            <h2 className="about-us-heading">Intellectual Property</h2>
            <p>
                The content, features, and functionality of our website, including but not limited to text, graphics, logos, images, and software, are the property of Believer Arts and are protected by international copyright laws.
            </p>
            <h2 className="about-us-heading">Use License</h2>
            <p>
                Users are granted a limited license to access and use our website for personal, non-commercial use. This license does not include the right to:
            </p>
            <ul>
                <li>Modify or copy the materials;</li>
                <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                <li>Attempt to decompile or reverse engineer any software contained on Believer Arts;</li>
                <li>Remove any copyright or other proprietary notations from the materials; or</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
            </ul><br></br>
            <h2 className="about-us-heading">Disclaimer</h2>
            <p>
                The materials on Believer Arts are provided on an 'as is' basis. Believer Arts makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
            {/* Include more sections as per your website's terms and conditions */}
            <h2 className="about-us-heading">Changes to This Agreement</h2>
            <p>
            Believer Arts reserves the right to modify these terms and conditions at any time. Your continued use of the site after any such changes constitutes your acceptance of the new terms and conditions. Please review this agreement periodically for changes. If you do not agree to any of this agreement or any changes to this agreement, do not use, access, or continue to access the site or discontinue any use of the site immediately.
            </p>
            <h2 className="about-us-heading">Contacting Us</h2>
            <p>
                If you have any questions about these Terms and Conditions, please contact us at imaginebeliever777@gmail.com.
            </p>

        </div>
       
      </div>
    </div>
  );
};

export default TermsAndCondtionsContent;
