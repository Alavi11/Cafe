import "./index.css"
import { Route, Routes } from "react-router-dom"
import DefaultRoute from "./components/roures/DefaultRoute";
import Navbar from "./components/navbar/Navbar";
import Details from "./components/details/Details";


function App() {
  return <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<DefaultRoute/>} />
            <Route path="/:id" element={<Details/>} />
        </Routes>
      
</>
}

export default App;
