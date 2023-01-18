const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 8080;
const host = "127.0.0.1";

const connection = mysql.createConnection({
    host: host,
    user: "root",
    password:"Amine2019",
    database:"finals_endingsonly"
});

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());


app.post("/api/insert", (req, res) =>{
    const {firstName, LastName, Email, Mobile, Address, old_stud, Reason} = req.body;
    connection.query("INSERT INTO studinfo(firstName, LastName, Email, Mobile, Address, old_stud, Reason) VALUES (?,?,?,?,?,?,?)",
    [firstName,LastName,Email,Mobile,Address,old_stud,Reason],(err, results)=>{
        console.log(results);
    });
});

app.listen(port,() =>{
    console.log(`Server is running on port ${port}`);
})