const express = require("express")

const app = express()

const cors = require("cors")

app.use(cors())

app.use(express.json())

app.listen(2000, function () {
    console.log("Port 2000 is running")
})

var username = 'vishnu'
var password = 123
var conpass = 123
var login = 'login'

app.use(express.urlencoded({extended:true}))

app.post("/login", function (req, res) {
    if (req.body.username == username && req.body.password == password && req.body.conpass == password && req.body.conpass == conpass && req.body.login == login ) {
        res.send(true)
        console.log(req.body)
        console.log("Login Successful")
    }
    else {
        res.send(false)
        console.log(req.body)
        console.log("Login Failed")
    }
})