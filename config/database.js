'use strict'

const Env = use('Env')
const Helpers = use('Helpers')

module.exports = {

  /*
  |--------------------------------------------------------------------------
  | Default Connection
  |--------------------------------------------------------------------------
  |
  | Connection defines the default connection settings to be used while
  | interacting with SQL databases.
  |
  */
  connection: Env.get('DB_CONNECTION', 'pg'),

  /*
  |--------------------------------------------------------------------------
  | Sqlite
  |--------------------------------------------------------------------------
  |
  | Sqlite is a flat file database and can be good choice under development
  | environment.
  |
  | npm i --save sqlite3
  |
  */
  sqlite: {
    client: 'sqlite3',
    connection: {
      filename: Helpers.databasePath('development.sqlite')
    },
    useNullAsDefault: true
  },

  /*
  |--------------------------------------------------------------------------
  | MySQL
  |--------------------------------------------------------------------------
  |
  | Here we define connection settings for MySQL database.
  |
  | npm i --save mysql
  |
  */
  mysql: {
    client: 'mysql',
    connection: {
      host: Env.get('DB_HOST', 'localhost'),
      user: Env.get('DB_USER', 'root'),
      password: Env.get('DB_PASSWORD', ''),
      database: Env.get('DB_DATABASE', 'wot')
    }
  },

  /*
  |--------------------------------------------------------------------------
  | PostgreSQL
  |--------------------------------------------------------------------------
  |
  | Here we define connection settings for PostgreSQL database.
  |
  | npm i --save pg
  |
  */
  pg: {
    client: 'pg',
    connection: {
      //ssl: true,
      host: Env.get('DB_HOST', ''),
      user: Env.get('DB_USER', ''),
      password: Env.get('DB_PASSWORD', ''),
      database: Env.get('DB_DATABASE', '')
    }
  }
}

/*
host: Env.get('DB_HOST', 'ec2-54-163-230-198.compute-1.amazonaws.com'),
user: Env.get('DB_USER', 'gssakcimjgrhvo'),
password: Env.get('DB_PASSWORD', 'a7f7cf9a326fc75adc52572944bcfb2edf4cc044fe78620e520eee49e6c98ae1'),
database: Env.get('DB_DATABASE', 'd6jtr143n9pm3u')
*/
