const express = require("epress");
const app  = epress;

app.get("/", function(req, res){
    res.send("hello");
} )