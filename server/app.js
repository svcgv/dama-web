const Koa = require('koa');
const path = require('path');
const views = require('koa-views');
const serve = require('koa-static');
const logger = require('koa-logger');
const Router = require('koa-router');
const helmet = require('koa-helmet');
const bodyParser = require('koa-bodyparser');


const app = new Koa();

// response
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

app.use(async (ctx) => {
  ctx.body = 'Hello Koa';
});

app.listen(3000);
