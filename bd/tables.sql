CREATE TABLE USER_SYSTEM (
	ID_USER_SYSTEM INT PRIMARY KEY AUTO_INCREMENT,
	USERNAME  VARCHAR(255) NOT NULL  UNIQUE,
	PASSWORD VARCHAR(255) NOT NULL,
	EMAIL VARCHAR(255) NOT NULL,
	PROFILE INTEGER NOT NULL
);

CREATE TABLE ANIMAL (
	ID_ANIMAL INT PRIMARY KEY AUTO_INCREMENT,
	NAME VARCHAR(255) NOT NULL,
	SPECIE VARCHAR(255) NOT NULL,
	GENDER VARCHAR(255) NOT NULL,
	OWNER INT NOT NULL,
    FOREIGN KEY (OWNER) REFERENCES USER_SYSTEM(ID_USER_SYSTEM) 
)