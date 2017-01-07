import * as express from 'express'
import users from './users'
import posts from './posts'

const router = express.Router()
router.use('/users', users)
router.use('/posts', posts)

export default router