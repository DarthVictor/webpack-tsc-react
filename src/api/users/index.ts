import {Router} from 'express'
import usersData from './data'
const router = Router()
 
router.get('/', (req, res) =>{
    return res.json(usersData)
})

router.get('/:id', (req, res) =>{
    const idx = +req.params.id - 1
    if(idx >= 0 && idx < usersData.length){
        return res.json(usersData[idx])
    }
    else {
        return res.status(404).send('Not Found')
    }
})

export default router