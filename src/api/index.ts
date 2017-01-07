import * as express from 'express'
import users from './users/index'
import posts from './posts/index'

const router = express.Router()
router.use('/users', users)
router.use('/posts', posts)

export default router