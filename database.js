const sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "mathKnightDB.db"


let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        // Cannot open database
        console.error(err.message)
        throw err
    }else{
        console.log('Connected to the SQlite database.')
        db.run(`CREATE TABLE teacherDB (
            teacherName TEXT PRIMARY KEY,
            teacherPassword TEXT
            )`,(err) => {
            if (err) {
                // Table already created
            }else{
                // Table just created, creating some rows
                let insert = 'INSERT INTO teacherDB (teacherName, teacherPassword) VALUES (?,?)'
                db.run(insert, ["admin", "123"])
            }
        })
        db.run(`CREATE TABLE studentDB (
            studentName TEXT PRIMARY KEY,
            studentPassword TEXT,
            studentScore INTEGER,
            studentAge INTEGER
            )`,(err) => {
            if (err) {
                // Table already created
            }
        })
        db.run(`CREATE TABLE additionDB (
            id INTEGER PRIMARY KEY,
            question TEXT,
            answer INTEGER
            )`,(err) => {
            if (err) {
                // Table already created
            }else{
                // Table just created, creating some rows
                let insert = 'INSERT INTO additionDB (question, answer) VALUES (?,?)'
                db.run(insert, ["1+1", "2"])
                db.run(insert, ["2+1", "3"])
                db.run(insert, ["1+3", "4"])
                db.run(insert, ["4+1", "5"])
                db.run(insert, ["2+4", "6"])
                db.run(insert, ["5+2", "7"])
                db.run(insert, ["3+5", "8"])
                db.run(insert, ["6+3", "9"])
                db.run(insert, ["6+4", "10"])
                db.run(insert, ["5+6", "11"])
                db.run(insert, ["9+3", "12"])
                db.run(insert, ["7+6", "13"])
                db.run(insert, ["9+5", "14"])
                db.run(insert, ["12+3", "15"])
                db.run(insert, ["9+7", "16"])
                db.run(insert, ["14+3", "17"])
                db.run(insert, ["9+9", "18"])
                db.run(insert, ["12+7", "19"])
                db.run(insert, ["16+4", "20"])
                db.run(insert, ["4+3", "7"])
            }
        })
    }
})

module.exports = db

