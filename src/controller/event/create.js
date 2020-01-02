const sequelize = require('../../sequelize/index')
const Event = sequelize.import('./../../model/event')

module.exports = (req, res) => {
	Event
		.create(req.body)
		.then(() => res.redirect('/events'))
}