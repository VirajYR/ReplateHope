import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import AddFoodForm from '../Components/AddFoodForm/AddFoodForm'
import DonationForm from '../Components/DonationForm/DonationForm'
const DonatePage = () => {
    return (
        <div className='DonatePage'>

            <Navbar></Navbar>
            <AddFoodForm></AddFoodForm>
            <DonationForm></DonationForm>

        </div>
    )
}

export default DonatePage