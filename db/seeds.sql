INSERT INTO department (name) 
VALUES ('Engineering'),
('Sales'),
('Design'),
('Legal');


INSERT INTO role (title, salary, department_id) 
VALUES ('Sales Lead', 100000, 1),
('Sales Person', 80000, 1),
('Design Manager', 100000, 2),
('Designer', 80000, 2),
('Lead Engineer', 120000, 3),
('Software Engineer', 90000, 3),
('Legal Team Lead', 150000, 4),
('Legal Advisor', 100000, 4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id) 
VALUES
(4, "Charbelle", "Chaz", 3, null),
(5, "Sofi", "Hernan", 4, null),
(7, "Char", "Dant", 6, null),
(10, "Jonathan", "Uong", 9, null),
(3, "Melissa", "Arm", 2, 4),
(1, "Alla", "Arous", 1, 3),
(2, "Rosie", "Cole", 1, 3),
(6, "Lianne", "Soon", 5, 7),
(8, "Zach", "Soar", 7, 10),
(9, "Martin", "Cast", 8, 10);