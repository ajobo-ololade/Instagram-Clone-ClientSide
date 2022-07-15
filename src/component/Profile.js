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
  const [myfile, setmyfile] = useState('')
  const [email, setemail] = useState('')
  const [bio, setbio] = useState('')
  const [website, setwebsite] = useState('')
  const [num, setnum] = useState('')
  const [message, setmessage] = useState('')
  const token = localStorage.token

  const url = "http://localhost:5005/user/displayimg"
  const url2 = "http://localhost:5005/user/profile"
  const url3 = "http://localhost:5005/user/update"
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
        setemail(res.data.userDetails.email)
        
      } else {
        
        localStorage.removeItem('token')
        navigate('/signin')
      }
      // 
     
      
      


    })

    // if (localStorage.userDetails) {
    //   setallusers(JSON.parse(localStorage.userDetails))
    // }
  }, [])
  const updateProfile=()=>{
    const update = {fullname,username,email,num,bio,website,myfile}
    axios.post(url3,update).then((res)=>{
      setmessage(res.data.message)

    })
  }

  const pickFile = (e) => {
    const file = e.target.files[0]

    const reader = new FileReader()
    console.log(file)
    reader.readAsDataURL(file)
    reader.onload = () => {
      const result = reader.result
      setmyfile(result)
    }
  }
  // const nav =()=>{
  //   navigate('/editprofile')
  // }
  return (
    <>
      <Navbar />
      {/* Modal gender */}
      <div class="modal fade" id="exampleModalg" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Gender</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <p>Please select your Gender</p>
  <input type="radio" id="male" name="fav_language" value="male"/>
  <label for="male" className='fs-6'>Male</label><br/>
  <input type="radio" id="female" name="fav_language" value="female"/>
  <label for="female" className='fs-6'>Female</label><br/>
  <input type="radio" id="null" name="fav_language" value="null"/>
  <label for="null" className='fs-6'>I prefer not to say</label>

       
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
{/* Modal gender ends */}
   {/* Modal for edit profile */}
      <div class="modal fade" id="exampleModals" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Edit Profile</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body ms-5">
       <div className="d-flex">
       <p className='fs-4'>{username}</p>
       
        <label>
                <input type='file' onChange={(e) => pickFile(e)} hidden />
                <p className='fs-6 text-primary mt-2 ms-3'>Change Profile photo</p>
              </label>
              
              
       </div>

       <label className='fs-6 mb-2'>Full Name</label>
       <input type="text" defaultValue={fullname}  className='form-control mb-2' placeholder=" Full Name" onChange={(e)=>setfullname(e.target.value)}/>

       <label className="fs-6">User Name</label>
       <input type="text" defaultValue={username} className="form-control mb-3" placeholder="User Name"  onChange={(e)=>setusername(e.target.value)} />
       <p className="text-muted mb-2" style={{fontSize:"12px"}}>Note you can only change your username to a name that never existed</p>

       <label className="fs-6">Website</label>
       <input type="text" className="form-control mb-3" placeholder='Website' onChange={(e)=>setwebsite(e.target.value)} />

       <label className='fs-6' >Bio</label>
       <textarea name="" id=""  className='form-control mb-3' aria-label="With textarea"  style={{height:"18px !important"}}  onChange={(e)=>setbio(e.target.value)}></textarea>

       <h6 className="text-muted fw-bold">Personal Information</h6>
       <p className="text-muted mb-2" style={{fontSize:"12px"}}>
       Provide your personal information, even if the account is used for a business, a pet or something else. This won't be a part of your public profile.
       </p>
       <label htmlFor="" className="fs-6">Email</label>
       <input type="text" defaultValue={email} placeholder="Email" className="form-control mb-2" onChange={(e)=>setemail(e.target.value)} />

       <label htmlFor="" className="fs-6">Phone Number</label>

        <input type="number" className="form-control mb-2"  placeholder='Phone Number' onChange={(e)=>setnum(e.target.value)}/>
        <label className="fs-6">Gender</label>
        <input type="text" className="form-control" data-bs-toggle="modal" data-bs-target="#exampleModalg" />




        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick={updateProfile}>Update</button>
      </div>
    </div>
  </div>
</div>
{/* Modal for edit profile  ends*/}


      <div className="container">
        <div className="row">
          <div className=" col-2 col-md-3 ms-auto mt-4">
            <img src={second} alt="" className='rounded-circle img-fluid ms-3' style={{ width: "150px", height: "150px" }} />
          </div>
          <div className="col-md-7 mt-5">
            <div className="d-flex">
              <p className='display-6'>{username}</p>
              <button className='btn btn-sm border h-25  ms-3 mt-3'data-bs-toggle="modal" data-bs-target="#exampleModals" > Edit Profile</button>
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