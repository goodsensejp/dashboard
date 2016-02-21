import * as Express from 'express';
import * as path from 'path';
import * as http from 'http';
import {Mongoose} from 'mongoose';
import {configureMongoose} from 'src/server/config/mongoose.config';
import {configureModels} from 'src/server/config/models.config';
import {configureKernel} from 'src/server/config/kernel.config';
import {configureRouter} from 'src/server/config/router.config';

export const port = 3000;

export var mongoose: Mongoose;
export var kernel;
export var router;

export function serve(middlewares = []) {

  var app = new (<any>Express)();

  for(let i = 0; i < middlewares.length; i++) {
    app.use(middlewares[i]);
  }

  app.use(Express.static(path.resolve(__dirname + '/../public')));

  // Configuration
  mongoose = configureMongoose();
  kernel = configureKernel();

  // Configure models
  configureModels(mongoose);

  // Configure router
  router = configureRouter(kernel.controllers);
  app.use(router);

  var server = http.createServer(app);

  server.listen(port, () => console.log(`Server is listening on port ${port}`));

  return server;
}
