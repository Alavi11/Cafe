import React from 'react'
import { Link } from 'react-router-dom'
import "./Body.css"
import FoodList from "../data/Data"


const Body = () => {

  return <>
        <div className="body">
            <div className="hot-food">
                <h1 className="hot-food-title">غذای گرم</h1>
                {
                    FoodList.map(item=>{
                        if(item.category==="غذای گرم"){
                            return <>
                            <div className="card">
                                <img src={item.img}/>
                                <div className="details">
                                    <div className="details-first">
                                        <h1 style={{marginBottom:"10px"}}>{item.name}</h1>
                                        <h2 style={{marginBottom:"10px"}}>قیمت : {item.price} تومان</h2>
                                    </div>
                                    <p>ترکیبات : {item.compounds}</p>
                                    <Link to={`/${item.id}`}><button>سفارش</button></Link>
                                </div>
                            </div>
                        </>
                        }
                    })
                }
            </div>
            <div className="hot-drink">
                <h1 className="hot-drink-title">نوشیدنی گرم</h1>
                {
                    FoodList.map(item=>{
                        if(item.category==="نوشیدنی گرم"){
                            return <>
                            <div className="card">
                                <img src={item.img}/>
                                <div className="details">
                                    <div className="details-first">
                                        <h1 style={{marginBottom:"10px"}}>{item.name}</h1>
                                        <h2 style={{marginBottom:"10px"}}>قیمت : {item.price} تومان</h2>
                                    </div>
                                    <p>ترکیبات : {item.compounds}</p>
                                    <Link to={`/details/${item.id}`}><button>سفارش</button></Link>
                                </div>
                            </div>
                        </>
                        }
                    })
                }
            </div>
        </div>
  </>
}

export default Body ;