const Sequelize = require('sequelize');

const sequelize = new Sequelize("postgres://postgres:44d380b283c64b598131ce5edb94a8c4@localhost:5432/Workout-Log");

module.exports = sequelize;