import React, { useState,useEffect } from 'react'
import "./Basket.css"
import {useSelector} from "react-redux"


const Basket = () => {

    const cart = useSelector((store)=>store)

    const [cartshop,setCartshop]=useState([]);

    useEffect(()=>{
        setCartshop(cart)
    },[cart])
    
    let totalprice = 0 ;

    for(let i = 0 ; i < cart.length ; i++){
        totalprice += parseInt(cart[i].price);
    }

  return <>

        <div className="basket-page">
            <div className="cart-info-for-shopping">
                    <h2>قیمت کل : {totalprice}</h2>
                    <button>خرید</button>
            </div>
            {
                    cartshop.map(item=>{
                            return <>
                                    <div className="basket">
                                        <div className="">
                                            <div className="">
                                            <img src={item.img}/>
                                            <div className="">
                                                <h1>{item.name}</h1>
                                                <h2 >قیمت : {item.price} تومان</h2>
                                                <p>ترکیبات : {item.compounds}</p>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                            </>
                    })
            }  
        </div>

  </>
}

export default Basket