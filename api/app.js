const koa = require('koa');
const postgraphql = require('postgraphql').postgraphql;
const config = require('./config');
const routes = require('./routes');
const app = new koa();
const koaBody = require('koa-body');

app.use(async(ctx, next)=> {
    ctx.set('Access-Control-Allow-Origin', '*')
    ctx.set('Access-Control-Allow-Methods', 'GET, POST')
    ctx.set('Access-Control-Allow-Headers', 'Content-Type')
    await next();
});

app.use(postgraphql(`postgres://${config.db.user}:${config.db.pass}@${config.db.host}:${config.db.port}/${config.db.schema}`, {
    graphiql: true,
    graphqlRoute: '/nippe/graphql',
    graphiqlRoute: '/nippe/graphiql'
}));

app.use(koaBody());
app.use(routes.routes());

app.listen(3000, () => {
    console.log('listening on port: 3000')
});