import {Router} from 'express';
import {StoryController} from 'src/server/controllers/StoryController';

export function configureStoryRouter(storyController: StoryController) {
  const storyRouter = Router();

  storyRouter.param('id', storyController.fetch.bind(storyController));

  storyRouter.get('/', storyController.index.bind(storyController));
  storyRouter.get('/:id', storyController.get.bind(storyController));

  storyRouter.post('/', storyController.create.bind(storyController));
  storyRouter.put('/:id', storyController.replace.bind(storyController));
  storyRouter.patch('/:id', storyController.update.bind(storyController));
  storyRouter.delete('/:id', storyController.remove.bind(storyController));

  return storyRouter;
}

