const Koa = require('Koa');
const apiRoutes = require('./routes/routes');
const bodyParser = require('koa-bodyparser');
const app = new Koa();
const PORT = 3000;

app.use(bodyParser());
app.use(apiRoutes.routes());

const server = app.listen(PORT, () =>{
    console.log(`server listening on: http://localhost:${PORT}`);
})


module.exports = server;