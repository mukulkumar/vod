var History = require('./models/history');

module.exports = function (app) {

	// server routes ===========================================================
	// handle things like api calls

	app.post('/savetohistory', function (req, res, next) {

		History.find({userid: req.body.userid, id: req.body.id,}).count(function (err, count) {

			if (count < 1) {
				var vHistory = new History({
					userid: req.body.userid,
					id: req.body.id,
					title: req.body.title,
					description: req.body.description,
					thumbUrl: req.body.thumbUrl,
					duration: req.body.duration,
					publishedDate: req.body.publishedDate
				});

				vHistory.save(function (err) {
					if (err) {
						throw err;
					}
					res.json({status: 200, msg: "Video saved successfully!"});
				});
			}
		});
	});

	app.get('/fetchhistory', function (req, res, next) {

		History.find({userid: req.query.userid}, function (err, history) {

			if (err) {
				res.send(err);
			}

			res.json(history);
		});
	});

	// frontend routes =========================================================
	// route to handle all angular requests

	app.get('*', function (req, res) {
		var directoryPath = __dirname;
		var rootPath = directoryPath.replace("/app", "");
		res.sendFile(rootPath + '/public/index.html');
	});
};