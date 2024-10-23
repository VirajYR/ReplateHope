import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImg from "../../assets/Logo.jpeg";
import pantryLogo from "../../assets/pantryLogo.webp";
import donateLogo from "../../assets/donateLogo.webp";
import volunteerLogo from "../../assets/volunteerLogo.webp";
import partnerLogo from "../../assets/partnerLogo.webp";
import "./Hero.css";

const Hero = () => {
    const [activeCard, setActiveCard] = useState('pantry'); // State to track the active card

    const handleCardClick = (cardName) => {
        setActiveCard(cardName); // Update the active card based on user click
    };

    return (
        <div className='Hero'>
            <div className="logo"><img src={logoImg} alt="Logo" /></div>
            <div className="cards">
                {/* Pantry Card */}
                <div
                    className={`card PantryCard ${activeCard === 'pantry' ? 'expanded' : ''}`}
                    onClick={() => handleCardClick('pantry')}
                >
                    <div className="cardLeft">
                        <h1>Find Food Pantry</h1>
                        <p>Find Nearby Food Pantry</p>
                        <Link to="/map">   <span>Explore Now</span></Link>
                    </div>
                    <div className="cardRight">
                        <img src={pantryLogo} alt="Pantry Logo" />
                    </div>
                </div>

                {/* Donate Card */}
                <div
                    className={`card DonateCard ${activeCard === 'donate' ? 'expanded' : ''}`}
                    onClick={() => handleCardClick('donate')}
                >
                    <div className="cardLeft">
                        <h1>Donate</h1>
                        <p>Donate Food or Money</p>
                        <Link to="/add-food">   <span>Explore Now</span></Link>
                    </div>
                    <div className="cardRight">
                        <img src={donateLogo} alt="Donate Logo" />
                    </div>
                </div>

                {/* Volunteer Card */}
                <div
                    className={`card VolunteerCard ${activeCard === 'volunteer' ? 'expanded' : ''}`}
                    onClick={() => handleCardClick('volunteer')}
                >
                    <div className="cardLeft">
                        <h1>Volunteer</h1>
                        <p>Volunteer for transporting food.</p>
                        <Link to="/volunteer">   <span>Explore Now</span></Link>
                    </div>
                    <div className="cardRight">
                        <img src={volunteerLogo} alt="Volunteer Logo" />
                    </div>
                </div>

                {/* Shop & Support Card */}
                <div
                    className={`card ShopCard ${activeCard === 'shop' ? 'expanded' : ''}`}
                    onClick={() => handleCardClick('shop')}
                >
                    <div className="cardLeft">
                        <h1>Shop & Support</h1>
                        <p>You can support Linked Food by shopping with our partners! </p>
                        <p></p>
                        <Link to="/partner">   <span>Explore Now</span></Link>
                    </div>
                    <div className="cardRight">
                        <img src={partnerLogo} alt="Shop Logo" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
