import React from 'react';
import { NavLink } from 'react-router-dom';

function Home(props) {
    return (
        <>
            <div className="main-content">
                <div className="main_bg">
                   <div className="main_container">
                     <span className='saint-text'>Professional</span>
                     <h1 className='main-text'>Beauty & Care</h1>
                     <p className='main-description'>Nourish your skin with toxin-free cosmetic products. With the offers that you can’t refuse.</p>
                     <button className='btn shop-btn'>Shop now</button>
                   </div>
                </div>
                {/* <img src="../../../public/img/main-block-decor.png " className='main-decor' alt="" /> */}

                <div className="container trending">
                    <div className="trendin-content">
                        <div className="trending-top text-center">
                        <span class="saint-text">Cosmetics</span>
                        <h2 className='treding-product'>Trending products</h2>
                        <p>Nourish your skin with toxin-free cosmetic products. With the offers that you can’t refuse.</p>
                        </div>
                    </div>
                    <div className="trending-tabs">
                        <ul className='nav-tab-list tabs'>
                            <li className='active'>Make Up</li>
                            <li>SPA</li>
                            <li>Perfume</li>
                            <li>Nails</li>
                            <li>Skin care</li>
                            <li>Hair care</li>
                        </ul>
                    </div>
                </div>
                <div className="product-items">
                    
                </div>
              <div className="container">
                <div className="row main-logos row-cols-2 row-cols-lg-6">
                <div className="col">
                        <a href="/"><img src="/public/img/svg-image-2 (1).svg" className="js-img" alt=""/></a>
                        </div>
                        <div className="col">
                        <a href="/"><img src="/public/img/svg-image-3.svg" className="js-img" alt=""/></a> 
                        </div>
                        <div className="col">
                        <a href="/"><img src="/public/img/svg-image-4.svg" className="js-img" alt=""/></a>
                        </div>
                        <div className="col">
                        <a href="/"><img src="/public/img/svg-image-5.svg"  className="js-img" alt=""/></a>
                        </div>
                        <div className="col">
                        <a href="/"><img src="/public/img/svg-image-6.svg"  className="js-img" alt=""/></a>
                        </div>
                </div>
              </div>
              
                   
                   
                   
                 
            
                <div className="discount responsive">
                    <div className="discount-contain">
                        <div className="discount-info">
                        <span className="saint-text">Discount</span>  
                        <span className="main-off">Get Your<span> 50%</span> Off</span>
                        <p className='main-description'>Nourish your skin with toxin-free cosmetic products. With the offers that you can’t refuse.</p>
                        <button className="btn shop-btn" href="#">get now!</button>
                        </div>
                    </div>
                </div>
                    <div className="advantages container">
                        <div className="advantages-item d-flex text-center">
                        <div className="row">
                            <div className="col-12 d-flex advantages-items">
                                <div className="card advantages-item">
                                     <img src="/public/img/Natural.png" alt="" className=' img-fluid'/>
                                    <div className="card-body">
                                        <h4 className="card-title">Natural</h4>
                                        <p className="card-text">Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim velit adipisicing ea aliqua alluptate sit do do.</p>
                                    </div>
                                </div>
                                <div className="card advantages-item">
                                   <img src="/public/img/medal.png" alt="" className='img-fluid' />
                                    <div className="card-body">
                                        <h4 className="card-title">Quality</h4>
                                        <p className="card-text">Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim velit adipisicing ea aliqua alluptate sit do do.</p>
                                    </div>
                                </div>
                                <div className="card advantages-item">
                                    <img src="/public/img/Natural1.png" alt="" className='img-fluid' />
                                    <div className="card-body">
                                        <h4 className="card-title">Natural</h4>
                                        <p className="card-text">Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim velit adipisicing ea aliqua alluptate sit do do.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="top-categories">
                        <div className="trending-top text-center">
                        <span class="saint-text">Popular collections</span>
                        <h2 className='treding-product'>top categories</h2>
                        <p>Nourish your skin with toxin-free cosmetic products. With the offers that you can’t refuse.</p>
                        </div>
                        <div className="top-categories_items">
                       
                            <NavLink className="top-categories_item" to={'/Catgeories'}>
                                <img src="/public/img/top-categories-img1.jpg" alt="" />
                                <div className="top-categories__item-hover text-center">
                                    <h5>SPA</h5>
                                    <span>browse products -</span>
                                    <i class="fa-solid fa-arrow-right-long"></i>
                                </div>
                            </NavLink>
                            <NavLink className="top-categories_item" to={'/Catgeories'}>
                                <img src="/public/img/top-categories-img2.jpg" alt="" />
                                <div className="top-categories__item-hover text-center">
                                    <h5>Nails</h5>
                                    <span>browse products -</span>
                                    <i class="fa-solid fa-arrow-right-long"></i>
                                </div>
                            </NavLink>
                            <NavLink className="top-categories_item" to={'/Catgeories'}>
                                <img src="/public/img/top-categories-img3.jpg" alt="" />
                                <div className="top-categories__item-hover text-center">
                                    <h5>Perfume</h5>
                                    <span>browse products -</span>
                                    <i class="fa-solid fa-arrow-right-long"></i>
                                </div>
                            </NavLink>
                       
                        </div>

                    </div>
                   
            </div>
                
           
        </>
    );
}

export default Home;