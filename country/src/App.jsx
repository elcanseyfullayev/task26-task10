import './App.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Details from './pages/Details';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}/> 
          <Route path="/details/:countryName" element={<Details/>}/> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
