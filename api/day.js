const express = require('express');
day = express.Router(),
	routeBase = '/day', {
		createDatabaseConnection,
		DB_NAME
	} = require('../dataBase/config.js');

// >>>>  POST <<<< //
day.post(routeBase, (req, res) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "*");
	createDatabaseConnection((error, connection) => {
		if (error) {
			req.status(500);
			return;
		}

		s = `INSERT INTO ${DB_NAME}.day_inf (day_date, ebt_id) VALUES ( '` + req.body.day_date + "' ,'" + req.body.ebt_id + "');" 
		connection.query(s, function (err, result) {
			if (err) throw err;
			let n = {
				id: result.insertId,
				day_date: result.day_date,
				ebt_id: result.ebt_id
			};

			console.log(n);
			res.send(n);
		});
	});
});


// >>>> DELETE <<<< //
day.delete(routeBase , (req, res) => {
	createDatabaseConnection((error, connection) => {
		if (error) {
			req.status(404);
			return;
		}
		const id = req.body.id;
		const sql = `DELETE FROM ${DB_NAME}.day_inf WHERE id=${id}`;
		connection.query(sql , function (err, result) {
		if(err) {
			res.status(500).send({error:`something failed`})
		}
			res.json({status: `success`})
			connection.end();
			res.send(result);
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
		connection.query(`select * from day_inf left join event_inf on event_inf.day_id = day_inf.id`, function (err, result) {
			const response = {};
			result.forEach(row => {
				const event = {
					id: row.event_id,
					title: row.title,
					hour: row.hour
				};

				if (!response[row.id]) {
					response[row.id] = {
						id: row.id,
						date: row.day_date,
						events: [event]
					}
				} else {
					response[row.id].events.push(event);
				}
			});

			connection.end();
			res.send(Object.values(response));
		});
	});
});

module.exports = day;
