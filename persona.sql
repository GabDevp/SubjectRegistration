CREATE TABLE Persona (
    id SERIAL PRIMARY KEY,
    materia VARCHAR(50) NOT NULL,
    dia VARCHAR(50) NOT NULL,
    profesor VARCHAR(50) NOT NULL,
    cupos INT,
    fecha DATE,
    creditos VARCHAR(10)
);