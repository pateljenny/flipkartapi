// var sql = require("mysql");
// var connect = function () {
//     var conn = sql.createConnection({
//         host: 'localhost',
//         user: 'root',
//         password: '',
//         database: 'flipkart'
//     });

//     return conn;
// };

// module.exports = connect;

var sql = require("mssql");
var connect = function()
{
    var conn = new sql.ConnectionPool({
        user: 'root',
        password: '',
       host:'localhost',
        database: 'flipkart'
    });
 
    return conn;
};

module.exports = connect;