import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home1 } from "./components/home/home1";
import { Home2 } from "./components/home/home2"; 
import { Home3 } from "./components/home/home3";

function App() {

  return (
    <Router> 
        <Routes>
            <Route path='/' element={<Home1/>}></Route>  
            <Route path='/home2' element={<Home2/>}></Route>  
            <Route path='/home3' element={<Home3/>}></Route> 
        </Routes>
    </Router>
  )
}

export default App
