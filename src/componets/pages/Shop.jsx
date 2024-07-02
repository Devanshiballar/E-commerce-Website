import React from 'react';
import CardData from '../layout/CardData';
import CardUi from '../layout/CardUi';
import { NavLink } from 'react-router-dom';

function Shop(props) {
    return (
        <div>
             <div className="container-fulid">
            <div className="detail-box">
                <div className="detail-box-content">
                <h1>Shop</h1>
                <div className="login-home">
                    <NavLink className='text-center h6 login-home-link' to={'/'}>Home</NavLink>
                    <h5 className='ms-2'>-</h5>
                    <h6 className='ms-2'> Shop</h6>
                </div>
                </div>
            </div>
        </div>
        <div className="container " id='menu'>
          
          <div className="row row-cols-2 row-cols-lg-3 ">
              {
                  CardData.map((items)=>{
                  return (
                      <div className="col-4 col-lg-3">
                          <CardUi src={items.src} title={items.title} price={items.price}/>
                      </div>
                      )
                  })
              }
          </div>
      </div>
        </div>
    );
}

export default Shop;