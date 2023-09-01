const mysql = require('mysql2');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'To27lo03so961996@!',
    database: 'biblioteca'
})

conn.connect = error => {
    if(error){throw error};
    console.log('Successfuly conected to ' + database);
}

module.exports = conn;