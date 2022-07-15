import React from 'react'
import Footer from './Footer'
import first from "../assets/avatar.png"

function EditProfile() {
  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-md-8 border shadow m-5 p-5 mx-auto">
               
                        <img src={first} alt="" className='rounded-circle img-fluid ms-3' style={{ width: "90px", height: "90px" }} />

                    
               
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default EditProfile