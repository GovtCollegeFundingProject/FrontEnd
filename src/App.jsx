import Home from "./pages/Home"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Signin from './components/SignIn';
import Register from './components/Register';
import AboutUs from "./components/AboutUs";
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/signin" element={<Signin/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
