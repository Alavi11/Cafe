import React from 'react'
import "./Body.css"

const FoodList = [
    {
        id:1,
        category:"غذای گرم",
        name:"پیتزا",
        price:"150000",
        compounds:"کالباس . قارچ . پنیر پیتزا",
        img:"./img/piza.jpeg"
    },
    {
        id:2,
        category:"غذای گرم",
        name:"همبرگر",
        price:"100000",
        compounds:"گوشت گوسفندی . قارچ . خیارشور",
        img:"./img/hamburger.jpg"
    },
    {
        id:3,
        category:"غذای گرم",
        name:"ژامبن",
        price:"70000",
        compounds:"گوشت مرغ . گوجه . پنیر",
        img:"./img/ham.jpg"
    },
    {
        id:4,
        category:"نوشیدنی گرم",
        name:"قهوه",
        price:"50000",
        compounds:"پودر قهوه",
        img:"./img/coffee.jpg"
    },
    {
        id:5,
        category:"نوشیدنی گرم",
        name:"نسکافه",
        price:"40000",
        compounds:"قهوه . شکر",
        img:"./img/nescafe.jpeg"
    },
    {
        id:6,
        category:"نوشیدنی گرم",
        name:"لاته",
        price:"55000",
        compounds:"قهوه . شیر . شکر",
        img:"./img/latte.jpg"
    }
]


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
                                    <button>سفارش</button>
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
                                    <button>سفارش</button>
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