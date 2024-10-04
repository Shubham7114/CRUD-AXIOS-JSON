import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const AddStudents = () => {
  const nav = useNavigate()
  const [student, setStudent]= useState({name:"",course:"",contact:"",batch:""})

   const InputChangeHandler =(event)=>{
      const {type,name,value} = event.target
      setStudent({...student,[name]:value})     
  }



  // ======== Post Api =============================================================
  
  const AddStudentData =()=>{
    axios.post(`http://localhost:5555/Student`,student).then(()=>{
      window.alert("Data Added Succesfully !")
    }).catch((err)=>{
      console.log(err);
    })
    nav('/Dashstudent')
  }

  return (
    <div>
      
         <h1 className="text-danger-emphasis ms-5"><b>Student attendance Add module</b></h1>
        <marquee>This Is Student Attendance Table</marquee>
      <form className="m-5 border border-danger p-3" onSubmit={AddStudentData} >
           <div id="emailHelp" className="form-text mb-2">
            We'll never share your details with anyone else.
          </div>
        <div className="mb-3">
          <label for=" EnterName" className="form-label">
            Enter Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={student.name}
            onChange={InputChangeHandler}
          />
        </div>
        <div className="mb-3">
          <label for="course" className="form-label">
            Enter Your Course 
          </label>
          <input
            type="text"
            className="form-control"
             name="course"
             value={student.course}
             onChange={InputChangeHandler}
          />
        </div>
        <div className="mb-3">
          <label for="Contact" className="form-label">
            Contact
          </label>
          <input
            type="number"
            className="form-control"
            name="contact"
            value={student.contact}
            onChange={InputChangeHandler}
          />
        </div>
        <div className="mb-3">
          <label for="batch" className="form-label">
            Batch
          </label>
          <input
            type="text"
            className="form-control"
            name="batch"
            value={student.batch}
            onChange={InputChangeHandler}
          />
        </div>
        
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link to="/DashStudent"><button className="btn btn-danger ms-5">Back</button></Link>
      
      </form>
    </div>
  );
};

export default AddStudents;
