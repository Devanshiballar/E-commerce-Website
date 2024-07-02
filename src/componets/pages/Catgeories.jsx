import React from 'react';
import { NavLink } from 'react-router-dom';

function Catgeories(props) {
    return (
        <>
            <div className="container-fulid">
            <div className="detail-box">
                <div className="detail-box-content">
                <h1>Catgeories</h1>
                <div className="login-home">
                    <NavLink className='text-center h6 login-home-link' to={'/'}>Home</NavLink>
                    <h5 className='ms-2'>-</h5>
                    <h6 className='ms-2'> Catgeories</h6>
                </div>
                </div>
            </div>
        </div>
    <div className="top-categories">
             
            <div className="top-categories_items mt-5">
              
              
                <NavLink className="top-categories_item col-lg-4 col-sm-12" to={'/Catgeories'}>
                    <img src="/public/img/top-categories-img1.jpg" alt="" />
                    <div className="top-categories__item-hover text-center">
                        <h5>SPA</h5>
                        <span>browse products -</span>
                        <i class="fa-solid fa-arrow-right-long"></i>
                    </div>
                </NavLink>
              
                <NavLink className="top-categories_item col-lg-4 xol-sm-12" to={'/Catgeories'}>
                    <img src="/public/img/top-categories-img2.jpg" alt="" />
                    <div className="top-categories__item-hover text-center">
                        <h5>Nails</h5>
                        <span>browse products -</span>
                        <i class="fa-solid fa-arrow-right-long"></i>
                    </div>
                </NavLink>
               
                <NavLink className="top-categories_item col-lg-4 col-sm-12" to={'/Catgeories'}>
                    <img src="/public/img/top-categories-img3.jpg" alt="" />
                    <div className="top-categories__item-hover text-center">
                        <h5>Perfume</h5>
                        <span>browse products -</span>
                        <i class="fa-solid fa-arrow-right-long"></i>
                    </div>
                </NavLink>
            </div>
        

    </div>
        </>
    );
}

export default Catgeories;