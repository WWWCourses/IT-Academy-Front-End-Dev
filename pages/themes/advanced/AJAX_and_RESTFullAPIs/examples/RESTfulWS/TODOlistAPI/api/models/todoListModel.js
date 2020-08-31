'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/*
|--------------|--------------------|--------|
| id | name    | dateCreated        | status |
|----|---------|--------------------|--------|
| 1  |example  |Mon Feb 06 00:03:50 |pending |
|----|---------|--------------------|--------|
*/
var TODO_DB_Schema = new Schema({
	id:{
		type: Number,
	},
  name: {
    type: String,
    Required: 'Enter the task name, please'
  },
  dateCreated: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('TODO_DB', TODO_DB_Schema);