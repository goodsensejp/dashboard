/// <reference path="../typings/tsd.d.ts" />
import * as Express from 'express';
import * as path from 'path';
import * as http from 'http';
import configureRoutes from './routes/index';
import configureKernel from './kernel.config';
import router from './router';

const port = 3000;

export const kernel = configureKernel();

export default (middlewares = []) => {

  var app = new (<any>Express)();

  for(let i = 0; i < middlewares.length; i++) {
    app.use(middlewares[i]);
  }

  app.use(Express.static(path.resolve(__dirname + '/../public')));

  app.use(router);

  var server = http.createServer(app);

  server.listen(port, () => console.log(`Server is listening on port ${port}`));

  return server;
}