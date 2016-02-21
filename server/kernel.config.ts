import UserController from './server/controllers/UserController';
import UserModel from './models/UserModel';

export default function () {
  // Bind actions
  const userController = new UserController(UserModel);

  return {
    // Bind controllers used in our app
    controllers: {userController}
  };
}
