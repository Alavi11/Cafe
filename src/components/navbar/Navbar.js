import React from 'react'
import "./Navbar.css"
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from 'react';
import { FiX } from "react-icons/fi";
import DropdownMenu from '../dropdownmenu/DropdownMenu';


const Navbar = () => {
    const [showmenu,setShowmenu]=useState(false);

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
                        <li>خانه</li>
                        <li id="DDM-li">سفارش<DropdownMenu/></li>
                        <li>ثبت نام</li>
                        <li>ورود</li>
                        <li>درباره ما</li>
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