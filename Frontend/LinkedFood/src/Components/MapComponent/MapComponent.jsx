import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { pantries } from '../fakeData/pantries';
import './MapComponent.css'; // Import the new CSS file
import Navbar from '../Navbar/Navbar';

const MapComponent = () => {
  const [position, setPosition] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setPosition([latitude, longitude]);
          },
          (error) => {
            console.error("Error getting location:", error);
            setError("Unable to retrieve your location. Please make sure location services are enabled.");
          },
          {
            enableHighAccuracy: true,
            timeout: 20000,
            maximumAge: 0,
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
        setError("Geolocation is not supported by this browser.");
      }
    };

    getLocation();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!position) {
    return <div>Loading...</div>;
  }

  return (
    <>
    
        <Navbar></Navbar>
    <div className="map-container">
      {/* Left section - Map */}
      <div className="map-section">
        <MapContainer center={position} zoom={12} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          {/* User's location */}
          <Marker position={position}>
            <Popup>
              You are here: <br /> Latitude: {position[0]}, <br /> Longitude: {position[1]}
            </Popup>
          </Marker>

          {/* Pantry locations */}
          {pantries.map((pantry, index) => (
            <Marker key={index} position={[pantry.location.lat, pantry.location.lng]}>
              <Popup>
                <strong>{pantry.name}</strong><br />
                {pantry.address}<br />
                Timing: {pantry.timing}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Right section - Pantry information */}
      <div className="info-section">
        <h2 className="info-title">Food Pantries Information</h2>
        {pantries.map((pantry, index) => (
          <div key={index} className="pantry-card">
            <h3 className="pantry-name">{pantry.name}</h3>
            <p className="pantry-address">{pantry.address}</p>
            <p className="pantry-timing">Timing: {pantry.timing}</p>
            <h4 className="available-food-title">Available Food:</h4>
            <ul className="available-food-list">
              {pantry.availableFood.map((food, idx) => (
                <li key={idx}>{food}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div></>
  );
};

export default MapComponent;
