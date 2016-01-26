/// <reference path="../typings/tsd.d.ts" />
import * as Express from 'express';
import * as path from 'path';
import * as http from 'http';
import configureRoutes from './routes/index';

const port = 3000;

export default (middlewares = []) => {

  var app = new (<any>Express)();

  for(let i = 0; i < middlewares.length; i++) {
    app.use(middlewares[i]);
  }

  app.use(Express.static(path.resolve(__dirname + '/../public')));

  configureRoutes(app);

  var server = http.createServer(app);

  server.listen(port, () => console.log(`Server is listening on port ${port}`));

  return server;
}