import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './FollowUs.css';

const FollowUs = () => {
    return (
        <div className="follow-us-container">
            <h1>Follow Us on Social Media</h1>
            <p>Stay up to date on food drives, closings, events,
            </p>
            <p>and other ways to help out our community.</p>
            <div className="social-icons">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="icon facebook">
                    <FaFacebookF />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="icon twitter">
                    <FaTwitter />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="icon instagram">
                    <FaInstagram />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="icon linkedin">
                    <FaLinkedinIn />
                </a>
            </div>
        </div>
    );
};

export default FollowUs;
