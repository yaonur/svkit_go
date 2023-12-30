import {Request,Response} from 'express';
import { CreateUserInput } from '../schema/user.schema';
import log from '../utils/logger';
export async function createUserHandler(req:Request<{},{},CreateUserInput>,res:Response) {
	const body  = req.body;
	return res.status(200).json({body})
}