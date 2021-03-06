require('dotenv').config()
module.exports = {
  development: {
    username: process.env.DATABASE_USERNAME || root,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME || "ToDoList",
    host: process.env.DATABASE_HOST || '127.0.0.1',
    port: process.env.DATABASE_PORT || "13306",
    dialect: 'mysql'
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    username: 'root',
    password: 'null',
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql'
  }
}
