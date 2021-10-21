let express = require("express")
let app = express()
let cors = require('cors')

app.use(cors())
app.use(express.static('public'))

let bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

let db = require("./database.js")

let HTTP_PORT = 3030

app.listen(HTTP_PORT, () => {
    console.log("MathKnight Backend kör på port %PORT%".replace("%PORT%",HTTP_PORT))
});

app.get("/students", (req, res) => {

    let sql = "select * from students"
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