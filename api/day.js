const express = require('express');
day = express.Router(),
	routeBase = '/day', {
		createDatabaseConnection,
		DB_NAME
	} = require('../dataBase/config.js');

// >>>>  POST <<<< //
day.post(routeBase, (req, res) => {
	createDatabaseConnection((error, connection) => {
		if (error) {
			req.status(500);
			return;
		}
let	s = `INSERT INTO ${DB_NAME}.day_inf (day_date,ebt_id) VALUES ('`+req.body.day_date +`','`+req.body.ebt_id+`');` ;
	connection.query(s, function (err, result) {
		if (err) throw err;
		let n = {
			id: result.insertId,
			day_date: req.body.day_date,
			ebt_id: req.body.ebt_id
		};
		console.log(n);
		res.send(n);
	});
});
});


// >>>> DELETE <<<< //
day.delete(routeBase +'/',(req, res) => {
	createDatabaseConnection((error, connection) => {
		{if (error) throw error;}
const id = req.body.id;
	
	console.log(id);
	const sql = `DELETE FROM ${DB_NAME}.day_inf WHERE id=`+id;
	console.log(sql);
	connection.query(sql , function (err, result) {
	if(err) {
	//	res.status(500).send({error:`something failed`})
	}
	console.log(result);
		connection.end();
		res.status(201).send(result);
		});
	});
});  

// >>>> GET <<<< //
day.get(routeBase, (req, res) => {
	res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "*");
	createDatabaseConnection((error, connection) => {
		if (error) {
			console.log(error);
			return;
		}
		const sql =`select e.id , e.day_date ,c.event_id ,  c.time , c.title from (${DB_NAME}.day_inf  e ) left join ${DB_NAME}.event_inf c on c.day_id = e.id ;`;
		connection.query(sql, function (err, result) {
			console.log(result);
			connection.end();
			res.send(result);
		});
	});
});
module.exports =day;