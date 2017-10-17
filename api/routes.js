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
    // function *ctx(next){
    //     if(!this.request.body.name || !this.body.data){
    //         this.response.status = 400;
    //         this.body = {message: "Bad Request"};
    //     }else{
    //         var newId = articles[articles.length-1].id+1;
    //         articles.push({ 
    //                 id = id,      
    //                 name = this.request.body.name,
    //                 data = this.request.body.data
    //         });

    //         this.body = {message: "New article created.", location: "/article/" + newId};
    //     }

    // }
    //yield ctx;
    console.log(ctx.request.body);
    const model = ctx.request.body;
    const result = await articleService.addArticle(model);

    ctx.body = result;


});


module.exports = router;

