const db = require('../config/db');
const User = {};
User.create = (user, callback) => {
    const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    db.query(query, [user.username, user.email, user.password], callback);
};
User.findById = (id, callback) => {
    const query = 'SELECT * FROM users WHERE id = ?';
    db.query(query, [id], callback);
};
User.findByEmail = (email, callback) => {
    const query = 'SELECT * FROM users WHERE email = ?';
    db.query(query, [email], callback);
};
User.update = (id, user, callback) => {
    const query = 'UPDATE users SET username = ?, email = ? WHERE id = ?';
    db.query(query, [user.username, user.email, id], callback);
};
User.delete = (id, callback) => {
    const query = 'DELETE FROM users WHERE id = ?';
    db.query(query, [id], callback);
};
module.exports = User;