import {IRouter, Request, Response} from 'express';
import UserModel from '../models/UserModel';

export default function(app: IRouter<void>) {
  app.get('/users/create', function(req, res, next) {
    let name = req.query.name;
    let email = req.query.email;
    let password = req.query.password;

    const user = new UserModel();

    user.firstName = name.split(' ')[0];
    user.lastName = name.split(' ')[1];

    user.email = email;
    user.hashPassword(password);

    user.save((err) => {
      if(err) throw err;

      res.send('User created successfully!');
    })
  });

  app.get('/users/check', function(req, res, next) {
    let email = req.query.email;
    let password = req.query.password;

    UserModel.findOne({ email }).exec(function(err, user) {
      if(err) throw err;

      if(!user || !user.checkPassword(password)) {
        res.send('Bad credentials!');
      } else {
        res.send('User logged in');
      }
    })
  })
}