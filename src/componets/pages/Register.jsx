import axios from 'axios';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
// import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';

function Register(props) {
    const {register , handleSubmit , formState: {errors}} = useForm()
    

    const submitData = async (data) => {
        var url="https://.moc65e955314bb72f0a9c512a63kapi.io/user/user"
        await axios.post(url,data)
        .then(()=>{
            toast("Data successfully")
        })
        .catch((err)=>console.log(err))
    }
        return (
        <>
        <div className="container-fulid">
            <div className="detail-box">
                <div className="detail-box-content">
                <h1>Registration</h1>
                <div className="login-home">
                    <NavLink className='text-center h6 login-home-link' to={'/'}>Home</NavLink>
                    <h5 className='ms-2'>-</h5>
                    <h6 className='ms-2'> Check in</h6>
                </div>
                </div>
            </div>
        </div>
        <div className='col-7 mx-auto my-5 p-5 shadow login-form'>
        <form action="" method='post' onSubmit={handleSubmit(submitData)}>
            <h3 className='text-center '>Register Now </h3>
           <div className="login-social-icon">
           <ul className="login-form__social">
                <li><NavLink className='social-facebook'><i className="fa-brands fa-facebook-f fa-facebooks-f p-3"></i></NavLink></li>
                <li><NavLink className='social-twitter'><i className="fa-brands fa-twitter p-3"></i></NavLink></li>
                <li><NavLink className='social-'><i className="fa-brands fa-instagram fa-instagrams p-3"></i></NavLink></li>
                <li><NavLink className='social-facebook'><i className="fa-brands fa-google-plus-g p-3"></i></NavLink></li>
            </ul>
           </div>
                
            <div className="row col-12">
               <div className="mt-3 box-field col-12">
                    
                    <input type="text" {...register("name",
                    {
                        required:
                        {
                            value:true,
                            message:"Enter name"
                        },
                    
                
                        
                    }
                    )
                    }  className='form-control p-3 ' placeholder='Enter your name'    />
                    {errors.name && <p>{errors.name.message}</p>}
                    <input type="text" {...register("lastname",
                    {
                        required:
                        {
                            value:true,
                            message:"Enter your Lastname"
                        },
                    
               
                        
                    }
                    )
                    }  className='form-control p-3' placeholder='Enter your last name'    /><br></br>
                   {errors.lastname && <p>{errors.lastname.message}</p>}
                </div>
            </div>
            <div className="row col-12">
               <div className="mt-2 box-field col-12">
                    
                    <input type="number" {...register("phone",
                    {
                        required:
                        {
                            value:true,
                            message:"Enter phone number"
                        },
                    
                 
                        
                    }
                    )
                    }  className='form-control p-3 ' placeholder='Enter your phone'    />
                    {errors.phone && <p>{errors.phone.message}</p>}
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
                    }  className='form-control p-3 ' placeholder='Enter your email'    />
                    {errors.emailid && <p>{errors.emailid.message}</p>}
                </div>
            </div>
              
            <div className="box-field-row">
                <span>Password</span>
                <div className="row col-12">
               <div className="mt-2 box-field col-12 ">
                    
                    <input type="password" {...register("password",
                    {
                        required:
                        {
                            value:true,
                            message:"Enter password"
                        },
                    
                    }
                    )
                    }  className='form-control p-3 ' placeholder='Enter your password'    />
                    {errors.password && <p>{errors.password.message}</p>}
                    <input type="password" {...register("password",
                    {
                     
                        
                    }
                    )
                    }  className='form-control p-3 ' placeholder='Confirm password'    />
                    {errors.password && <p>{errors.password.message}</p>}
                </div>
            </div>
            </div>   

            <label class="checkbox-box checkbox-box__sm mt-4">
                <input type="checkbox"/>
                
            <span class="checkmark ms-4"></span>Remember me</label>  
                      
               
                <div className="mt-2">
                <button type="submit" className="btn btn-dark mt-4 form-control p-3">REGISTRATION</button>
                </div>
                <div class="login-form__bottom">
                        <span>Already have an account? <NavLink className='register-page' to={'/Login'}> LOG IN</NavLink></span>
                        
                </div>
                <ToastContainer/>
            </form>    
        </div>            
        </>
    );
}

export default Register;