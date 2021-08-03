import express from 'express'
import { register } from '../controllers/auth.controllers.js'

const router = express.Router()

// Registration
router.post('/register', register)

// Login
router.post('/login')


export default router