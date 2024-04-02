const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  process.env.DB_name, // Database name
  process.env.DB_user, // User
  process.env.DB_password, // Password
  {
    host: process.env.DB_host, // Host
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize
