
DROP TABLE student;
DROP TABLE GROUPS;
CREATE TABLE groups(  
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    name TEXT
);
CREATE TABLE student(  
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    firstName TEXT,
    lastName TEXT,
    middleName TEXT,
    groupId INTEGER,
    FOREIGN KEY (groupId) REFERENCES groups(id)
);