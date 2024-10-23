import React from 'react'
import image1 from "../../assets/image1.webp"
import image2 from "../../assets/image2.jpg"
import image3 from "../../assets/image3.webp"
import "./Facts.css"
const Facts = () => {
  return (
    <div className='Facts'>

<div className="section-container">
            {/* Section 1 */}
            <div className="section">
                <div className="section-text">
                    <h1>Global Hunger Index (GHI) Rank</h1>
                    <p>India ranks 111 out of a total of 125 countries in the Global Hunger Index (GHI) 2023</p>
                </div>
                <div className="section-image">
                    <img src={image1} alt="Hunger statistics" />
                </div>
            </div>

            {/* Section 2 */}
            <div className="section reverse">
                <div className="section-text">
                    <h1>Deaths due to Hunger</h1>
                    <p>In India, near about 3000 children die due to hunger on a daily basis and 5 lakh Indians die every year because of hunger.30% of newborns die due to a lack of nutrition.</p>
                </div>
                <div className="section-image">
                    <img src={image2} alt="Donate" />
                </div>
            </div>

            {/* Section 3 */}
            <div className="section">
                <div className="section-text">
                    <h1>Food Wastage in india</h1>
                    <p>According to the UNEP’s food wastage index report, 68.7 million tonnes of food is wasted annually in Indian homes, in simple words it is about 55 kgs per person. It stands 2nd worldwide in terms of household wastage of food only followed by China.</p>
                </div>
                <div className="section-image">
                    <img src={image3} alt="Volunteer" />
                </div>
            </div>
        </div>
    </div>

  )
}

export default Facts