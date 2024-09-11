const express = require("express")
const app = express()
const people = require("./data")
app.get("/", (req, res)=>{
    return res.json(people)
})

app.listen(4000, ()=>{
    
})