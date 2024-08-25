import Home from "./pages/Home"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Signin from './components/Signin';
import Register from './components/Register';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
