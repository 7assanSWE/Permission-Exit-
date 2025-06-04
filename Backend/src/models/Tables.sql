CREATE TABLE Gate_Personnel (
    EMP_ID INT PRIMARY KEY,
    First_n VARCHAR(15) NOT NULL,
    Middle_n VARCHAR(15),
    Last_n VARCHAR(15) NOT NULL,
    Gender ENUM('Male', 'Female'),
  	Phone VARCHAR(15) NOT NULL
);
-- Insert sample data
INSERT INTO Gate_Personnel (EMP_ID, First_n, Middle_n, Last_n, Gender, Phone) 
VALUES (101, 'Salem', 'Fahad', 'AlQahtani', 'Male', '0503333444');


CREATE TABLE Responsible (
    EMP_ID INT PRIMARY KEY,
    First_n VARCHAR(15) NOT NULL,
    Middle_n VARCHAR(15),
    Last_n VARCHAR(15) NOT NULL,
    Gender ENUM('Male', 'Female'),
  	Phone VARCHAR(15) NOT NULL
);
-- Insert sample data
INSERT INTO Responsible (EMP_ID, First_n, Middle_n, Last_n, Gender, Phone) 
VALUES (201, 'Yasmeen', 'Saad', 'AlFahad', 'Female', '0501111222');


CREATE TABLE Student (
    Student_ID INT PRIMARY KEY,
    First_n VARCHAR(15) NOT NULL,
    Middle_n VARCHAR(15),
    Last_n VARCHAR(15) NOT NULL,
    Gender ENUM('Male', 'Female'),
    Guardian_Phone VARCHAR(15) NOT NULL,
    Academic_Stage ENUM('1', '2', '3', '4', '5', '6') NOT NULL
);
-- Insert sample data
INSERT INTO Student (Student_ID, First_n, Middle_n, Last_n, Gender, Guardian_Phone, Academic_Stage) VALUES
(101, 'Zahraa', 'Hany', 'AlMohammad', 'Female', '0500000001', '3'),
(102, 'Jood', 'Firas', 'AlAhmed', 'Female', '0500000002', '2'),
(103, 'Sara', 'Nabil', 'AlAli', 'Female', '0500000003', '4'),
(104, 'Farah', 'Omar', 'AlMohammad', 'Female', '0500000004', '3'),
(105, 'Fatima', 'Sami', 'Alyaseen', 'Female', '0500000005', '5');


CREATE TABLE Exit_Request (
  Request_ID INT AUTO_INCREMENT PRIMARY KEY,
  Status ENUM('Present', 'Requested', 'Approved', 'Exited', 'Rejected'),
  Created_At DATETIME DEFAULT CURRENT_TIMESTAMP,
  FK_Emp_ID INT DEFAULT 101,
  FK_Student_ID INT,
  FK_Res_ID INT DEFAULT 201,

  FOREIGN KEY (FK_Emp_ID) REFERENCES Gate_Personnel(EMP_ID),
  FOREIGN KEY (FK_Student_ID) REFERENCES Student(Student_ID),
  FOREIGN KEY (FK_Res_ID) REFERENCES Responsible(EMP_ID)
);
-- Insert sample data
INSERT INTO Exit_Request (Status, FK_Student_ID)VALUES
  ('Requested', 101),
  ('Approved', 102),
  ('Exited', 103),
  ('Rejected', 104),
  ('Approved', 105);

