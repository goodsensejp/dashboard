import {Router} from 'express';
import {SprintController} from 'src/server/controllers/SprintController';

export function configureSprintRouter(sprintController: SprintController) {
  const sprintRouter = Router();

  sprintRouter.param('id', sprintController.fetch.bind(sprintController));

  sprintRouter.get('/', sprintController.index.bind(sprintController));
  sprintRouter.get('/:id', sprintController.get.bind(sprintController));

  sprintRouter.post('/', sprintController.create.bind(sprintController));
  sprintRouter.put('/:id', sprintController.replace.bind(sprintController));
  sprintRouter.patch('/:id', sprintController.update.bind(sprintController));

  return sprintRouter;
}

