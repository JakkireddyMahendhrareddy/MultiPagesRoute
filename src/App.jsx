import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Product from './components/Product/Product'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'

import './App.css'

function App() {

  return (
    <div className="container">
      <BrowserRouter>
      <Navbar/>
      <Routes>
         <Route exact path="/" element={<Home/>}/>
         <Route exact path="/contact" element={<Contact/>}/>
         <Route exact path="/product" element={<Product/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
