import React, { useEffect, useState } from 'react';
import BlogUi from '../layout/BlogUi';
import Menu from '../layout/Menu';
import { NavLink } from 'react-router-dom';

function Blog(props) {
    const [items, setItems] = useState(Menu);

    // const filterItem = (cateItem) => {
    //     console.log(cateItem)
    //     const updatedItem = Menu.filter((curElem) => {
    //         return curElem.category === cateItem;
    //     })
    //     setItems(updatedItem);
    // }

    useEffect(() => {
        setItems(Menu)
    }, [])
    return (
        <div>
             <div className="container-fulid">
            <div className="detail-box">
                <div className="detail-box-content">
                <h1>Blog</h1>
                <div className="login-home">
                    <NavLink className='text-center h6 login-home-link' to={'/'}>Home</NavLink>
                    <h5 className='ms-2'>-</h5>
                    <h6 className='ms-2'> Blog</h6>
                </div>
                </div>
            </div>
        </div>
             <div className="row demo-filter mx-0 drop-file">
                {
                    items.map((items) => {
                        return (
                            <div className="col-lg-4  col-md-6 col-sm-12 yay">
                                <BlogUi   id={items.id} src={items.src} name={items.name} dec={items.dec} date={items.date}></BlogUi>

                            </div>

                        )
                    })
                }
            </div>
        </div>
    );
}

export default Blog;