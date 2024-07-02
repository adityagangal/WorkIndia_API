const Car = require('../models/carsModel');
const jwt = require('jsonwebtoken');
const carsController = {};
carsController.addCar = async (req, res) => {
    const { category, model, number_plate, current_city, rent_per_hr } = req.body;
    Car.create({ category, model, number_plate, current_city, rent_per_hr }, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Car Added Succesfully!' });
    });
};

carsController.getCar = (req, res) => {
    User.list((err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: 'Car not found' });
        }
        res.json(results);
    });
};

carsController.updateCar = (req, res) => {
    const carId = req.cars.id;
    const {category, model, number_plate, current_city, rent_per_hr } = req.body;
    Car.update(userId, { category, model, number_plate, current_city, rent_per_hr }, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Car updated successfully!' });
    });
};
carsController.deleteCar = (req, res) => {
    const carId = req.cars.id;
    Car.delete(carId, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Car deleted successfully!' });
    });
};
module.exports = carsController;