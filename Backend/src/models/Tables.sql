CREATE TABLE Gate_Personnel (
    EMP_ID INT PRIMARY KEY,
    First_n VARCHAR(15) NOT NULL,
    Middle_n VARCHAR(15),
    Last_n VARCHAR(15) NOT NULL,
    Gender ENUM('Male', 'Female'),
  	Phone VARCHAR(15) NOT NULL,
);

CREATE TABLE Exit_Request (
  Request_ID INT PRIMARY KEY,
  Status ENUM('Pending', 'Waiting', 'Exited', 'Rejected'),
  Created_At DATETIME,
  FK_Emp_ID INT,
  FK_Student_ID INT,
  FK_Res_ID INT,
  
  FOREIGN KEY (FK_Emp_ID) REFERENCES Gate_Personnel(EMP_ID),
  FOREIGN KEY (FK_Student_ID) REFERENCES Student(Student_ID),
  FOREIGN KEY (FK_Res_ID) REFERENCES Responsible(Res_ID)
);

CREATE TABLE Responsible (
    EMP_ID INT PRIMARY KEY,
    First_n VARCHAR(15) NOT NULL,
    Middle_n VARCHAR(15),
    Last_n VARCHAR(15) NOT NULL,
    Gender ENUM('Male', 'Female'),
  	Phone VARCHAR(15) NOT NULL,
);

CREATE TABLE Student (
    Student_ID INT PRIMARY KEY,
    First_n VARCHAR(15) NOT NULL,
    Middle_n VARCHAR(15),
    Last_n VARCHAR(15) NOT NULL,
    Gender ENUM('Male', 'Female'),
    Guardian_Phone VARCHAR(15) NOT NULL,
    Academic_Stage ENUM('1', '2', '3', '4', '5', '6') NOT NULL
);
