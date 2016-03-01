import {Router, Application} from 'express';
import {configureUserRouter} from 'src/server/routers/userRouter';
import {configureProjectRouter} from 'src/server/routers/projectRouter';
import {configureStoryRouter} from 'src/server/routers/storyRouter';
import {configureSprintRouter} from 'src/server/routers/sprintRouter';
import {configureTaskRouter} from 'src/server/routers/taskRouter';

export function configureRouter(controllers) {
  const router = Router();
  router.use('/user', configureUserRouter(controllers.userController));
  router.use('/project', configureProjectRouter(controllers.projectController));
  router.use('/story', configureStoryRouter(controllers.storyController));
  router.use('/sprint', configureSprintRouter(controllers.sprintController));
  router.use('/task', configureTaskRouter(controllers.taskController));
  return router;
}