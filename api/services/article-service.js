const pg = require('pg');
const config = require('../config');
const client = new pg.Client({
    user: config.db.user,
    host: config.db.host,
    database: config.db.schema,
    password: config.db.pass,
    port: config.db.port
})
client.connect()

module.exports.addArticle = async(model) => {
   var queryText = 'INSERT INTO articles(name, data) VALUES($1, $2) RETURNING id';
   const id = await client.query(queryText, [model.name, model.data]);
   return id;
}

