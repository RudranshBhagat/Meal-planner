import mongoose from "mongoose";

const lunchSchema = mongoose.Schema({
    foodname: {
        type: String,
        required: true
    },
    calories: {
        type: Number,
        required: true
    },
    ingredients: {
        type: String,
        required: true
    },
    carbs: {
        type: Number
    },
    protien: {
        type: Number
    },
    preptime: {
        type: Number
    },
    img: {
        type: String,
    },
    foodtype: {
        type: String,
        required: true,
        enum: ["lunch", "dinner", "breakfast"]
    }
})

const Lunch = mongoose.model('Lunch', lunchSchema);
export default Lunch;