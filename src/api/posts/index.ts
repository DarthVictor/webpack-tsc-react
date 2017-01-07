import {Router} from 'express'
import postsData from './data'
const router = Router()
 
router.get('/', (req, res) =>{
    return res.json(postsData)
})

router.get('/:id', (req, res) =>{
    const idx = +req.params.id - 1
    if(idx >= 0 && idx < postsData.length){
        return res.json(postsData[idx])
    }
    else {
        return res.status(404).send('Not Found')
    }
})

export default router