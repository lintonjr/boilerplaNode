const sequelize = require('../../sequelize/index')
const Event = sequelize.import('./../../model/event')

module.exports = (req, res) => {
	Event
		.update(req.body, { where: { id : req.params.id } })
		.then(() => res.redirect('/events'))
}