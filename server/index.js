const Koa = require('koa');
const path = require('path');
const views = require('koa-views');
const serve = require('koa-static');
const Router = require('koa-router');
const logger = require('koa-logger');
const session = require('koa-session');
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

app.keys = ['dama'];

app
  .use(logger())
  .use(bodyParser())
  .use(session(app))
  .use(ctx => {
      // ignore favicon
    if (ctx.path === '/favicon.ico') return;

    print()
    let n = ctx.session.views || 0;
    console.log(ctx.session)
    ctx.session.views = ++n;
    ctx.body = n + ' views';
  })
  .use(serve(__dirname + '/../client/dist'))
  .use(views(__dirname + '/../client/dist',{ map: {html: 'nunjucks' }}))

  .use(router.routes())
  .use(router.allowedMethods());

io.on('connection', function(socket){

  socket.emit('request', "111111"); // emit an event to the socket
  // io.emit('broadcast', /* */); // emit an event to all connected sockets
  // socket.on('reply', function(){ /* */ }); // listen to the event

});

app.listen(3000);
io.listen(3001);
