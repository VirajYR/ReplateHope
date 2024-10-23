import React, { useState } from 'react';
import {
    TextField, Button, Grid, IconButton, Typography, Container, Box, Autocomplete,
} from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';

// Example list of food items
const foodItemsList = [
    { title: 'Rice' },
    { title: 'Bread' },
    { title: 'Milk' },
    { title: 'Pasta' },
    { title: 'Eggs' },
    { title: 'Potatoes' },
    { title: 'Chicken' },
    { title: 'Beef' },
    { title: 'Fish' },
];

const AddFoodForm = () => {
    const [organization, setOrganization] = useState('');
    const [foodItems, setFoodItems] = useState([{ name: null, quantity: '', expiryDate: '', isForChildren: false }]); // Added expiryDate and isForChildren
    const [foodOptions, setFoodOptions] = useState(foodItemsList);

    // Handler for updating the organization name
    const handleOrganizationChange = (event) => {
        setOrganization(event.target.value);
    };

    // Handler for updating food item details
    const handleFoodItemChange = (index, field, value) => {
        const newFoodItems = [...foodItems];
        newFoodItems[index][field] = value;
        setFoodItems(newFoodItems);
    };

    // Handler for adding a new food item
    const handleAddFoodItem = () => {
        setFoodItems([...foodItems, { name: null, quantity: '', expiryDate: '', isForChildren: false }]); // Added expiryDate and isForChildren
    };

    // Handler for removing a food item
    const handleRemoveFoodItem = (index) => {
        const newFoodItems = [...foodItems];
        newFoodItems.splice(index, 1);
        setFoodItems(newFoodItems);
    };

    // Handle form submission (for prototype purposes)
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Organization:', organization);
        console.log('Food Items:', foodItems);
        alert('Data submitted! Check the console for output.');
    };

    return (
        <Container maxWidth="md" sx={{ mt: 5 }}>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ p: 3, bgcolor: 'white', boxShadow: 3, borderRadius: 2 }}
            >
                <Typography variant="h4" component="h2" gutterBottom>
                    Add Food Information
                </Typography>

                {/* Organization Name */}
                <TextField
                    label="Organization Name"
                    fullWidth
                    value={organization}
                    onChange={handleOrganizationChange}
                    placeholder="Enter your organization name"
                    margin="normal"
                    required
                />

                {/* Food Items */}
                <Typography variant="h6" sx={{ mt: 4 }}>
                    Food Items
                </Typography>

                {foodItems.map((foodItem, index) => (
                    <Grid container spacing={2} key={index} alignItems="center" sx={{ mb: 2 }}>
                        <Grid item xs={6}>
                            <Autocomplete
                                options={foodOptions}
                                getOptionLabel={(option) => option.title}
                                fullWidth
                                value={foodItem.name ? { title: foodItem.name } : null}
                                onChange={(event, value) => handleFoodItemChange(index, 'name', value ? value.title : '')}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Food Item"
                                        variant="outlined"
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                label="Quantity (kg)"
                                type="number"
                                inputProps={{ min: '0', step: '0.01' }}
                                fullWidth
                                value={foodItem.quantity}
                                onChange={(e) => handleFoodItemChange(index, 'quantity', e.target.value)}
                                required
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <TextField
                                label="Expiry Date"
                                type="date"
                                fullWidth
                                value={foodItem.expiryDate}
                                onChange={(e) => handleFoodItemChange(index, 'expiryDate', e.target.value)}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                required
                            />
                        </Grid>
                        <Grid item xs={1}>
                            <IconButton color="error" onClick={() => handleRemoveFoodItem(index)}>
                                <DeleteIcon />
                            </IconButton>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body2">
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={foodItem.isForChildren}
                                        onChange={(e) => handleFoodItemChange(index, 'isForChildren', e.target.checked)}
                                    />
                                    Specially for Children
                                </label>
                            </Typography>
                        </Grid>
                    </Grid>
                ))}

                {/* Add Food Item Button */}
                <Button variant="contained" color="primary" onClick={handleAddFoodItem} sx={{ mt: 2 }}>
                    Add Food Item
                </Button>

                {/* Submit Button */}
                <Box textAlign="right" sx={{ mt: 4 }}>
                    <Button type="submit" variant="contained" color="success">
                        Submit
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default AddFoodForm;
