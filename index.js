console.log("I am practicing");
const express = require("express")
const app = express();
const port=4500
let studentRecords = [
    {id: 1, name: "Ayp", dept:"Web" },
    {id: 2, name: "Zara", dept:"Mobile" },
    {id: 1, name: "Mide", dept:"Web" },
    {id: 1, name: "Ope", dept:"Web" }
];

app.get("/students", (req, res)=>{
    res.send(studentRecords);
});

app.get("/", (req, res)=>{
    res.send("welcome to HOME !!")
})

app.get("/history", (req, res)=>{
    res.send("welcome to HISTORY !!!")
})

app.get('/dashboard', (req, res)=>{
    res.send("welcome to DASHBOARD !!!!!")
})


app.listen(port, ()=>{
    console.log("I am using port 4500")
})
