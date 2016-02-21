import {UserController} from 'src/server/controllers/UserController';
import {UserRepository} from 'src/server/models/user/UserRepository';

export function configureKernel() {

  const userRepository = new UserRepository();

  // Bind actions
  const userController = new UserController(userRepository);

  return {
    // Bind controllers used in our app
    controllers: {userController}
  };
}
