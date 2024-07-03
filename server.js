import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import foodRoutes from './foodRoutes.js'

const app = express()

app.use(express.json());
app.use(cors());

const PORT = 8080;



const dbconnect = () => {
    try {
        mongoose.connect('mongodb://localhost:27017/fitness')
            .then(() => {
                console.log("connect to database");

            })
    } catch (error) {
        console.log(error)

    }
}

app.use("/api/food",foodRoutes)

app.listen(PORT, () => {
    dbconnect()
    console.log('server running on port ', PORT)
})