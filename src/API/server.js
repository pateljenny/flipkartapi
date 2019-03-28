// var express = require('express');
// var app = express();
// var port = process.env.port || 3000;

// var category = require('./Controler/category')();

// app.use("/api/category",category);


// 

const m = require('mysql');
const express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.set("views", __dirname);
app.use(bodyParser.json());
var port = process.env.port || 3000;
var cors = require('cors');
app.use(cors());

var con = m.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'flipkart'
});

con.connect((err) => {
    if (!err)
        console.log("connected")
    else
        console.log(err)
});

app.get('/category', (req, res) => {
    con.query('SELECT * FROM category', (err, result) => {
        if (!err) {
            res.send(result)
        }
        else
            console.log('error::' + err);
    })
})

app.get('/women', (req, res) => {
    con.query('SELECT * FROM women', (err, result) => {
        if (!err) {
            res.send(result)
        }
        else
            console.log('error::' + err);
    })
})

app.get('/signup', (req, res) => {
    con.query('SELECT * FROM registraion', (err, result) => {
        if (!err) {
            res.send(result)
        }
        else
            console.log('error::' + err);
    })
})

app.get('/electronics', (req, res) => {
    con.query('SELECT * FROM electronics', (err, result) => {
        if (!err) {
            res.send(result)
        }
        else
            console.log('error::' + err);
    })
})

app.get('/add/user', (req, res) => {
    con.query("INSERT INTO registraion(Username,Email,Password,MobileNo) VALUES('" + req.body.Username + "'," + req.body.Email + "," + req.body.Password + "," + req.body.MobileNo + ")", (err, result) => {
        if (!err) {
            res.send(result)
        }
        else
            console.log('error::' + err);
    })
})


app.post('/add/electronics', (req, res) => {
    const sql = "INSERT INTO electronics(Product_name,Price,Cate_id,Image) VALUES('" + req.body.Product_name + "'," + req.body.Price + "," + req.body.Cate_id + "," + req.body.Image + ")";
    con.query(sql, (err, result) =>
     {
        if (!err) {
            res.send(result)
        }
        else
            console.log('error::' + err);
    })
})

app.put('/put/electronics',(req,res) =>{
    const sql = "UPDATE customers SET Product_name = 'mobile-charger-500x500' WHERE Product_name = 'mobile-charger'";
    con.query(sql,(err,result) =>{
        if(!ee){
            res.send(result)
        }
        else
        console.log('error::'+ err);
    })
})
app.get('/register', (req, res) => {
    con.query('SELECT * FROM registraion', (err, result) => {
        if (!err) {
            res.send(result)
        }
        else
            console.log('error::' + err);
    })
})
app.get('/user', (req, res) => {
    con.query('SELECT * FROM User1', (err, result) => {
        if (!err) {
            res.send(result)
        }
        else
            console.log('error::' + err);
    })
})

// app.get('/name', (req,res) => {
// //console.log('start');
// con.query('SELECT * FROM signup WHERE name = ?', [req.params.name], (err,result) => {
// if(!err){
// res.send(result)
// }
// else 
// console.log('error::'+err);
// })
// })




app.listen(port, function () {
    var datetime = new Date();
    var message = "Server runnning on Port:- " + port + "Started at :- " + datetime;
    console.log(message);
});