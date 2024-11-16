-- Creating a Database
-- A database named 'demo_db' is created to store all the tables and data.
CREATE DATABASE demo_db;

-- Selecting the Database
-- This ensures all subsequent operations are performed in the specified database.
USE demo_db;

-- Creating a Table
-- A 'users' table is created with various column types to demonstrate data types.
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,        -- Primary key with auto-increment for unique identification
    name VARCHAR(100) NOT NULL,               -- A string field for user names, cannot be NULL
    email VARCHAR(255) UNIQUE NOT NULL,       -- A unique email field
    age INT CHECK (age >= 0),                 -- Integer with a constraint for non-negative values
    registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Timestamp field with a default value
);

-- Inserting Data
-- Sample data is inserted into the 'users' table.
INSERT INTO users (name, email, age)
VALUES 
('Alice', 'alice@example.com', 25),
('Bob', 'bob@example.com', 30),
('Charlie', 'charlie@example.com', 35);

-- Querying Data
-- Select all columns from the 'users' table.
SELECT * FROM users;

-- Filtering Data
-- Use WHERE clause to filter rows based on conditions.
SELECT * FROM users WHERE age > 30;

-- Sorting Data
-- Sort rows by age in descending order.
SELECT * FROM users ORDER BY age DESC;

-- Updating Data
-- Update the email of a user based on their ID.
UPDATE users 
SET email = 'bob.new@example.com' 
WHERE id = 2;

-- Deleting Data
-- Delete a user record based on their ID.
DELETE FROM users WHERE id = 3;

-- Joins
-- Create another table for demonstrating joins.
CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,    -- Primary key with auto-increment
    user_id INT,                          -- Foreign key referencing 'users' table
    order_date DATE NOT NULL,             -- Date of the order
    amount DECIMAL(10, 2) NOT NULL,       -- Order amount with two decimal places
    FOREIGN KEY (user_id) REFERENCES users(id) -- Define foreign key constraint
);

-- Insert sample data into the 'orders' table.
INSERT INTO orders (user_id, order_date, amount)
VALUES 
(1, '2024-11-01', 150.75),
(2, '2024-11-02', 200.50),
(1, '2024-11-03', 300.00);

-- Perform an INNER JOIN to retrieve user details along with their orders.
SELECT 
    users.name AS UserName, 
    orders.order_date AS OrderDate, 
    orders.amount AS OrderAmount
FROM 
    users
INNER JOIN 
    orders 
ON 
    users.id = orders.user_id;

-- Aggregate Functions
-- Calculate total order amount and average order amount.
SELECT 
    SUM(amount) AS TotalAmount, 
    AVG(amount) AS AverageAmount 
FROM 
    orders;

-- Grouping Data
-- Group data by user and calculate total spending per user.
SELECT 
    user_id, 
    SUM(amount) AS TotalSpent 
FROM 
    orders 
GROUP BY 
    user_id;

-- Subqueries
-- Find users who have placed orders with amounts greater than 200.
SELECT 
    name 
FROM 
    users 
WHERE 
    id IN (SELECT user_id FROM orders WHERE amount > 200);

-- Indexes
-- Add an index to the 'email' column in the 'users' table to improve search performance.
CREATE INDEX idx_email ON users(email);

-- Views
-- Create a view to simplify access to user and order information.
CREATE VIEW user_orders AS
SELECT 
    users.name AS UserName, 
    orders.order_date AS OrderDate, 
    orders.amount AS OrderAmount
FROM 
    users
INNER JOIN 
    orders 
ON 
    users.id = orders.user_id;

-- Query the view.
SELECT * FROM user_orders;

-- Transactions
-- Demonstrate transaction management for consistency.
START TRANSACTION;

-- Attempt to insert a new order and update a user record.
INSERT INTO orders (user_id, order_date, amount) VALUES (2, '2024-11-04', 500.00);
UPDATE users SET age = 31 WHERE id = 2;

-- Commit the transaction if all operations are successful.
COMMIT;

-- Rollback Example
-- Start another transaction but rollback changes.
START TRANSACTION;
DELETE FROM users WHERE id = 1; -- Delete a user (this change will be reverted)
ROLLBACK; -- Revert the delete operation.

-- Dropping Tables
-- Drop the orders table.
DROP TABLE orders;

-- Dropping the Database
-- Drop the entire database.
DROP DATABASE demo_db;
