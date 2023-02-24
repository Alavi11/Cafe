import React from 'react'
import "./Header.css"
import { DiCoffeescript } from "react-icons/di";
import Navbar from '../navbar/Navbar';


const Header = () => {
  return (
    <div className="header">
        {/* <Navbar/> */}
        <h1 className="header-title"><DiCoffeescript/>کافه کلاسیک</h1>
        <img src='./img/headerphoto.jpeg' className="header-img"></img>
        <div className="header-opacity"></div>
    </div>
  )
}

export default Header