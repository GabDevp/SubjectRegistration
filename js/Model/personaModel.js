const { Client } = require('pg');

const connection = new Client({
    user: '*****',
    host: 'localhost',
    database: 'postgres',
    password: '******',
    port: 5432,
});

connection.connect();

const registrarPersona = (materia, dia, profesor, cupos, fecha, creditos, callback) => {
    connection.query(
        `INSERT INTO persona (materia, dia, profesor, cupos, fecha, creditos) 
        VALUES ($1, $2, $3, $4, $5, $6)`, 
        [materia, dia, profesor, cupos, fecha, creditos],
        (err, results) => {
            if(err){
                callback(err, null);
            }else{
                callback(null, results)
            }
        }
    );
}

module.exports = {
    registrarPersona
}