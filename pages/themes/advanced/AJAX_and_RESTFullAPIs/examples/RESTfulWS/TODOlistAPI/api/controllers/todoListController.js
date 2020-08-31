'use strict';

var mongoose = require('mongoose'),
		items = mongoose.model('TODO_DB');

exports.listAllTasks = function(req, res) {
	items.find({}, function(err, task) {
		if (err){
			res.send(err);
			console.log(`Error`);
		}
		res.json(task);
	});
	console.log(`listAllTasks finish!`);
};

exports.createTask = function(req, res) {
	var new_task = new items(req.body);
	new_task.save(function(err, task) {
		if (err) res.send(err);

		res.json(task);
	});
};

exports.readTask = function(req, res) {
	items.findById(req.params.taskId, function(err, task) {
		if (err)
			res.send(err);
		res.json(task);
	});
};

exports.updateTask = function(req, res) {
	items.findOneAndUpdate(req.params.taskId, req.body, {new: true}, function(err, task) {
		if (err)
			res.send(err);
		res.json(task);
	});
};

exports.deleteTask = function(req, res) {
	items.remove({
		_id: req.params.taskId
	}, function(err, task) {
		if (err)
			res.send(err);
		res.json({ message: 'Item successfully deleted' });
	});
};

