import {Request,Response,NextFunction} from 'express'
import { AnyZodObject } from 'zod'
import log from '../utils/logger'

const validateResource = (schema:AnyZodObject)=> (req:Request, res:Response, next:NextFunction)=>{
	try {
		log.info('Validating resource')
		log.info(req)
		schema.parse({
			body:req.body,
			query:req.query,
			params:req.params
		})
		next();
	} catch (e:any) {
		return res.status(400).json({error:e.errors})
		
	}
}

export default validateResource