import "./index.css"
import { Route, Routes } from "react-router-dom"
import DefaultRoute from "./components/roures/DefaultRoute";


function App() {
  return <>
    <Routes>
      <Route path="/" element={<DefaultRoute/>} />
    </Routes>
</>;
}

export default App;
