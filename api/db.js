import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "corinthians2018",
    database: "projeto-academia"
})
