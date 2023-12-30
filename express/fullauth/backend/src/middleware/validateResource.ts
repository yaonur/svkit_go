import {Request,Response,NextFunction} from 'express'
import { AnyZodObject } from 'zod'
import log from '../utils/logger'

const validateResource = (schema:AnyZodObject)=> (req:Request, res:Response, next:NextFunction)=>{
	try {
		log.info('Validating resource')
		log.info(`body is:${JSON.stringify(req.body)}`)
		schema.parse({
			body:req.body,
			query:req.query,
			params:req.params
		})
		// log.info(req.body)
		next();
	} catch (e:any) {
		log.error("Error validating resource: ")
		return res.status(400).json({error:e.errors})
		
	}
}

export default validateResource