const express = require('express');
event = express.Router(),
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
		 qu=`INSERT INTO ${DB_NAME}.event_inf (hour, title, day_id) VALUES ( '` + req.body.hour +"','" +req.body.title + "','" + req.body.day_id + " ');"
		connection.query(qu, function (err, result) {
			if(err) throw err;
			let data = {
				hour: result.hour,
				title: result.title,
				day_id: result.day_id
			};
			connection.end();
			res.send(data);
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
			return;}
		connection.query(`DELETE FROM ${DB_NAME}.event_inf WHERE event_id='` + req.params.id + "';", function (err, result) {
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
