var knex = require('knex')({
    client: 'mysql2',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : 'ufcd2013',
      database : 'apiusers'
    }
  });

module.exports = knex