import React from 'react';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Products from './components/Products';
import Categories from './components/Categories';
import Cart from './components/Cart';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div>
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route exact path='/' element={<Home></Home>}/>
          <Route path='/products' element={<Products></Products>}/>
          <Route path='/categories' element={<Categories></Categories>}/>
          <Route path='/cart' element={<Cart></Cart>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
