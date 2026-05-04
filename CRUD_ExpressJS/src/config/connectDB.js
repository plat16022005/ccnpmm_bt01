import mysql from 'mysql2/promise';

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "@Tuan16022005",
    database: "crud_demo"
});

export default connection;