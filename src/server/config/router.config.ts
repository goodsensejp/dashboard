import {Router, Application} from 'express';
import {configureUserRouter} from 'src/server/routers/userRouter';
import {configureProjectRouter} from 'src/server/routers/projectRouter';
import {configureStoryRouter} from 'src/server/routers/storyRouter';
import {configureSprintRouter} from 'src/server/routers/sprintRouter';
import {configureTaskRouter} from 'src/server/routers/taskRouter';

export function configureRouter(controllers) {
  const router = Router();
  router.use('/api/user', configureUserRouter(controllers.userController));
  router.use('/api/project', configureProjectRouter(controllers.projectController));
  router.use('/api/story', configureStoryRouter(controllers.storyController));
  router.use('/api/sprint', configureSprintRouter(controllers.sprintController));
  router.use('/api/task', configureTaskRouter(controllers.taskController));
  return router;
}