require('dotenv').config()
import express from 'express'
import config from 'config'
import { connectToDb } from './utils/connectToDb'
const app = express()
const port = config.get('port') as number || 3000

app.listen(port,()=>{
	console.log(`Server is running on port ${port}`)
	connectToDb()
}) 