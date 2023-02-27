import "./index.css"
import { Route, Routes } from "react-router-dom"
import DefaultRoute from "./components/roures/DefaultRoute";
import Navbar from "./components/navbar/Navbar";
import Details from "./components/details/Details";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Basket from "./components/basket/Basket";


function App() {
  return <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<DefaultRoute/>} />
            <Route path="/:id" element={<Details/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/basket" element={<Basket/>} />
        </Routes>
      
</>
}

export default App;
