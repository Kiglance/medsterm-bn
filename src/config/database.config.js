// const dotenv = require('dotenv');

// dotenv.config();

// module.exports = {
//   development: {
//     url: process.env.DEV_URL,
//     dialect: 'sqlite',
//     port: process.env.DB_PORT,
//     logging: false
//   },
//   test: {
//     url: process.env.TEST_URL,
//     dialect: 'sqlite',
//     port: process.env.DB_PORT
//   },
//   production: {
//     url: process.env.PROD_URL,
//     dialect: 'sqlite',
//     port: process.env.DB_PORT,
//     dialectOptions: {
//       ssl: {
//         require: true,
//         rejectUnauthorized: false
//       }
//     }
//   }
// };

require('dotenv').config();

module.exports = {
  development: {
    dialect: 'sqlite',
    storage: './database.sqlite3'
  },
  test: {
    dialect: 'sqlite',
    storage: './database.sqlite3'
  },
  production: {
    dialect: 'sqlite',
    storage: './database.sqlite3'
  }
};
