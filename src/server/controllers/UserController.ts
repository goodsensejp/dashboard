import {UserRepository} from 'src/server/models/user/UserRepository';
import {BaseController} from 'src/server/controllers/BaseController';
import {ValidationError, UnauthorizedError, ModelNotFoundError} from 'src/server/errors';
import * as validator from "validator";

export class UserController extends BaseController {

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
      .then((fetchedUser) => {
        if(! fetchedUser) {
          throw new ModelNotFoundError();
        }
        req.fetchedUser = fetchedUser;
        next();
      }).onReject(next);
  }

  index(req, res, next) {
    this.userRepository.all()
      .then((users) => {
        res.json(users);
      }).onReject(next);
  }

  get(req, res, next) {
    return res.json(req.fetchedUser);
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
      }).onReject(next);
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
      }).onReject(next);
  }

  me(req, res, next) {
    return res.json(req.user);
  }
}