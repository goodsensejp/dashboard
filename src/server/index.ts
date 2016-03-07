import * as Express from 'express';
import * as bodyParser from 'body-parser';
import * as path from 'path';
import * as http from 'http';
import {Mongoose} from 'mongoose';
import {configureMongoose} from 'src/server/config/mongoose.config';
import {configureModels} from 'src/server/config/models.config';
import {configureKernel} from 'src/server/config/kernel.config';
import {configureRouter} from 'src/server/config/router.config';
import {ErrorHandler} from 'src/server/controllers/ErrorHandler';

export const port = 3000;

export var mongoose: Mongoose;
export var kernel;
export var router;

export function serve(middlewares = []) {

  var app = new (<any>Express)();

  for(let i = 0; i < middlewares.length; i++) {
    app.use(middlewares[i]);
  }

  app.use(bodyParser.json());

  // Configuration
  mongoose = configureMongoose();
  kernel = configureKernel();
  const errorHandler = new ErrorHandler();

  // Configure models
  configureModels(mongoose);

  // Configure router
  router = configureRouter(kernel.controllers);
  app.use(function(req, res, next) {
    setTimeout(next, 1000);
  });
  app.use(router);

  app.use((err, req, res, next) => errorHandler.logErrors(err, req, res, next));
  app.use((err, req, res, next) => errorHandler.response(err, req, res, next));

  app.get('/*', function(req, res, next) {
    return res.sendFile(path.join(__dirname, 'index.html'));
  })

  var server = http.createServer(app);

  server.listen(port, () => console.log(`Server is listening on port ${port}`));

  return server;
}
