const express = require('express');
day = express.Router(),
	routeBase = '/day', {createDatabaseConnection,DB_NAME} = require('../dataBase/config.js');

                                                             // >>>>  POST <<<< //
day.post(routeBase, (req, res) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "*");
	console.log(req.body);
	createDatabaseConnection((error, connection) => {
		if (error) {
			console.log(error);
			return;
		}
		qu = `INSERT INTO ${DB_NAME}.'day_inf' (day_date, ebt_inf) VALUES ( '`+req.body.day_date +"','" + req.body.ebt_id + " ');"
		connection.query(qu, function (err, result) {
			let data = {
				day_date: req.body.day_date,
				ebt_id: req.body.ebt_id
			};

			console.log(result);
			console.log(data);
			connection.end();
			res.send(result);
		});
	});
})

                                                              // >>>> DELETE <<<< //
day.delete(routeBase + '/:id', (req, res) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "*");
	let id = req.body.id;
	createDatabaseConnection((error, connection) => {
		if (error) {
			req.status(500);
			return;}
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

                                                              // >>>> GET <<<< //
day.get(routeBase, (req, res) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "*");
	createDatabaseConnection((error, connection) => {
		if (error) {
			console.log(error);
			return;}
		connection.query(`SELECT * FROM ${DB_NAME}.day_inf`, function (err, result) {
			connection.end();
			console.log(result);
			res.send(result);
		});
	});
});

module.exports = day;
