
import {login,register} from '../controllers/authController.js'
import express from 'express'

const router = express.Router()


router.route('/register').post(register)

router.route('/login').post(login)


export default router