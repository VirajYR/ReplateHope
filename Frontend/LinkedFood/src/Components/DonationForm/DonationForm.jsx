import React, { useState } from 'react';
import {
    TextField, Button, Typography, Box, Container
} from '@mui/material';

const DonationForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [amount, setAmount] = useState('');

    const handleNameChange = (event) => setName(event.target.value);
    const handleEmailChange = (event) => setEmail(event.target.value);
    const handlePhoneNumberChange = (event) => setPhoneNumber(event.target.value);
    const handleAmountChange = (event) => setAmount(event.target.value);

    const handlePayment = () => {
        // Payment process with Razorpay will be implemented here
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Phone Number:', phoneNumber);
        console.log('Amount:', amount);

        // For now, just alerting the values
        alert(`Donation of ₹${amount} initiated by ${name}`);
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 5 }}>
            <Box
                component="form"
                sx={{ p: 3, bgcolor: 'white', boxShadow: 3, borderRadius: 2 }}
            >
                <Typography variant="h4" component="h2" gutterBottom>
                    Donate to our Cause
                </Typography>

                {/* Name Field */}
                <TextField
                    label="Your Name or Organization"
                    fullWidth
                    value={name}
                    onChange={handleNameChange}
                    placeholder="Enter your name or organization"
                    margin="normal"
                    required
                />

                {/* Email Field */}
                <TextField
                    label="Email"
                    type="email"
                    fullWidth
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter your email"
                    margin="normal"
                    required
                />

                {/* Phone Number Field */}
                <TextField
                    label="Phone Number (with Country Code)"
                    type="tel"
                    fullWidth
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    placeholder="+91XXXXXXXXXX"
                    margin="normal"
                    required
                />

                {/* Amount Field */}
                <TextField
                    label="Amount (₹)"
                    type="number"
                    inputProps={{ min: '0', step: '0.01' }}
                    fullWidth
                    value={amount}
                    onChange={handleAmountChange}
                    placeholder="Enter the donation amount"
                    margin="normal"
                    required
                />

                <Box textAlign="center" sx={{ mt: 4 }}>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={handlePayment}
                        disabled={!name || !email || !phoneNumber || !amount || Number(amount) <= 0}
                    >
                        Donate
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default DonationForm;