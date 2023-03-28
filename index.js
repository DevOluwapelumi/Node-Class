// let nameOfStudent = "OluwaPelumi"
// console.log(nameOfStudent)
const express = require('express');
const app = express();
const ejs = require('ejs')
const bodyParser = require('body-parser')

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req,res) => {
    console.log("Request made");
    //     res.send([
    //         {name: "Lagbaja", club: "Chelsea"}
    //     ])
    // })
    // console.log(__dirname);
    // res.sendFile(__dirname + "/index.html");
    res.render("land")
})
app.get("/sup", (req,res) => {
    res.render("sup")
})
app.post("/sup", (req, res) => {
    console.log(req.body)
    // res.render("sup")
})
app.post("/sin", (req, res) => {
    res.render("sin")
})
app.get("/board", (req, res) => {
    res.render("board", { name: "Pelumi", Food: "Rice" })
})

app.listen("4550", () => {
    console.log("Server don start on port 4550");
})
