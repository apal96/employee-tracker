INSERT INTO department (name)
VALUES("Accounting"),
      ("Marketing"),
      ("Research");

INSERT INTO role(id,title, salary, department_id)
VALUES (1, "Manager", 100000, 1),
        (2, "Researcher", 75000, 3),
        (3, "Marketer", 72000, 2);
    
INSERT INTO employee(id, first_name, last_name, role_id)
VALUES (1,"Paul", "Blart", 1),
        (2, "Winston", "Schmidt",3),
        (3, "Chandler", "Bing", 3),
        (4, "Ross", "Geller", 2);

