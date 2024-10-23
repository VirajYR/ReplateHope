import React from 'react';
import './ShopSupport.css'; // Import the CSS for styling
import logo1 from '../../assets/ncu.jpeg'; // Replace with your actual logo image
import logo2 from '../../assets/zomato.jpeg'; // Replace with actual logo image
import Navbar from '../Navbar/Navbar';

const ShopSupport = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="shop-support-container">
                <h1 className="shop-title">Shop & Support</h1>
                <p className="shop-subtitle">You can support us by shopping with our partners!</p>

                <div className="partner-container">
                    {/* Partner 1 */}
                    <div className="partner-box">
                        <img src={logo1} alt="Crocs Logo" className="partner-logo" />
                        <h2 className="partner-title">The Northcap University </h2>
                        <p className="partner-description">
                            has been dedicated to ending hunger and food waste in our communities. Through their consistent donations of surplus food and resources, they have helped provide over 10,000 meals to families in need. Their unwavering support continues to play a crucial role in building a more equitable and sustainable food system.
                        </p>
                    </div>

                    {/* Partner 2 */}
                    <div className="partner-box">
                        <img src={logo2} alt="Pampered Chef Logo" className="partner-logo" />
                        <h2 className="partner-title">Zomato</h2>
                        <p className="partner-description">
                            has been dedicated to ending hunger and food waste in our communities. Through their consistent donations of surplus food and resources, they have helped provide over 10,000 meals to families in need. Their unwavering support continues to play a crucial role in building a more equitable and sustainable food system.
                        </p>
                    </div>
                </div>
            </div> </>
    );
};

export default ShopSupport;