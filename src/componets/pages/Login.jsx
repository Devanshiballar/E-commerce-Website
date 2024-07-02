import axios from 'axios';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
// import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';

function Login(props) {
    const {register , handleSubmit , formState: {errors}} = useForm()
    const history = useNavigate()


    const submitData = async (data) => {
        var url="https://65e955314bb72f0a9c512a63.mockapi.io/user/user"
        await axios.post(url,data)
        .then(()=>{
            toast("Data successfully")
            history("/")
        })
        .catch((err)=>console.log(err))
    }
        return (
        <>
        <div className="container-fulid">
            <div className="detail-box">
                <div className="detail-box-content">
                <h1>Log In</h1>
                <div className="login-home">
                    <NavLink className='text-center h6 login-home-link' to={'/'}>Home</NavLink>
                    <h5 className='ms-2'>-</h5>
                    <h6 className='ms-2'> Log In</h6>
                </div>
                </div>
            </div>
        </div>
        <div className='col-6 mx-auto my-5 shadow p-5 login-form'>
        <form action="" method='post' onSubmit={handleSubmit(submitData)}>
            <h3 className='text-center '>Log In With </h3>
           <div className="login-social-icon">
           <ul className="login-form__social">
                <li><NavLink className='social-facebook'><i className="fa-brands fa-facebook-f fa-facebooks-f p-3"></i></NavLink></li>
                <li><NavLink className='social-twitter'><i className="fa-brands fa-twitter p-3"></i></NavLink></li>
                <li><NavLink className='social-'><i className="fa-brands fa-instagram fa-instagrams p-3"></i></NavLink></li>
                <li><NavLink className='social-facebook'><i className="fa-brands fa-google-plus-g p-3"></i></NavLink></li>
            </ul>
           </div>
                
                <div className="mt-4 box-field">
                    
                    <input type="text" {...register("emailid",
                    {
                        required:
                        {
                            value:true,
                            message:"enter email id"
                        },
                    
                        pattern:{
                            value:/[A-Za-z]{3}/,
                            message:"Enter valid pattern"
                        }
                        
                    }
                    )
                    }  className='form-control p-3' placeholder='Enter your email or nickname'    />
                    {errors.emailid && <p>{errors.emailid.message}</p>}
                </div>
                <div className="mt-4 box-field">
                    <input type="password" {...register("password",{
                        required:{
                            pattern:{
                                value:/[0-9]/,
                                message:"Enter your password"
                            }
                            
                            
                        }
                    })} className='form-control p-3' placeholder='Enter your password'/>
                    {errors.password && <p>{errors.password.message}</p>}
                </div>
                <label className="checkbox-box checkbox-box__sm mt-5"><input type="checkbox"/><span className="checkmark me-3"></span>Remember me</label>
                <div className="mt-4">
                <button type="submit" className="btn btn-dark mt-4 form-control p-3">LOG IN</button>
                </div>
                <div class="login-form__bottom">
                        <span>No account? <NavLink className='register-page' to={'/Register'}>Register now</NavLink></span>
                        
                </div>
                <ToastContainer/>
            </form>    
        </div>            
        </>
    );
}

export default Login;