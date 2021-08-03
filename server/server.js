import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import DB_CONNECTION from './config/dbConnection.js'
import authRoutes from './routes/auth.routes.js'

// Variable setup
const app = express()

// Config 
dotenv.config()
DB_CONNECTION()

// Middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())

// Routes
app.use('/user', authRoutes)

app.listen(process.env.PORT || 5000, console.log('Application is running.'))