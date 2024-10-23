import React, { useState } from "react";
import "./VolunteerCard.css"; // Assuming the CSS is already moved here

const VolunteerCard = ({ title, description, onClick, imageSrc }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className={`volunteer-card ${hovered ? 'hover' : ''}`} 
  onMouseEnter={() => setHovered(true)} 
  onMouseLeave={() => setHovered(false)}
  onClick={onClick}
>
  <img src={imageSrc} alt={`${title} image`} />
  <div className="volunteer-card-content">
    <h3 className="volunteer-card-title">{title}</h3>
    <p className="volunteer-card-description">{description}</p>
  </div>
</div>

  );
};

export default VolunteerCard;
