const Sequelize = require('sequelize')

const sequelize = new Sequelize('etq', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: Sequelize.Op
})

sequelize.sync()
sequelize
    .authenticate()
    .then(() => console.log('Connection estabilished'))
    .catch(() => console.log('Error'))

sequelize.sync()

module.exports = sequelize