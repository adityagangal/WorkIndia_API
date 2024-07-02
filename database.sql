CREATE DATABASE my_database;
USE my_database;
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

/*
3 Request Data : {
4 "category": "SUV",
5 "model": "BMW Q3"
6 "number_plate": "KA1234",
7 "current_city": "bangalore",
8 "rent_per_hr": 100,
9 "rent_history": []
10 }
*/
Create TABLE cars (
    car_id INT AUTO_INCREMENT PRIMARY KEY,
    category VARCHAR(50) not null,
    model VARCHAR(50) not null,
    number_plate VARCHAR(50) not null,
    current_city VARCHAR(50) not null,
    rent_per_hr INT not null
);