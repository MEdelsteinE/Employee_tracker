USE employee_tracker;

-- Get employees by role_id
SELECT
e.first_name,
e.last_name,
r.title AS role_title.
d.dep_name AS department
FROM employees e
    JOIN r role
        ON e.department_id
