const Sequelize = require('sequelize');

const initModels = require('./models')

const{
  postgres_pass,
  postgres_user,
  postgres_db,
  postgres_url,
}=process.env;

const connectionString = `postgres://${postgres_user}:${postgres_pass}@${postgres_url}/${postgres_db}?schema=default`;

 console.log(connectionString);

const bd =  new Sequelize(connectionString, {logging: false});

initModels(bd);

module.exports = bd;
