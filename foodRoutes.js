import express from 'express'
import {caloriesFood, foodCategory, insertData, viewFood} from './controller/foodController.js'

const router = express.Router();

router.post('/insert',insertData);
router.get('/getitem',viewFood);
router.get('/getitem/:foodtype',foodCategory)
router.get('/getfood/:cal',caloriesFood)

export default router