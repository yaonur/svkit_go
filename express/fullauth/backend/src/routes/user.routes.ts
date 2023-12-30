import express from 'express'
import validateResource from '../middleware/validateResource';
import { createUserSchema } from '../schema/user.schema';
import { createUserHandler } from '../controller/user.controller';
import log from '../utils/logger';

const router = express.Router()

router.post('/api/users',validateResource(createUserSchema),createUserHandler);
router.post('/api/test',validateResource(createUserSchema),(req,res)=>{
	const body = req.body
	res.send(200)
});

export default router