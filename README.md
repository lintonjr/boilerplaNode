# Boilerplate Node

Boilerplate para agilizar desenvolvimento node.

## Instalação

Necessário Node e NPM.

```javascript
npm install
```

## Uso
Apontar os controllers criados em src/index.js

```javascritp
module.exports = (app) => {
	app.use('/', require('./controller/(...)/index'))
	app.use('/url', require('./controller/(...url...)/index'))
}
```
Definir a model em src/model/modelName.js

```javascritp
const sequelize = require('./../sequelize/index')

module.exports = (sequelize, DataTypes) => {
	return sequelize.define('table', {
		row1: DataTypes.STRING,
		row2: DataTypes.TEXT
	})
}
```
Criação dos controllers separados
# Em construção

## Licença
[MIT](https://choosealicense.com/licenses/mit/)