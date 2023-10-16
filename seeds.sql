USE employee_tracker;

INSERT INTO department (name) 
VALUES ("Bakery"),
       ("Toppings"),
       ("Meats");

INSERT INTO role (title, department_id, salary)
VALUES ("Manager", 1, 75000.00),
       ("Assistant Manager", 2, 60000.00),
       ("Baker", 1, 50000.00),
       ("Sandwich Maker", 3, 35000.00),
       ("Cashier", 1, 20000.00);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Sam", "Monahan", 1, NULL),
       ("Dean", "Singer", 2, 1),
       ("Ruby", "Cassidy", 3, NULL),
       ("Bobby", "Turner", 4, NULL),
       ("Meg", "Novak", 5, NULL);

