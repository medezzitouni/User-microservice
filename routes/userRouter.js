import express from 'express'
import { userController as ctrls } from '../dist/App'
import { isAuth } from '../middlewares'

const router = express.Router()

//? root route
router.route('/')
//! getALL users
.get(isAuth, async (req, res, next) => {
    try {
        throw new Error('not implemented yet')
    } catch (error) {
        next(error)
    }
})
//! post register (new user)
.post(isAuth, async (req, res, next) => {
    try {
        ctrls.requestAdapter(req)
        const { headers, statusCode, data } = await ctrls.registration()
        res.set(headers)
        .status(statusCode)
        .send(data)
    } catch (err) {
        next(err)
    }
})
//! update an existed user infos
.put(isAuth, async (req, res, next) => {
    try {
        throw new Error('not implemented yet')
    } catch (error) {
        next(error)
    }
})
//? login route
router.route('/login')
//! post login
.post(async (req, res, next) => {
    
    try {
        ctrls.requestAdapter(req)
        const { headers, statusCode, data } = await ctrls.login()
        res.set(headers)
           .status(statusCode)
           .send(data)
    } catch (err) {
        next(err)    
    }
})

export default router