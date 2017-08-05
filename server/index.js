const Koa = require('koa');
const path = require('path');
const views = require('koa-views');
const serve = require('koa-static');
const Router = require('koa-router');
const logger = require('koa-logger');
const session = require('koa-session');
const favicon = require('koa-favicon');
// bodyParser = require('koa-bodyparser');

const Server = require('socket.io')

// const {dispatch} = require('./dispatch.js');

const app = new Koa();
var router = new Router();
const io = Server()


router.get('/api', (ctx, next)=>{
  ctx.body = {"a":"111111"}
})

router.get('/api/:app/:version', function (ctx, next) {
    console.log("aaaaaaaaaaa")
    console.log(ctx.params)
    // const str = dispatch(ctx.params)
    ctx.body = str;
})

app
  .use(logger())
  .use(serve(__dirname + '/../mustard/dist'))
  .use(views(__dirname + '/../mustard/dist',{ map: {html: 'nunjucks' }}))
  // .use(favicon(__dirname + '/../mustard/dist/favicon.ico'))
  .use(router.routes())
  .use(router.allowedMethods());

io.on('connection', function(socket){

  socket.emit('request', "111111"); // emit an event to the socket
  // io.emit('broadcast', /* */); // emit an event to all connected sockets
  // socket.on('reply', function(){ /* */ }); // listen to the event

});

app.listen(3000);
io.listen(3001);
