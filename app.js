const express = require("express")
var app = express()
var port = process.env.PORT || 3005 

app.get("/", function(req, res){
    res.send("Welcome page")
})

app.get("/about", function(req, res){
    res.send("About us page")
})
app.get("/content", function(req, res){
    res.send("Content us page")
})


app.listen(port, function(err){
    console.log("server started at port ", port)
})