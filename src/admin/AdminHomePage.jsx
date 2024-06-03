import React from 'react'
import { useNavigate } from 'react-router-dom'

const AdminHomePage = () => {
  const navigate = useNavigate()
  return (
    <>
    <div className="container-fluid">
      {/* First Row */}

      <div className="row">
        
        {/* First Block */}
        <div onClick={()=>{
          navigate("/dashboard/attendance")
        }} className="col-md-3 col">
          <div className='text-center p-3 rounded mt-4 shadow border'>
          <i style={{fontSize:"100px"}} className="fa-solid fa-clipboard-user"></i><br />
          Attendance
          </div>
        </div>

        {/* Second Block */}
        <div onClick={()=>{
          navigate("/dashboard/notice")
        }} className="col-md-3 col">
          <div className='text-center p-3 rounded mt-4 shadow border'>
          <i  style={{fontSize:"100px"}} className="fa-regular fa-clipboard"></i><br />
          Notice
          </div>
        </div>

        {/* Third Block */}
        <div onClick={()=>{
          navigate("/dashboard/registerstudent")
        }} className="col-md-3 col">
          <div className='text-center p-3 rounded mt-4 shadow border'>
          <i style={{fontSize:"100px"}} className="fa-solid fa-id-card"></i><br />
          Register Student
          </div>
        </div>

        {/* Fourth Block */}
        <div onClick={()=>{
          navigate("/dashboard/registerteacher")
        }} className="col-md-3 col">
          <div className='text-center p-3 rounded mt-4 shadow border'>
          <i style={{fontSize:"100px"}} className="fa-solid fa-chalkboard-user"></i><br />
          Register Teacher
          </div>
        </div>
      </div>
      
      {/* Second Row */}
      <div className="row">

        {/* First Block */}
        <div className="col-md-3 col">
          <div className='text-center p-3 rounded mt-4 shadow border'>
          <i style={{fontSize:"100px"}} className="fa-solid fa-clipboard-user"></i><br />
          Attendance
          </div>
        </div>

        {/* Second Block */}
        <div className="col-md-3 col">
          <div className='text-center p-3 rounded mt-4 shadow border'>
          <i style={{fontSize:"100px"}} className="fa-solid fa-clipboard-user"></i><br />
          Attendance
          </div>
        </div>

        {/* Third Block */}
        <div className="col-md-3 col">
          <div className='text-center p-3 rounded mt-4 shadow border'>
          <i style={{fontSize:"100px"}} className="fa-solid fa-clipboard-user"></i><br />
          Attendance
          </div>
        </div>

        {/* Fourth Block */}
        <div className="col-md-3 col">
          <div className='text-center p-3 rounded mt-4 shadow border'>
          <i style={{fontSize:"100px"}} className="fa-solid fa-clipboard-user"></i><br />
          Attendance
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default AdminHomePage