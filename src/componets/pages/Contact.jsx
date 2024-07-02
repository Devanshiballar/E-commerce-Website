import React from 'react';
import { NavLink } from 'react-router-dom';

function Contact(props) {
    return (
        <>
        <div className="container-fulid">
            <div className="detail-box">
                <div className="detail-box-content">
                <h1>Contact</h1>
                <div className="login-home">
                    <NavLink className='text-center h6 login-home-link' to={'/'}>Home</NavLink>
                    <h5 className='ms-2'>-</h5>
                    <h6 className='ms-2'> Contact</h6>
                </div>
                </div>
            </div>
        </div>
        <section className="section" id="contact">
    <div className="container">
       

        <div className="row mt-5 pt-4 d-flex">
            <div className="col-lg-12 d-flex">
                <div className="mt-4 home-img text-center">
                    
                    <img src="/public/img/discount-bg3.jpg" className="" alt=""/>

                </div>
                <div className='col-lg-6 ms-3'>
                <form method="post" name="contact-form" id="contact-form">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="form-group mt-3">
                                    <label className="contact-lable">First Name</label>
                                    <input name="name" id="name" className="form-control shadow" type="text"/>
                                </div>
                            </div>

                         
                        </div>

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="form-group mt-3">
                                    <label className="contact-lable">Email Address</label>
                                    <input name="email" id="email" className="form-control shadow" type="text"/>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="form-group mt-3">
                                    <label className="contact-lable">Your Message</label>
                                    <textarea name="comments" id="comments" rows="5" className="form-control shadow"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 mt-3 text-right">
                                <input id="submit" name="send" className="send-btn btn btn-round" value="Send Message" type="submit"/>
                                
                            </div>
                        </div>
                    </form>
                </div>
            </div>

          
        </div>

    </div>
</section>
        </>
    );
}

export default Contact;