import "./index.css"
import { Route, Routes } from "react-router-dom"
import DefaultRoute from "./components/roures/DefaultRoute";
import Navbar from "./components/navbar/Navbar";


function App() {
  return <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<DefaultRoute/>} />
        </Routes>
      
</>
}

export default App;
