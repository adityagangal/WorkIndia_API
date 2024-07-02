const db = require('../config/db');
const Car = {};
Car.create = (car, callback) => {
    const query = 'INSERT INTO cars (category, model, number_plate, current_city, rent_per_hr) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [car.category, car.model, car.number_plate, car.current_city, car.rent_per_hr], callback);
};
Car.findById = (id, callback) => {
    const query = 'SELECT * FROM cars WHERE car_id = ?';
    db.query(query, [id], callback);
};

Car.list = (callback) => {
    const query = 'SELECT * FROM cars';
    db.query(query, callback);
};

Car.update = (id, car, callback) => {
    const query = 'UPDATE cars SET category = ?, model = ? , number_plate = ?, current_city = ?, rent_per_hr = ? WHERE car_id = ?';
    db.query(query, [car.category, car.model, car.number_plate, car.current_city, car.rent_per_hr, id], callback);
};
Car.delete = (id, callback) => {
    const query = 'DELETE FROM users WHERE id = ?';
    db.query(query, [id], callback);
};
module.exports = Car;