import React, { useState } from "react";
import CountUp from 'react-countup';
import VolunteerCard from "../card/VolunteerCard";
import VolunteerForm from "../VolunteerForm";
import bannerImage from "./bannerImage.webp";
import image1 from "./foodw.jpeg"; // Replace with actual image path
import image2 from "./foodim.jpeg"; // Replace with actual image path
import transportImage from "./DALL·E 2024-10-13 20.06.52 - A vertical 9_16 image of students giving food to a group of people including Zomato delivery workers, beggars, and poor children. The scene shows stud.webp"; // Example image for transport
import reportImage from "./report.webp"; // Example image for report
import organizationImage from "./ngo.webp"; // Example image for organizations
import './Volunteer.css'; // Import CSS file
import Navbar from "../Navbar/Navbar";

const Volunteer = () => {
  const [step, setStep] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleGetStarted = () => {
    setStep(1);
  };

  const handleCardClick = (cardType) => {
    setSelectedCard(cardType);
    setStep(2);
  };

  return (
    <>
    <Navbar></Navbar>
    
    <div className="container">
      {step === 0 && (
        <div>
          <img
            src={bannerImage}
            alt="Volunteer Banner"
            className="bannerImage"
          />

          {/* Two square images side by side */}
          <div className="square-image-container">
            <img src={image1} alt="Image 1" className="square-image" />
            <img src={image2} alt="Image 2" className="square-image" />
          </div>

          {/* Box-styled heading and paragraphs */}
          <div className="box-container">
            <h1 className="titleBox">Volunteer with Us</h1>
            <div className="subTextBox">
              <p className="subText">From Tables to Tummies!</p>
              <p className="subText">Give food a second chance: join the community!</p>
            </div>
          </div>

          <div className="countContainer">
            <div className="countBox">
              <CountUp end={100} duration={3} /> +
              <p className="countText">Volunteers</p>
            </div>
            <div className="separator"></div>
            <div className="countBox">
              <CountUp end={10} duration={3} />
              <p className="countText">NGOs and Feeding Partners</p>
            </div>
            <div className="separator"></div>
            <div className="countBox">
              <CountUp end={20} duration={3} />
              <p className="countText">Restaurants and Food Palaces</p>
            </div>
          </div>

          <button onClick={handleGetStarted} className="getStartedBtn">Get Started</button>
        </div>
      )}

      {step === 1 && (
        <div className="cardContainer">
          <VolunteerCard
            title="Transport Food"
            description="Help deliver surplus food to the needy."
            imageSrc={transportImage} // Pass transport image
            onClick={() => handleCardClick("transport")}
          />
          <VolunteerCard
            title="Report a New Source"
            description="Spot food left over at events? Report it!"
            imageSrc={reportImage} // Pass report image
            onClick={() => handleCardClick("report")}
          />
          <VolunteerCard
            title="Organizations with Surplus Food"
            description="Are you a restaurant or NGO? Donate surplus food."
            imageSrc={organizationImage} // Pass organization image
            onClick={() => handleCardClick("organization")}
          />
        </div>
      )}

      {step === 2 && <VolunteerForm type={selectedCard} />}
    </div></>
  );
};

export default Volunteer;
