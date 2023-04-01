import express from 'express'
import userRoute from './user.route.js'

const router = express.Router()

export default () => {
    userRoute(router)
    return router
}