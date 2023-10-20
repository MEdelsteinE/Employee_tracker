USE employee_tracker;

-- Get employees by role_id
SELECT 
    e.id AS employee_id, 
    e.first_name, 
    e.last_name, 
    r.id AS role_id,
    r.title AS job_title, 
    d.name AS department_name, 
    r.salary
FROM 
    employees e
JOIN 
    role r ON e.role_id = r.id
JOIN 
    department d ON r.department_id = d.id
LEFT JOIN 
    employees m ON e.manager_id = m.id;


--Get all epmloyees 
