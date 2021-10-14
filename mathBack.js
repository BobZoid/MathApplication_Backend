var express = require("express")
var app = express()
var cors = require('cors')

app.use(cors())
app.use(express.static('public'))

var bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var HTTP_PORT = 3030

app.listen(HTTP_PORT, () => {
    console.log("MathKnight Backend kör på port %PORT%".replace("%PORT%",HTTP_PORT))
});

app.get("/users", (req, res) => {

    let sql = "select * from Users"
    let params = []

    db.all(sql, params, (err, rows) => {
        res.json({
            "message": "Successfully imported users.",
            "user": rows
        })
    });
});