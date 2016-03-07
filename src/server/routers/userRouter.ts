import {Router} from 'express';
import {UserController} from 'src/server/controllers/UserController';

export function configureUserRouter(userController: UserController) {
  const userRouter = Router();

  userRouter.param('id', userController.fetch.bind(userController));

  userRouter.get('/', userController.index.bind(userController));
  userRouter.get('/:id', userController.get.bind(userController));

  userRouter.get('/me', userController.me);

  return userRouter;
}

