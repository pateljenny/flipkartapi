var express = require('express');
var router = express.Router();
var sql = require('mysql');
var conn = require("../DB/db")();

var routes = function () {
    router.route('/')
        .get(function (req, res) {
            conn.connect().then(function () {
                var sqlQuery = "INSERT INTO signup(Username,Email,Password,MobileNo) VALUES('"+req.body.Username+"',"+req.body.Email+","+req.body.Password+","+req.body.MobileNo+")";
                var req = new sql.Request(conn);
                req.Query(sqlQuery).then(function (recordset) {
                    res.json(recordset.recordset);
                    conn.close();
                })
               
            })
            .catch(function(err){
                conn.close();
                res.status(400).send("don't get data")
            });
        });
        return router;
};
module.exports = routes;