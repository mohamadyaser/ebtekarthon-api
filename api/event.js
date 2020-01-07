const express = require('express');
event = express.Router(),
	routeBase = '/eventInf', {
		createDatabaseConnection,
		DB_NAME
	} = require('../dataBase/config.js');
event.post(routeBase, (req, res) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "*");
	console.log(req.body);
	createDatabaseConnection((error, connection) => {
		if (error) {
			console.log(error);
			return;
		}
		let qu=`INSERT INTO ${DB_NAME}.'day_inf' (title, time, day_id) VALUES ( '`+req.body.title +"','" + req.body.time +"','" + req.body.day_id + " ');"
		connection.query(qu, function (err, result) {
			let data = {
				title: req.body.title,
				time: req.body.time,
				day_id: req.body.day_id
			};
			connection.end();
			res.send(result);
		});
	});
})


event.delete(routeBase + '/:id', (req, res) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "*");
	let id = req.body.id;
	createDatabaseConnection((error, connection) => {
		if (error) {
			req.status(500);
			return;
		}
		connection.query(`DELETE FROM ${DB_NAME}.day_inf WHERE id='` + req.params.id + "';", function (err, result) {
			if (!err)
				res.send('Deleted..');
			else
				console.log(err)
			connection.end();
			console.log(id);
			res.status(201).send(result);
		});
	});
});


event.get(routeBase, (req, res) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "*");
	createDatabaseConnection((error, connection) => {
		if (error) {
			console.log(error);
			return;
		}
		connection.query(`SELECT * FROM ${DB_NAME}.event_inf`, function (err, result) {
			connection.end();
			console.log(result);
			res.send(result);
		});
	});
});

module.exports = event;
