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
                let insert = 'INSERT INTO additionDB (question, answer) VALUES (?,?)'
                db.run(insert, ["1+1", 2])
                db.run(insert, ["2+1", 3])
                db.run(insert, ["1+3", 4])
                db.run(insert, ["4+1", 5])
                db.run(insert, ["2+4", 6])
                db.run(insert, ["5+2", 7])
                db.run(insert, ["3+5", 8])
                db.run(insert, ["6+3", 9])
                db.run(insert, ["6+4", 10])
                db.run(insert, ["5+6", 11])
                db.run(insert, ["9+3", 12])
                db.run(insert, ["7+6", 13])
                db.run(insert, ["9+5", 14])
                db.run(insert, ["12+3", 15])
                db.run(insert, ["9+7", 16])
                db.run(insert, ["14+3", 17])
                db.run(insert, ["9+9", 18])
                db.run(insert, ["12+7", 19])
                db.run(insert, ["16+4", 20])
                db.run(insert, ["4+3", 7])
            }
        })
        db.run(`CREATE TABLE subtractionDB (
            id INTEGER PRIMARY KEY,
            question TEXT,
            answer INTEGER
            )`,(err) => {
            if (err) {
                // Table already created
            }else{
                let insert = 'INSERT INTO subtractionDB (question, answer) VALUES (?,?)'
                db.run(insert, ["2-1", 1])
                db.run(insert, ["8-6", 2])
                db.run(insert, ["5-2", 3])
                db.run(insert, ["6-2", 4])
                db.run(insert, ["10-5", 5])
                db.run(insert, ["7-1", 6])
                db.run(insert, ["12-5", 7])
                db.run(insert, ["10-2", 8])
                db.run(insert, ["15-6", 9])
                db.run(insert, ["20-10", 10])
                db.run(insert, ["12-1", 11])
                db.run(insert, ["18-6", 12])
                db.run(insert, ["17-4", 13])
                db.run(insert, ["20-6", 14])
                db.run(insert, ["19-4", 15])
                db.run(insert, ["18-2", 16])
                db.run(insert, ["20-3", 17])
                db.run(insert, ["19-1", 18])
                db.run(insert, ["20-1", 19])
                db.run(insert, ["20-0", 20])
            }

        })
        db.run(`CREATE TABLE multiplicationDB (
            id INTEGER PRIMARY KEY,
            question TEXT,
            answer INTEGER
            )`,(err) => {
            if (err) {
                // Table already created
            }else{
                let insert = 'INSERT INTO multiplicationDB (question, answer) VALUES (?,?)'
                db.run(insert, ["5x5", 25])
                db.run(insert, ["5x2", 10])
                db.run(insert, ["5x3", 15])
                db.run(insert, ["10x2", 20])
                db.run(insert, ["9x3", 27])
                db.run(insert, ["9x8", 72])
                db.run(insert, ["7x8", 56])
                db.run(insert, ["6x5", 30])
                db.run(insert, ["6x6", 36])
                db.run(insert, ["6x7", 42])
                db.run(insert, ["1x9", 9])
                db.run(insert, ["8x2", 16])
                db.run(insert, ["9x10", 90])
                db.run(insert, ["9x9", 81])
                db.run(insert, ["11x2", 22])
                db.run(insert, ["50x2", 100])
                db.run(insert, ["5x9", 45])
                db.run(insert, ["6x8", 48])
                db.run(insert, ["4x10", 40])
                db.run(insert, ["4x9", 36])

            }
        })

        db.run(`CREATE TABLE divisionDB (
            id INTEGER PRIMARY KEY,
            question TEXT,
            answer INTEGER
            )`,(err) => {
            if (err) {
                // Table already created
            } else {
                let insert = 'INSERT INTO divisionDB (question, answer) VALUES (?,?)'
                db.run(insert, ["5/5", 1])
                db.run(insert, ["10/2", 5])
                db.run(insert, ["15/3", 5])
                db.run(insert, ["20/2", 10])
                db.run(insert, ["18/3", 6])
                db.run(insert, ["81/9", 9])
                db.run(insert, ["56/8", 7])
                db.run(insert, ["30/5", 6])
                db.run(insert, ["36/6", 6])
                db.run(insert, ["42/7", 6])
                db.run(insert, ["9/9", 1])
                db.run(insert, ["16/2", 8])
                db.run(insert, ["90/10", 9])
                db.run(insert, ["100/10", 10])
                db.run(insert, ["22/2", 11])
                db.run(insert, ["100/2", 50])
                db.run(insert, ["45/9", 5])
                db.run(insert, ["48/8", 6])
                db.run(insert, ["40/10", 4])
                db.run(insert, ["36/9", 4])

            }
        })
    }
})



module.exports = db

