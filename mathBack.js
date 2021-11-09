let express = require("express")
let app = express()
let cors = require('cors')
let db = require("./database.js")

app.use(cors())
app.use(express.static('public'))

let bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

let HTTP_PORT = 3030

app.listen(HTTP_PORT, () => {
    console.log("MathKnight Backend kör på port %PORT%".replace("%PORT%", HTTP_PORT))
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

app.post("/students", (req, res) => {
    let problems = [];
    if (!req.body.studentName || !req.body.studentPassword || !req.body.studentAge) {
        problems.push("Invalid data");
    }
    if (problems.length > 0) {
        res.status(400).json({"error": problems});
        return;
    }
    let data = {
        studentName: req.body.studentName,
        studentPassword: req.body.studentPassword,
        studentAge: req.body.studentAge
    }

    let sql = "INSERT INTO studentDB (studentName, studentPassword, studentAge, studentScore, studentWrongAns, studentAnsQ) VALUES (?,?,?,0,0,0)";
    let parametrar = [data.studentName, data.studentPassword, data.studentAge];
    db.run(sql, parametrar, function (err) {
        if (err) {
            res.status(400).json({"error": err.message});
            return;
        }
        res.json({
            "message": "success",
            "user": data,
            "id": this.lastID
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

//increase points
app.put("/students", (req, res) => {
    let data = {
        studentName: req.body.studentName,
        acquiredPoints: req.body.studentScore
    }
    let sql = 'UPDATE studentDB SET studentScore = studentScore+? WHERE studentName = ?'
    let params = [data.acquiredPoints,data.studentName]
    db.run(sql, params, function (err) {
        if (err) {
            res.status(400).json({"error": err.message})
            return;
        }
        res.json({
            "message": "success",
            "bok": data,
            "id": this.lastID
        })
    });
})

app.put("/students/achi", (req, res) => {
    let data = {
        studentName: req.body.studentName,
        acquiredAnswers: req.body.studentAnsQ
    }
    let sql = 'UPDATE studentDB SET studentAnsQ = studentAnsQ+? WHERE studentName = ?'
    let params = [data.acquiredAnswers,data.studentName]
    db.run(sql, params, function (err) {
        if (err) {
            res.status(400).json({"error": err.message})
            return;
        }
        res.json({
            "message": "success",
            "bok": data,
            "id": this.lastID
        })
    });
})

app.put("/students/wrong", (req, res) => {
    let data = {
        studentName: req.body.studentName,
        acquiredWrongs: req.body.studentWrongAns
    }
    let sql = 'UPDATE studentDB SET studentWrongAns = studentWrongAns+? WHERE studentName = ?'
    let params = [data.acquiredWrongs,data.studentName]
    db.run(sql, params, function (err) {
        if (err) {
            res.status(400).json({"error": err.message})
            return;
        }
        res.json({
            "message": "success",
            "bok": data,
            "id": this.lastID
        })
    });
})

//reset score
app.put("/students/reset", (req, res) => {
    let data = {
        studentName: req.body.studentName
    }
    let sql = 'UPDATE studentDB SET studentScore = 0 WHERE studentName = ?'
    let params = [data.studentName]
    db.run(sql, params, function (err) {
        if (err) {
            res.status(400).json({"error": err.message})
            return;
        }
        res.json({
            "message": "success",
            "bok": data,
            "id": this.lastID
        })
    });
})

app.delete("/students", (req, res) => {
    let data = {
        studentName: req.body.studentName
    }
    let sql = "DELETE FROM studentDB WHERE studentName = ?";
    let params = data.studentName;
    db.run(sql, params, function (err) {
        if (err) {
            res.status(400).json({"error": res.message})
            return;
        }
        res.json({"message": "deleted", rows: this.changes})
    })
})

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

app.get("/division", (req, res) => {

    let sql = "select * from divisionDB"
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

app.get("/multiplication", (req, res) => {

    let sql = "select * from multiplicationDB"
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