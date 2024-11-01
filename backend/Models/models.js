const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	username: {type: String, required: true, unique: true},
	password: {type: String, required: true}
});

const GameSchema = new mongoose.Schema({
	playerX: {type: String, required: true},
	playerO: {type: String, required: true},
	board: {type: Array, required: true},
	turn: {type: String, required: true},
	winner: {type: String, required: false}
});

const User = mongoose.model('User', UserSchema);
const Game = mongoose.model('Game', GameSchema);

module.exports = {User, Game};
