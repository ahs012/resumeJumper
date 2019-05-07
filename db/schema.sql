-- Drops the resume DB if it exists currently --
DROP DATABASE IF EXISTS resume_db;
-- Creates + Use the "resume" database --
CREATE DATABASE resume_db;
USE resume_db;
CREATE TABLE users_table(
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(100) NOT NULL,
username VARCHAR(100) NOT NULL,
email VARCHAR(100) NOT NULL,
address VARCHAR(100),
password VARCHAR(100)
);


