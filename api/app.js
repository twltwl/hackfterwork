const http  = require('http');
const postgraphql = require('postgraphql').postgraphql;
const config = require('./config');

http.createServer(
    postgraphql(`postgres://${config.db.user}:${config.db.pass}@${config.db.host}:${config.db.port}/${config.db.schema}`)
).listen(3000);