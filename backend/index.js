const express = require("express")

const app = express()

app.listen(2000, function () {
    console.log("Port 2000 is running")
})

var username = 'vishnu'
var password = 123 
var conpassword = 123
var login = 'login'

app.get("/login", function (req, res) {
    if (req.query.username == username && req.query.password == password && req.query.conpassword == conpassword && req.query.conpassword == password && req.query.login == login) {
        res.send("Login successful")
        console.log(req.query)
        console.log("Login Successful")
    }
    else {
        res.send("Login Failed")
        console.log(req.query)
        console.log("Login Failed")
    }
})