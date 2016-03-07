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
          next(new ModelNotFoundError());
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

  me(req, res, next) {
    return res.json(req.user);
  }
}