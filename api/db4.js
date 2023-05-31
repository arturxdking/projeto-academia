import mysql from "mysql"

export const db4 = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "corinthians2018",
    database: "crud4"
})