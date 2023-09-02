const {Sequelize} = require('sequelize')
const sequelize = new Sequelize('nodeMvc', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

try{
    sequelize.authenticate()
    console.log('Conectado ao MySQL!')
}catch(err){
    console.log(`Não foi possivel conectar ao banco: ${err}`)
}

module.exports = sequelize