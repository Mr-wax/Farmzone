import express from 'express'
const router = express.Router()
import authRoute from '../routes/auth/authroute.js'

router.use('/auth', authRoute)

export default router;