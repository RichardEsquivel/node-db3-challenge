const knex = require('knex')
const knexConfig = require('../knexfile')

const db = knex(knexConfig.development);

module.exports = {
	find,
	findById,
	findSteps,
	add,
	update,
	remove
}

function find() {
	return db('schemes')
}

function findById() {
	return db('schemes')
}

function findSteps() {
	return db('schemes')
}

function add() {
	return db('schemes')
}

function update() {
	return db('schemes')
}

function remove() {
	return db('schemes')
}