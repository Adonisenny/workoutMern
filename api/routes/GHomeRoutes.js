import express from 'express'
import { GHomeController } from '../Controllers/GHomeController.js'

const router = express.Router()


router.post('/',GHomeController )


export default router;