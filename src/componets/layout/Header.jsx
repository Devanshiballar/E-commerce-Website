import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-content">
  <div className="container-fluid">
    <a className="navbar-brand img-logo" href="#"><img src="../../../public/img/svg-image-1 (1).svg" alt="" className='img-logo'/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse header-box" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 header-nav">
        <li className="nav-item ">
          <NavLink className="nav-link active nav-list" to={"/"}>Home</NavLink>
        </li>
        <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle nav-list" to={"/Pages"} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Pages
          </NavLink>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
      
           
            <li><NavLink className="dropdown-item dropdown-list" to={'/Shop'} >Product</NavLink></li>
            <li><NavLink className="dropdown-item dropdown-list" to={'/Blog'} >Post</NavLink></li>
          
          </ul>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link nav-list " to={"/Shop"}>Shop</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link nav-list" to={"/Catgeories"}>Catgeories</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link nav-list" to={'/Blog'}>Blog</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link nav-list" to={"/Contact"}>Contact</NavLink>
        </li>
      </ul>
      {/* <ul className='navbar-options navbar-nav me-4'>
        <li className='nav-item'><a href="#" className='nav-link navbar-options  ' to={"/Faq"}><i class="fa-solid fa-magnifying-glass"></i></a></li>
        <li className='nav-item'><a href="#" className='nav-link navbar-options '><i class="fa-regular fa-user"></i></a></li>
        <li className='nav-item'><a href="#" className='nav-link navbar-options '><i class="fa-regular fa-heart"></i></a></li>
        <li className='nav-item'><a href="#" className='nav-link navbar-options '><i class="fa-solid fa-basket-shopping"></i><span>0</span></a></li>
      </ul> */}
    
     
    </div>
    <form class="form-inline my-2 my-lg-0">
     
     <NavLink className="btn registration-btn my-2 my-sm-0" type="submit" to={'/Register'}>Registration</NavLink>
     <NavLink className="btn login-btn my-2 my-sm-0" type="submit" to={'/Login'}>Log In</NavLink>
   </form>
  </div>
</nav>
        </>
    );
}

export default Header;