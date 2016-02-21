import {Router, Application} from 'express';
import {configureUserRouter} from 'src/server/routers/userRouter';

export function configureRouter(controllers) {
  const router = Router();
  router.use('/user', configureUserRouter(controllers.userController));
  return router;
}