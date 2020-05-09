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

// findById(id):
// Expects a scheme id as its only parameter.
// Resolve to a single scheme object.
// On an invalid id, resolves to null.

function findById(id) {
	return db('schemes').where({ id }).first();
}

function findSteps(id) {
	return db('steps as s')
		.join('schemes as sc', 's.scheme_id', 'sc.id')
		.select('s.id', 'sc.scheme_name', 's.step_number', 's.instructions')
		.where('s.scheme_id', '=', id)
		.orderBy('s.step_number')
}
//select * from schemes;
//insert into schemes(scheme_name)Values('name');
function add(data) {
	return db('schemes').insert(data)
		.then((id) => {
			return findById(id[0])
		})
}
//Update schemes
//Set scheme_name = 'New Plan"
//Where id =6
function update(obj, id) {
	return db('schemes')
		.update('scheme_name', obj.scheme_name)
		.where({ id })
		.then(() => {
			return findById(id)
		})
}
//DELETE FROM table_name WHERE condition;
//added find by id to return removed id to user
function remove(id) {
	return findById(id)
		.then(scheme => {
			return db('schemes')
				.where({ id })
				.del()
				.then(schemeDeleted => {
					return scheme
				})
		})

}