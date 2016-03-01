import {UserController} from 'src/server/controllers/UserController';
import {ProjectController} from 'src/server/controllers/ProjectController';
import {StoryController} from 'src/server/controllers/StoryController';
import {SprintController} from 'src/server/controllers/SprintController';
import {TaskController} from 'src/server/controllers/TaskController';
import {UserRepository} from 'src/server/models/user/UserRepository';
import {ProjectRepository} from 'src/server/models/project/ProjectRepository';
import {StoryRepository} from 'src/server/models/story/StoryRepository';
import {SprintRepository} from 'src/server/models/sprint/SprintRepository';
import {TaskRepository} from 'src/server/models/task/TaskRepository';

export function configureKernel() {

  const userRepository = new UserRepository();
  const projectRepository = new ProjectRepository();
  const storyRepository = new StoryRepository();
  const sprintRepository = new SprintRepository();
  const taskRepository = new TaskRepository();

  // Bind controllers
  const userController = new UserController(userRepository);
  const projectController = new ProjectController(projectRepository);
  const storyController = new StoryController(storyRepository);
  const sprintController = new SprintController(sprintRepository);
  const taskController = new TaskController(taskRepository);

  return {
    // Bind controllers used in our app
    controllers: {
      userController, 
      projectController, 
      storyController, 
      sprintController, 
      taskController
    }
  };
}
