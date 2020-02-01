const express = require('express');
event = express.Router(),
	addEvent ='/addEvent.html',
	routeBase = '/eventInf', {
		createDatabaseConnection,
		DB_NAME
	} = require('../dataBase/config.js');

event.post(routeBase, (req, res) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "*");
	createDatabaseConnection((error, connection) => {
		if (error) {
			console.log(error);
			return;
		}
	
	let  qu=`INSERT INTO ${DB_NAME}.event_inf (time, title, day_id) VALUES ('`+req.body.time+`','`+req.body.title +`','`+ req.body.day_id +`');`
	connection.query(qu, function (err, result) {
		if(err) throw err;
		let data = {
			time: req.body.time,
			title: req.body.title,
			day_id: req.body.day_id
		};
		connection.end();
		res.send(data);
	});
});
})

event.delete(routeBase +'/', (req, res) => {
	createDatabaseConnection((error, connection) => {
		if (error) {
			res.status(404);
			return;
		}
		const id = req.body.id;
		console.log(id);
		const sql =  `DELETE FROM ${DB_NAME}.event_inf WHERE event_id=`+id;
		console.log(sql);
		connection.query(sql , function (err, result) {
		if(err) {
			console.log(err);
		}
			console.log(result);
			connection.end();
			res.status(201).send(result);
		});
	});
});


module.exports = event;
