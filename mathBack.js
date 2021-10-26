var express = require("express")
var app = express()
var cors = require('cors')
var db = require("./database.js")

app.use(cors())
app.use(express.static('public'))

var bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var HTTP_PORT = 3030

app.listen(HTTP_PORT, () => {
    console.log("MathKnight Backend kör på port %PORT%".replace("%PORT%",HTTP_PORT))
});

app.get("/teachers", (req, res) => {

    let sql = "select * from teacherDB"
    let params = []

    db.all(sql, params, (err, rows) => {
        res.json({
            "message": "Successfully imported users.",
            "teachers": rows
        })
    });
});

app.post("/students", (req, res, next) => {
    let problems=[];
    if(!req.body.studentName || !req.body.studentPassword || !req.body.studentAge){
        problems.push("Invalid data");
    }
    if (problems.length>0) {
        res.status(400).json({"error": problems});
        return;
    }
    let data = {
        studentName: req.body.studentName,
        studentPassword: req.body.studentPassword,
        studentAge: req.body.studentAge
    }

    let sql = "INSERT INTO studentDB (studentName, studentPassword, studentAge) VALUES (?,?,?)";
    let parametrar = [data.studentName, data.studentPassword, data.studentAge];
    db.run(sql, parametrar, function (err, result) {
        if (err) {
            res.status(400).json({"error": err.message});
            return;
        }
        res.json({
            "message": "success",
            "user": data,
            "id" : this.lastID
        })
    })
})

app.get("/students", (req, res) => {

    let sql = "select * from studentDB"
    let params = []

    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({"error": err.message});
            return;
        }
        res.json({
            "message": "Successfully imported database.",
            "students": rows
        })
    });
});

app.get("/addition", (req, res) => {

    let sql = "select * from additionDB"
    let params = []

    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({"error": err.message});
            return;
        }
        res.json({
            "message": "Successfully imported database.",
            "questions": rows
        })
    });
});

app.get("/subtraction", (req, res) => {

    let sql = "select * from subtractionDB"
    let params = []

    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({"error": err.message});
            return;
        }
        res.json({
            "message": "Successfully imported database.",
            "questions": rows
        })
    });
});