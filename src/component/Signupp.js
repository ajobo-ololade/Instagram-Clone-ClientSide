import React from 'react'
import app from '../assets/apps.png'
import gog from '../assets/gog.png'
import { useFormik } from 'formik'
import * as yup from 'yup'

import Footer from './Footer'

function Signupp() {
    const formik = useFormik({
        initialValues: {
            email: '',
            fullname: '',
            username: '',
            password: '',
        },
        onSubmit: (values) => {
            console.log(values)
        },
        validationSchema:yup.object({
            email:yup.string().required(`Required Field`)
        })
    })

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
                                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="email"  onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                                        <label for="floatingInput">Mobile Number or Email address</label>
                                    </div>
                                    {formik.touched.email && <div className='text-danger fs-6'>{formik.errors.email}</div>}
                                   
                                    {/* <input type="text" className="form-control" onChange={formik.handleChange} onBlur={formik.handleBlur} /> */}


                                    <div className="form-floating mb-1">
                                        <input type="text" className="form-control form-control-sm" id="floatingPassword" placeholder="Password" name="fullname" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                        <label for="floatingPassword ">Full Name</label>
                                    </div>
                                    <div className="form-floating mb-1">
                                        <input type="text" className="form-control" id="floatingInput" placeholder="text" name="username" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                        <label for="floatingInput">User Name</label>
                                    </div>
                                    <div className="form-floating mb-1">
                                        <input type="password" className="form-control" id="floatingInput" placeholder="text" name="password"  onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                                        <label for="floatingInput">Password</label>
                                    </div>
                                    <p className='text-muted text-center text mb-4'>People who use our service may have uploaded your contact information to Instagram. Learn More</p>
                                    <p className='text-muted text-center text'>By signing up, you agree to our Terms , Data Policy and Cookies Policy.

                                    </p>
                                    <div>
                                        <button type='submit' className="btn btn-primary w-100 mt-3 mb-4">Sign Up</button>
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
                    <img src={app} alt="" className='me-2 image' style={{ width: "40%", }} />
                    <img src={gog} alt="" className='me-2 image' style={{ width: "40%" }} />
                </div>

            </div>
            <Footer />

            {/* <!-- Button trigger modal --> */}
{/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> */}


{/* <!-- Modal --> */}





        </>
    )
}

export default Signupp