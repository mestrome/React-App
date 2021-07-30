var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


/* 
--CODIGO PARA OCNSERTAR O ERRO DE CONEXAO--
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'
 */