import { useFormik } from 'formik'
import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import app from '../assets/apps.png'
import gog from '../assets/gog.png'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer'
import * as yup from'yup'




function Signup() {
    const url = "http://localhost:5005/user/signup"
    const navigate = useNavigate()
    const [message, setmessage] = useState('')
    const [status, setstatus] = useState('')

    const formik = useFormik({
        initialValues:{
            email:'',
            fullname:'',
            username:'',
            password:'',



        },
        onSubmit:(values)=>{  
            axios.post(url,values).then((res) => {
                setstatus(res.data.status)
                
                console.log(res)
                if (res.data.status) {
                    setmessage(res.data.message)
                  
                    navigate('/signin')
                }
                       
                    })
        },
        validationSchema:yup.object({
            email: yup.string().required(`Required Field`),
            fullname:yup.string().required(`Required Field`),
            username:yup.string().required(`Required Field`),
            password:yup.string().required(`Required Field`)
        }),
        
    })
    
   
    // const [email, setemail] = useState('')
    // const [fullname, setfullname] = useState('')
    // const [username, setusername] = useState('')
    // const [password, setpassword] = useState('')
    //
    // 
    // const register = () => {
    //    
    //     



    //     
    // }
    return (
        <>
            <div className="container-fluid">
                <div className="col-lg-3 col-md m-auto mt-3">
                    <div className="card shadow bg-white mx-auto p-2  bigdivb">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png" className='img' alt="" style={{ width: "200px", display: "block", margin: "auto" }} />
                        <div className="row mx-auto">
                            <div className="col-11 col-md-12">
                                <div className="">
                                    <h5 className='text-muted  mb-4 text-center'>Sign up to see photos and videos from your friends.</h5>
                                    <button className="btn btn-primary mb-3 w-100"><i class="uil uil-facebook me-2"></i>Log in with Facebook</button>
                                    </div>
                                    <form action="" onSubmit={formik.handleSubmit}>
                                    <div className="form-floating mb-1">
                                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                        <label for="floatingInput">Mobile Number or Email address</label>
                                    </div>
                                    {formik.touched.email && <div className='text-danger' style={{fontSize:'10px'}}>{formik.errors.email}</div>}
                               
                                <div className="form-floating mb-1">
                                    <input type="text" class="form-control form-control-sm" id="floatingPassword" placeholder="Password" name="fullname" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                    <label for="floatingPassword ">Full Name</label>
                                </div>
                                {formik.touched.fullname && <div className='text-danger' style={{fontSize:'10px'}}>{formik.errors.fullname}</div>}
                                <div className="form-floating mb-1">
                                    <input type="text" class="form-control" id="floatingInput" placeholder="text"  name="username" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                    <label for="floatingInput">User Name</label>
                                </div>
                                {formik.touched.username && <div className='text-danger' style={{fontSize:'10px'}}>{formik.errors.username}</div>}
                                <div className="form-floating mb-1">
                                    <input type="password" class="form-control" id="floatingInput" placeholder="text" name="password" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                    <label for="floatingInput">Password</label>
                                </div>
                                {formik.touched.password && <div className='text-danger' style={{fontSize:'10px'}}>{formik.errors.password}</div>}
                                <p className='text-muted text-center text mb-4'>People who use our service may have uploaded your contact information to Instagram. Learn More</p>
                                <p className='text-muted text-center text'>By signing up, you agree to our Terms , Data Policy and Cookies Policy.

                                </p>
                                <div><p>{message}</p></div>
                                <div>
                                    <button disabled={!formik.isValid} className="btn btn-primary w-100 mt-3 mb-4" type='submit'>Sign Up</button>
                                </div>
                                
                                    </form>
                                
                            </div>

                        </div>


                    </div>
                </div>
            </div>
            

            <div className="col-lg-3 col-md m-auto mt-2 mb-3 ">
                <div className="card shadow bg-white mx-auto p-2">
                    <p className='text-center mt-3'>Have an account?<a href="#" className='me-2 lik'> Log In</a></p>

                </div>
            </div>
            <div className="col-lg-3 col-md m-auto mt-2 mb-3">
                <p className='text-center'>Get the app</p>
                <div className='ms-auto'>
                <img src={app} alt="" className='me-2 image' style={{width:"40%",}}/>
                <img src={gog} alt="" className='me-2 image' style={{width:"40%"}}/>
                </div>

            </div>
           <Footer/>





        </>
    )
}

export default Signup