const express = require("express")

const app = express()

const cors = require("cors")

app.use(cors())

app.listen(2000, function () {
    console.log("Port 2000 is running")
})

var username = 'vishnu'
var password = 123
var conpass = 123
var login = 'login'

app.use(express.urlencoded({extended:true}))

app.get("/login", function (req, res) {
    if (req.query.username == username && req.query.password == password && req.query.conpass == password && req.query.conpass == conpass && req.query.login == login ) {
        res.send(true)
        console.log(req.query)
        console.log("Login Successful")
    }
    else {
        res.send(false)
        console.log(req.query)
        console.log("Login Failed")
    }
})