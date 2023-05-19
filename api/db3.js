import mysql from "mysql"

export const db3 = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "corinthians2018",
    database: "crud3"
})