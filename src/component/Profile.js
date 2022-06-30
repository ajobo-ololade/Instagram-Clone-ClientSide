import React from 'react'
import Navbar from './Navbar'
import { useState, useEffect } from 'react'
import Footer from './Footer'
import axios from 'axios'
import second from "../assets/img1.png"
import { Navigate, useNavigate } from 'react-router-dom'

function Profile() {
  const navigate = useNavigate()
  const [allusers, setallusers] = useState('')
  const [image, setimage] = useState([])
  const [fullname, setfullname] = useState('')
  const [username, setusername] = useState('')
  const [postArray, setpostArray] = useState([])
  const token = localStorage.token

  const url = "http://localhost:5005/user/displayimg"
  const url2 = "http://localhost:5005/user/profile"
  useEffect(() => {

    axios.get(url2,{ headers:{
      "Authorization":`Bearer ${token}`,
      "Content-Type":'application/json',
      'Accept':'application/json'
    }}).then((res) => {
      console.log(res)
      if (res.data.status) {
        // console.log(res.data.staus)
        // setimage(res.data.result)
        setpostArray(res.data.userDetails.Post)
        setfullname(res.data.userDetails.fullname)
        setusername(res.data.userDetails.username)
        
      } else {
        
        localStorage.removeItem('token')
        navigate('/signin')
      }
      
      // console.log(postArray)
      
      


    })

    // if (localStorage.userDetails) {
    //   setallusers(JSON.parse(localStorage.userDetails))
    // }
  }, [])
  // console.log(image)
  // useEffect(()=>{
  //   axios.get(url,url2,{ headers:{
  //         "Authorization":`Bearer ${token}`,
  //         "Content-Type":'application/json',
  //         'Accept':'application/json'
  //       }}).then((res)=>{
  //     if (res.data.status) {
  //       setimage(res.data.result)
  //       setfullname(res.data.userDetails.fullname)
  //       setusername(res.data.userDetails.username)
        
  //     } else {
  //       if(localStorage.token){
  //         setallusers(JSON.parse(localStorage.token))
  //       }
  //     }
  //   })

  // },[])
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className=" col-2 col-md-3 ms-auto mt-4">
            <img src={second} alt="" className='rounded-circle img-fluid ms-3' style={{ width: "150px", height: "150px" }} />
          </div>
          <div className="col-md-7 mt-5">
            <div className="d-flex">
              <p className='display-6'>{username}</p>
              <button className='btn btn-sm border h-25  ms-3 mt-3'> Edit Profile</button>
              <i className="uil uil-cog mt-2 ms-3 fs-3"></i>
            </div>

            <div className="d-flex">
              <p className=''> <span><strong>13</strong></span>  Posts</p>
              <p className='ms-3'> <span><strong>243</strong></span>   Followers</p>
              <p className='ms-3'> <span><strong>142</strong></span>  Following</p>
            </div>

            <p className="mt-2">{fullname}</p>



          </div>
          <div className='mt-3 mx-auto col-md-8'>
            <img src={second} alt="" className="rounded-circle img-fluid" style={{ width: "80px", height: "80px" }} />
            <p className='text-muted fs-6'> Highlights</p>
          
          </div>
          <hr />



        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className=" col-7 col-md-10 mx-auto">
            
            {/* {image.filter(o=>o.userId===allusers._id).map((img, index) => (
              <img src={img.image_url} alt="" style={{ width: "250px",height:"300px" }} className="me-3 mb-3" />

            ))} */}
            {postArray.map((img,index)=>(
            <img src={img.image_url} alt="" style={{ width: "250px",height:"300px" }} className="me-3 mb-3" />

            ))}


          </div>
        </div>
      </div>

      <Footer/>
    </>
  )
}

export default Profile