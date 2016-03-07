import {Router} from 'express';
import {TaskController} from 'src/server/controllers/TaskController';

export function configureTaskRouter(taskController: TaskController) {
  const taskRouter = Router();

  taskRouter.param('id', taskController.fetch.bind(taskController));

  taskRouter.get('/', taskController.index.bind(taskController));
  taskRouter.get('/:id', taskController.get.bind(taskController));

  taskRouter.post('/', taskController.create.bind(taskController));
  taskRouter.put('/:id', taskController.replace.bind(taskController));
  taskRouter.patch('/:id', taskController.update.bind(taskController));

  return taskRouter;
}

