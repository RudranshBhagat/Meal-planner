import React, { useState } from 'react'
import axios from 'axios'
import './Form.css'

export default function Form() {
    const [item, setItem] = useState({
        'foodname': '',
        'ingredients': '',
        'img': '',
        'preptime': 0,
        'calories': 0,
        'protien': 0,
        'foodtype': '',
        'carbs': ''
    })




    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(item);
        const res = axios.post('http://localhost:8080/api/food/insert', item)
            .then((e) => {
                console.log(e);
                alert(e.data.message)
            })
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Name</label>
                <input type="text" required onChange={(e) => { setItem({ ...item, foodname: e.target.value }) }} value={item.foodname} />
                <br /> <br />
                <label htmlFor="">Ingredients</label>
                <input type="text" name='ingredients' required onChange={(e) => { setItem({ ...item, ingredients: e.target.value }) }} value={item.ingredients} />
                <br /> <br />
                <label htmlFor="">Image link</label>
                <input type="text" required name='img' onChange={(e) => { setItem({ ...item, img: e.target.value }) }} value={item.img} />
                <br /> <br />
                <label htmlFor="">Prep Time</label>
                <input type="number" required name='preptime' onChange={(e) => { setItem({ ...item, preptime: e.target.value }) }} value={item.preptime} />
                <br /> <br />
                <label htmlFor="">Calories</label>
                <input type="number" name='calories' required onChange={(e) => { setItem({ ...item, calories: e.target.value }) }} value={item.calories} />
                <br /> <br />
                <label htmlFor="">Carbs</label>
                <input type="Number" name='calories' required onChange={(e) => { setItem({ ...item, carbs: e.target.value }) }} value={item.carbs} />
                <br /> <br />
                <label htmlFor="">Protien</label>
                <input type="Number" required name='protien' onChange={(e) => { setItem({ ...item, protien: e.target.value }) }} value={item.protien} />
                <br /> <br />
                <select name="foodtype" id="" onChange={(e) => { setItem({ ...item, foodtype: e.target.value }) }} value={item.foodtype}>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                    <option value="breakfast">BreakFast</option>
                </select>
                <br /> <br />
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}
