import UserRepository from 'server/models/user/UserRepository';
import BaseController from 'server/controllers/BaseController';
import ValidationError from 'server/errors/ValidationError';
import UnauthorizedError from 'server/errors/UnauthorizedError';
import NotFoundError from 'server/errors/NotFoundError';
import * as _ from "lodash";
import * as validator from "validator";

export default class UserController extends BaseController {

  constructor(private userRepository: UserRepository) {
    super();
  }

  private validateEmail(email) {
    return validator.isEmail(email);
  }

  private validatePassword(password) {
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return validator.matches(password, strongRegex);
  }

  private validateDisplayName(displayName) {
    return validator.isLength(displayName, {max: 30, min: 5});
  }

  fetch(req, res, next, id) {
    this.userRepository.findById(id)
      .then((user) => {
        if(! user) {
          next(new NotFoundError());
        }
        req.user = user;
        next();
      }).error(next);
  }

  register(req, res, next) {
    let displayName = req.query.displayName;
    let email       = req.query.email;
    let password    = req.query.password;
    let errors      = {} as any;

    if(! this.validateEmail(email)) {
      errors.email = 'Invalid email address';
    }

    if(! this.validatePassword(password)) {
      errors.password = 'Invalid password format';
    }

    if(! this.validateDisplayName(displayName)) {
      errors.displayName = 'Invalid display';
    }

    if(Object.keys(errors).length > 0) {
      return next(new ValidationError(errors));
    }

    this.userRepository
      .register({ displayName, email, password })
      .then((user) => {
        console.log("New user entered the system", user);
        res.json(user);
      }).error((err) => {
        next(err);
      });
  }

  login(req, res, next) {
    let email = req.query.email;
    let password = req.query.password;
    let errors      = {} as any;

    if(! this.validateEmail(email)) {
      errors.email = 'Invalid email address';
    }

    if(! this.validatePassword(password)) {
      errors.password = 'Invalid password format';
    }

    if(Object.keys(errors).length > 0) {
      return next(new ValidationError(errors));
    }

    this.userRepository
      .login({ email, password })
      .then(function(user) {
        res.json(user);
      })
  }
}