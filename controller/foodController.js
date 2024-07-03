import Lunch from "../model/lunchModel.js";

export const insertData = async (req, res) => {
    try {
        const { foodname, calories, ingredients, carbs, protien, preptime, img, foodtype } = req.body;

        const food = await Lunch.findOne({ foodname })
        if (food) {
            return res.status(400).json({ error: "food already exist" })
        }

        const newFood = new Lunch({
            foodname, calories, ingredients, carbs, protien, preptime, img, foodtype
        })

        if (!newFood) {
            return res.status(400).json({ error: "something went wrong" })
        }

        await newFood.save();
        return res.status(200).json({ newFood, message: "Inserted Successfully" })

    } catch (error) {
        console.log(error)
    }
}


export const viewFood = async (req, res) => {
    try {
        const item = await Lunch.find()
        if (!item) {
            return res.status(400).json({ error: "No item found" })
        }
        return res.status(200).json({ item })
    } catch (error) {
        console.log(error)  
    }
}


export const foodCategory = async (req, res) => {
    const foodtype = req.params.foodtype;
    const food = await Lunch.find({ foodtype })
    if (food) {
        return res.status(200).json({ food })
    }
    return res.status(400).json({ error: "error" })
}


export const caloriesFood = async (req, res) => {
    try {
        const cal = req.params.cal;
        const foods = await Lunch.find({ calories: { $lte: cal } })
        if (foods.length === 0) {
            return res.status(200).json({ message: "no food found" })
        }
        return res.status(200).json({ foods })
    } catch (error) {
        return res.status(400).json({ error:"error" })
    }
}
