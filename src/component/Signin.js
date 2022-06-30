import React from 'react'
import app from '../assets/apps.png'
import gog from '../assets/gog.png'
import "../component/style1.css"
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer'

function Signin() {
    const navigate = useNavigate()
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    // const [status, setstatus] = useState('')
    const [message, setmessage] = useState('')


    const url = "http://localhost:5005/user/signin"
    const signin = () => {
        const newUser = { email, password }
        axios.post(url, newUser).then((res) => {
            console.log(res)
            // setstatus(res.data.status)
            if (res.status == 200) {
                // localStorage.userDetails = JSON.stringify(res.data.result)
                localStorage.token = res.data.token 
                setmessage(res.data.message)
                navigate('/')
            }

        })
    }
    return (
        <>
            <div className="container">
                <div className>
                    <div>
                        <div className="col-lg-3 col-md m-auto mt-3">
                            <div className="card shadow bg-white mx-auto p-2  bigdivb">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png" className='img' alt="" style={{ width: "200px", display: "block", margin: "auto" }} />
                                <div className="row mx-auto">
                                    <div className="col-11 col-md-12">
                                        <div className="">
                                            <div>{message}</div>

                                            <div className="form-floating mb-1">
                                                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => setemail(e.target.value)} name="email" />
                                                <label for="floatingInput">Mobile Number or Email address</label>
                                            </div>
                                        </div>


                                        <div className="form-floating mb-1">
                                            <input type="password" class="form-control" id="floatingInput" placeholder="text" onChange={(e) => setpassword(e.target.value)} name="password" />
                                            <label for="floatingInput">Password</label>
                                        </div>

                                        <div>
                                            <button className="btn btn-primary w-100 mt-3" onClick={signin}> Log In</button>
                                        </div>
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
                            <img src={app} alt="" className='me-2 image' style={{ width: "35%", }} />
                            <img src={gog} alt="" className='me-2 image' style={{ width: "35%" }} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Signin
