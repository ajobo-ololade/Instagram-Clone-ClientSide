import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Navbar() {
 const url = "http://localhost:5005/user/uploads"
 const url2 = "http://localhost:5005/user/nav"
 const token = localStorage.token
  const navigate = useNavigate()
  const [myfile, setmyfile] = useState('')
  const [message, setmessage] = useState('')
  const [status, setstatus] = useState("")
  const [captions, setcaptions] = useState("")
  const [username, setusername] = useState('')
 

  useEffect(() => {
    axios.get(url2,{ headers:{
      "Authorization":`Bearer ${token}`,
      "Content-Type":'application/json',
      'Accept':'application/json'
    }}).then((res) => {
      if (res.data.status) {
        // console.log(res.data.staus)
        
        setusername(res.data.userDetails.username)
      } else {
      
        
          localStorage.removeItem('token')
          navigate('/signin')
          
        
       
      }
    })
    console.log(username)
    

  }, [])
  // useEffect(()=>{
  //   if(localStorage.token){

  //   }

  // },[])
  // console.log(id)

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
  const upload = () => {
    const userPic = { myfile,captions,username }

    axios.post(url, userPic).then((res) => {
      setstatus(res.data.status)
      setmessage(res.data.message)


      // console.log(username)
    })

  }

  

  return (
    <>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Create new post</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body mx-auto ">
              <label>
                <input type='file' onChange={(e) => pickFile(e)} hidden />
                <p className='btn btn-primary mt-5'>Select an image</p>
              </label>
              {/* <div class="input-group"> */}
                {/* <span class="input-group-text">With textarea</span> */}
                <textarea class="form-control ms-4" aria-label="With textarea" placeholder='Captions' autoCorrect='off' autoComplete='off' style={{height:"18px !important"}} onChange={(e)=>setcaptions(e.target.value)}></textarea>
              {/* </div> */}
              <div>
                {status ? <p className='text-success'>{message}</p> : <p className='text-danger'>{message}</p>}
              </div>

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={upload}>Upload</button>
            </div>
          </div>
        </div>
      </div>




      <nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top" id='navbars'>
        <div class="container-fluid">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png" className='dasimg' alt="" style={{ width: "130px", display: "block" }} />
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <input class="form-control me-2 navform" type="search" placeholder="Search.." aria-label="Search" />
              </li>
              {/* <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
         */}

            </ul>
            <form class="d-flex mx-auto">
            <Link to= "/" className='text-dark'><i className="uil uil-estate me-4 fs-4" ></i></Link> 
              <i className="uil uil-message me-4 fs-4"></i>
              <i className="uil uil-plus-circle me-4 fs-4" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>


              <i className="uil uil-compass me-4 fs-4"></i>
              <i className="uil uil-heart fs-4 me-4"></i>


              <div class="dropdown">
                <i class="uil uil-user-circle fs-4  " id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" />
                {/* <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button> */}
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><Link to="/profile" className="dropdown-item"><i class="uil uil-user-circle me-2"></i>Profile</Link></li>
                  <li><a class="dropdown-item" href="#"> <i class="uil uil-bookmark-full me-2"></i>Saved</a></li>
                  <li><a class="dropdown-item" href="#"> <i class="uil uil-setting me-2"></i>Settings</a></li>
                  <li><a class="dropdown-item" href="#"><i className="uil uil-sync me-2"></i>Switched Account</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#">Log Out</a></li>
                </ul>
              </div>



              {/* <input class="form-control me-2" type="search" placeholder="Search.."  aria-label="Search"/> */}
              {/* <i class="uil uil-search"></i> */}
              {/* <button class="btn" type="submit"><i class="uil uil-search fw-bold"></i></button> */}
            </form>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar