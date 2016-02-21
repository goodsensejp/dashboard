import {Router} from 'express';
import {kernel} from '../server';

const {userController} = kernel.controllers;
const router = Router();

router.param('id', userController.fetch);

router.post('/register', userController.register);
router.post('/login', userController.login);

router.get('/', userController.index);
router.get('/:id', userController.get);

router.post('/', userController.create);
router.put('/', userController.update);

export default router;