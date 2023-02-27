import React, { useEffect } from 'react'
import "./Navbar.css"
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from 'react';
import { FiX } from "react-icons/fi";
import DropdownMenu from '../dropdownmenu/DropdownMenu';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from "react-icons/ai";

import {useSelector} from "react-redux"


const Navbar = () => {
    const [showmenu,setShowmenu]=useState(false);

    const cart = useSelector((store)=>store)

    const [numofshop,setNumofshop]=useState(0);

    useEffect(()=>{
        setNumofshop(cart.length)
    },[cart])


  return <>
        <div className="navbar">
                {
                    showmenu ? <FiX className="hamberger-menu"
                    onClick={()=>{setShowmenu(!showmenu)}}/> : 
                    <AiOutlineMenu className="hamberger-menu" 
                    onClick={()=>{setShowmenu(!showmenu)}}/>
                }
                <div className={showmenu ? "menu menu-showe menu-hiden" : "menu menu-hiden"}>
                    <ul className="navbar-menu">
                        <Link to={"/"}><li>خانه</li></Link>
                        <li id="DDM-li">سفارش<DropdownMenu/></li>
                        <Link to={"/register"}><li>ثبت نام</li></Link>
                        <Link to={"/login"}><li>ورود</li></Link>
                        <li>درباره ما</li>
                        <Link to={"/basket"}><li style={{direction:"ltr"}}><AiOutlineShoppingCart style={{fontSize:"20px"}}/><div className={numofshop ? "shop-show" :"shop-hide" }>{numofshop}</div></li></Link>
                    </ul>
                </div>
                <div className="brand-box">
                    <p className="brand-text">CLASSIC</p>
                    <img src="./img/cafephoto.png" className="brand-img"/>
                </div>
        </div>
  </>
}

export default Navbar