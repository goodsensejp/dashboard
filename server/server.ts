/// <reference path="../typings/tsd.d.ts" />
import * as Express from 'express';
import * as path from 'path';
import * as http from 'http';

export default (middlewares = []) => {

  var app = new (<any>Express)();

  for(let i = 0; i < middlewares.length; i++) {
    app.use(middlewares[i]);
  }

  app.use(Express.static(path.resolve(__dirname + '/../public')));

  app.use(function(req, res) {
    return res.send('Hello new world');
  })

  const port = 3000;

  var server = http.createServer(app);

  server.listen(port, () => console.log(`Server is listening on port ${port}`));

  return server;
}