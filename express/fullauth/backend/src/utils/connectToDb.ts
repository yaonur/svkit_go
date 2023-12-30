import mongoose from 'mongoose'
import config from 'config'
import log from './logger';

mongoose.set('strictQuery', false);
export async function connectToDb() {
	const dbUri = config.get('dbUri') as string
	try {
		await mongoose.connect(dbUri)
		log.info('Connected to DB')
	} catch(e){
		log.error('Error connecting to DB')
		process.exit(1)
	}
}