import React from 'react';
import { NavLink } from 'react-router-dom';


function Footer(props) {
    return (
        <> 
        <div className="container">
            
        <div className="insta-photos mt-5">
            
            <div className="row  row-cols-2 row-cols-lg-3">
                <div className="col-lg-2 col-4 insta-photo">
                    <img src="/public/img/insta-photo1.jpg" alt="" className='img-fluid insta-img'/>
                    <div className="insta-hover">
                    <i class="fa-brands fa-instagram insta-icon"></i>
                    </div>
                </div>
                <div className="col-lg-2 col-4 insta-photo">
                    <img src="/public/img/insta-photo2.jpg" alt="" className='img-fluid insta-img'/>
                    <div className="insta-hover">
                    <i class="fa-brands fa-instagram insta-icon"></i>
                    </div>
                </div>
                <div className="col-lg-2 col-4 insta-photo">
                    <img src="/public/img/insta-photo3.jpg" alt="" className='img-fluid insta-img'/>
                    <div className="insta-hover">
                    <i class="fa-brands fa-instagram insta-icon"></i>
                    </div>
                </div>
                <div className="col-lg-2 col-4 insta-photo">
                    <img src="/public/img/insta-photo4.jpg" alt="" className='img-fluid insta-img'/>
                    <div className="insta-hover">
                    <i class="fa-brands fa-instagram insta-icon"></i>
                    </div>
                </div>
                <div className="col-lg-2 col-4 insta-photo">
                    <img src="/public/img/insta-photo5.jpg" alt="" className='img-fluid insta-img'/>
                    <div className="insta-hover">
                    <i class="fa-brands fa-instagram insta-icon"></i>
                    </div>
                </div>
                <div className="col-lg-2 col-4 insta-photo">
                    <img src="/public/img/insta-photo6.jpg" alt="" className='img-fluid insta-img'/>
                    <div className="insta-hover">
                    <i class="fa-brands fa-instagram insta-icon"></i>
                    </div>
                </div>
                


            </div>
        </div>
        </div>
       
        <footer className="footer">
        <div className="container row">
          <div className="footer-col">
            <img src="/public/img/footer-logo.svg" alt="" />
            <p className='text-white mt-2'><i className="fa-solid fa-location-dot me-2 "></i>27 Division St, New York, NY &nbsp;&nbsp;&nbsp;&nbsp;10002, USA</p>
            <p className='text-white mt-2'> <i className="fa-solid fa-mobile-screen-button me-2"></i>+1 345 99 71 345 <br />&nbsp;&nbsp; &nbsp;  +1 345 74 64 975</p>
            <p className='text-white mt-2'> <i className="fa-regular fa-envelope me-2"></i>info@beshop.com</p>
          </div>
          <div className="footer-col">
            <h4>About</h4>
            <ul>
              <li><NavLink to={'/AboutUs'}>About us</NavLink></li>
              <li><NavLink to={'/Catgeories'}>Categories</NavLink></li>
              <li><NavLink to={'/Shop'}>Shop</NavLink></li>
              <li><NavLink to={'/Blog'}>Blog </NavLink></li>
              <li><NavLink to={'/Faq'}>FAQ</NavLink></li>
              <li><NavLink to={'/Contact'}>Contacts</NavLink></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Categories</h4>
            <ul>
              <li><NavLink to={'/Catgeories'}>Make up</NavLink></li>
              <li><NavLink to={'/Catgeories'}>SPA</NavLink></li>
              <li><NavLink to={'/Catgeories'}>Perfume</NavLink></li>
              <li><NavLink to={'/Catgeories'}>Nails</NavLink></li>
              <li><NavLink to={'/Catgeories'}>Skin care</NavLink></li>
              <li><NavLink to={'/Catgeories'}>Hair care</NavLink></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <NavLink><i className="fa-brands fa-facebook-f"></i></NavLink>
              <NavLink><i className="fa-brands fa-x-twitter"></i></NavLink>
              <NavLink><i className="fa-brands fa-instagram"></i></NavLink>
              <NavLink><i className="fa-brands fa-linkedin-in"></i></NavLink>
            </div>
          </div>
        </div>
      </footer>
                
            
        </>
    );
}

export default Footer;