const Router = require('koa-router');
const router = new Router();
const articleService = require('./services/article-service');

router.get('/', async (ctx) => {
    ctx.body = {
        status: "success",
        message: "hello, world"
    };
})

router.post('/articles', async (ctx) => {
    console.log(ctx.request.body);
    const model = ctx.request.body;
    const result = await articleService.addArticle(model);

    ctx.body = result;
});

module.exports = router;

