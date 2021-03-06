import React from 'react'
import Navbar from './Navbar'
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'
import avata from '../assets/avatar.png'
import Footer from './Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const style = {
    // textAlign: 'center',
    // background:"gray",
    // // padding: '10px 0',
    // borderRadius: "100%",
    // // fontSize: '30px',
    // height: "60px",
    // width: "60px",
    // align: "center",
    // margin: "auto"
  };

  const properties = {
    duration: 3000,
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplay: false,
    indicators: false,
    responsive:[
      {
        breakingpoint:1024,
        setting:{
          slidesToShow:5,
          slidesToScroll:3
        }
      },
      {
        breakpoint:500,
        setting:{
          slidesToScroll:2,
          slidesToScroll:1
        }
      }
    ]
  };
  const url = "http://localhost:5005/user/details"
  
  const url2 = "http://localhost:5005/user/"
  const [image, setimage] = useState([])
  const token = localStorage.token
  const navigate = useNavigate()
  const [username, setusername] = useState('')
  const [fullname, setfullname] = useState('')
  const [message, setmessage] = useState('')
  const [status, setstatus] = useState('')
  const [test, settest] = useState([])
  const [details, setdetails] = useState([])
  useEffect(() => {
    

      axios.get(url2,{ headers:{
        "Authorization":`Bearer ${token}`,
        "Content-Type":'application/json',
        'Accept':'application/json'
      }}).then((res) => {
        if (res.data.status) {
          // console.log(res.data.staus)
         
          setimage(res.data.userDetails.Post)
          setusername(res.data.userDetails.username)
          setfullname(res.data.userDetails.fullname)
        } else {
        
          
            localStorage.removeItem('token')
            navigate('/signin')
            
          
         
        }
        // console.log(username)
        // console.log(res)
        
        
  
  
      })
      axios.get(url).then((res)=>{
        // settest(res.data.result)
      
          setdetails(res.data.result)

          
          
        
          
        
      })
  
      console.log(details)
      // console.log(test)
      // setimage(detres.data.result)


    

  }, [])
  


  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-5">
            <div className=''>
              <div className="card shadow-sm p-4 mb-3 mt-4">
                <div>
                  <div>
                    <Slide {...properties}>
                      
                      <img src={avata} alt="" className="rounded" style={{width:"70px", borderRadius:"100px"}} />
                      <img src={avata} alt="" className="rounded" style={{width:"70px", borderRadius:"100px"}} />
                      <img src={avata} alt="" className="rounded" style={{width:"70px", borderRadius:"100px"}} />
                      <img src={avata} alt="" className="rounded" style={{width:"70px", borderRadius:"100px"}} />
                      <img src={avata} alt="" className="rounded" style={{width:"70px", borderRadius:"100px"}} />
                      <img src={avata} alt="" className="rounded" style={{width:"70px", borderRadius:"100px"}} />
                      <img src={avata} alt="" className="rounded" style={{width:"70px", borderRadius:"100px"}} />
                      <img src={avata} alt="" className="rounded" style={{width:"70px", borderRadius:"100px"}} />
                      <img src={avata} alt="" className="rounded" style={{width:"70px", borderRadius:"100px"}} />
                    </Slide>
                  </div>
                </div>





              </div>


              {details.map((images, index) => (
                
                images.Post.map((images) =>(
                  <div className='mt-4'>
                <div class="card" >
                
                  <div class="card-body ">
                    <h5 class="card-title fs-6 text-muted"><i class="uil uil-user-circle fs-3"></i>{images.username}</h5>
                    
                    
                      <img src={images.image_url} class="card-img-button imageL" alt="..."  />
                    

                    <div className="d-flex">
                      <i className="uil uil-heart-alt fs-4 me-2"></i>
                      <i className="uil uil-comment fs-4 me-2"></i>
                      <i className="uil uil-location-arrow fs-4 me-2"></i>

                    </div>

                  </div>
                 
                </div>
              </div>
                )) 
               ))}



            </div>
                
          </div>
          
          <div className="col-md-4 mt-4">
            <div className='d-flex'>
              <div>
                <i className="uil uil-user-circle fs-1" />
              </div>
              <div className='ms-3'>
                <p className='mt-3 '>{username} </p>
                <p className='fs-8 text-muted' style={{ fontSize: "12px", marginTop: "-12px" }}>{fullname}</p>


              </div>
              <div className='mt-4 ' style={{ marginLeft: "120px", fontSize: "12px" }}>
                <a href="" style={{ textDecoration: "none" }}>Switch</a>
              </div>


            </div>

            {details.filter(name=>name.username!=username).map((details,index)=>(
                  <div id="followers">
                  <div>
                    <i className="uil uil-user-circle fs-1" />
                  </div>
                  <div className='ms-3'>
                    <p className='mt-3'>{details.username} </p>
                    <p className='fs-8 text-muted ' style={{ fontSize: "12px", marginTop: "-12px" }}>{details.fullname}</p>
    
    
                  </div>
                  <div className='mt-4 ' style={{ marginLeft: "120px", fontSize: "12px" }}>
                    <a href="" style={{ textDecoration: "none" }}>Follow</a>
                  </div>
    
    
                </div>
                ))}
                

            


            {/* <div className='d-flex'>
              <div>
                <i className="uil uil-user-circle fs-1" />
              </div>
              <div className='ms-3'>
                <p className='mt-3'>__alixem </p>
                <p className='fs-8 text-muted' style={{ fontSize: "12px", marginTop: "-12px" }}>Ajobo Ololade</p>


              </div>
              <div className='mt-4 ' style={{ marginLeft: "120px", fontSize: "12px" }}>
                <a href="" style={{ textDecoration: "none" }}>Follow</a>
              </div>


            </div> */}
            {/* <div className='d-flex'>
              <div>
                <i className="uil uil-user-circle fs-1" />
              </div>
              <div className='ms-3'>
                <p className='mt-3'>__alixem </p>
                <p className='fs-8 text-muted' style={{ fontSize: "12px", marginTop: "-12px" }}>Ajobo Ololade</p>


              </div>
              <div className='mt-4 ' style={{ marginLeft: "120px", fontSize: "12px" }}>
                <a href="" style={{ textDecoration: "none" }}>Follow</a>
              </div>


            </div> */}
            {/* <div className='d-flex'>
              <div>
                <i class="uil uil-user-circle fs-1" />
              </div>
              <div className='ms-3'>
                <p className='mt-3'>__alixem </p>
                <p className='fs-8 text-muted' style={{ fontSize: "12px", marginTop: "-12px" }}>Ajobo Ololade</p>


              </div>
              <div className='mt-4 ' style={{ marginLeft: "120px", fontSize: "12px" }}>
                <a href="" style={{ textDecoration: "none" }}>Follow</a>
              </div>


            </div> */}


          </div>





        </div>




      </div>
      <Footer />


    </>
  )
}

export default LandingPage