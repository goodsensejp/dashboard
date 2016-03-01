import {Router} from 'express';
import {ProjectController} from 'src/server/controllers/ProjectController';

export function configureProjectRouter(projectController: ProjectController) {
  const projectRouter = Router();

  projectRouter.param('id', projectController.fetch.bind(projectController));

  projectRouter.get('/', projectController.index.bind(projectController));
  projectRouter.get('/:id', projectController.get.bind(projectController));

  projectRouter.post('/', projectController.create.bind(projectController));
  projectRouter.put('/:id', projectController.update.bind(projectController));

  return projectRouter;
}

