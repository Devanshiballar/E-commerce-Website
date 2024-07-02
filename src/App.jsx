import React from 'react';
import { Route,BrowserRouter as  Routers, Routes } from "react-router-dom";
import "./componets/layout/Style.css"
import Header from './componets/layout/Header';
import Footer from './componets/layout/Footer';
import Home from './componets/pages/Home';
import Pages from './componets/pages/Pages';
import Shop from './componets/pages/Shop';
import Catgeories from './componets/pages/Catgeories';
import Blog from './componets/pages/Blog';
import Contact from './componets/pages/Contact';
import Login from './componets/pages/Login';
import Register from './componets/pages/Register';
import SingleCatagoryShow from './componets/pages/SingleCatagoryShow';

function App(props) {
  return (
    <>
      <Routers>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Pages' element={<Pages/>}></Route>
          <Route path='/Shop' element={<Shop/>}></Route>
          <Route path='/Catgeories' element={<Catgeories/>}></Route>
          <Route path='/Blog' element={<Blog/>}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
        
         
          <Route path='/Login' element={<Login/>}></Route>
          <Route path='/Register' element={<Register/>}></Route>
          <Route path='/singlecat/:id' element={<SingleCatagoryShow/>}></Route>

        </Routes>
        <Footer/>
      </Routers>
    </>
  );
}

export default App;