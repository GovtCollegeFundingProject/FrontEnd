import Home from "./pages/Home"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Signin from './components/SignIn';
import Register from './components/Register';
import AboutUs from "./components/AboutUs";
import IndividualRegister from "./components/IndividualRegister";
import CompanyRegister from "./components/CompanyRegister";
import ContributionDetails from "./components/ContributionDetails";
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/signin" element={<Signin/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/register/individual" element={<IndividualRegister/>} />
        <Route path="/register/company" element={<CompanyRegister/>} />
        <Route path='/company' element={<ContributionDetails/>} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
