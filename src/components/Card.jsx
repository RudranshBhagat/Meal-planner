import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./Card.css"; 

export default function Card() {
    const [item, setItem] = useState([]);
    const [type, setType] = useState();
    const [cal, setCal] = useState();

    const getItem = () => {
        const res = axios.get(`http://localhost:8080/api/food/getfood/${cal}`)
            .then((e) => {
                console.log(e.data.foods)
                setItem(e.data.foods)
            })
    }

    useEffect(() => {
        getItem();
    }, [cal])

    return (
        <>
            <label htmlFor="">Enter Calories</label>
            <input type="number" required onChange={(e) => { setCal(e.target.value) }} />
            <br />
            <br />
            <select name="" id="" onChange={(e) => { setType(e.target.value) }}>
                <option value="breakfast">breakfast</option>
                <option value="lunch">lunch</option>
                <option value="dinner">dinner</option>
            </select>
            <div className="card-holder" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                {
                    (item) ?
                        item
                        .filter((item)=>{
                            if(item.foodtype === type){ return(item)} 
                            else return
                        })
                        .map((item) => {
                            return (
                                <div className="card" style={{ textAlign: 'center', border: '1px solid red' }}>
                                    <img src={item.img} height='200px' width='200px' alt="" />
                                    <h2>Food Name:{item.foodname}</h2>
                                    <p><strong>Ingredients:</strong>{item.ingredients}</p>
                                    <p><strong>Calories:</strong>{item.calories}gram</p>
                                    <p><strong>Protine:</strong>{item.protien}gram</p>
                                    <p><strong>Prep Time:</strong>{item.preptime}min</p>

                                </div>
                            )
                        })
                        : <h1>no data</h1>
                }
            </div>
        </>
    )
}
