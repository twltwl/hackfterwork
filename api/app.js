const express = require('express');
const postgraphql = require('postgraphql').postgraphql;
const config = require('./config');

const app = express();

app.use(postgraphql(`postgres://${config.db.user}:${config.db.pass}@${config.db.host}:${config.db.port}/${config.db.schema}`, {
    graphiql: true,
    graphqlRoute: '/nippe/graphql',
    graphiqlRoute: '/nippe/graphiql'
}));

app.listen(3000);