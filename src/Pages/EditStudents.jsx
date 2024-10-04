import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

const EditStudents = () => {

  const nav = useNavigate()
  const { id } = useParams()
  const [student, setStudent] = useState({ id: "", name: "", course: "", contact: "", batch: "" })

  // === getting Data In Json server==========================

  useEffect(() => {
    axios.get(`http://localhost:5555/Student/${id}`).then((res) => {
      setStudent(res.data)
    }).catch((err) => {
      console.log(err);
    })
  }, [])

  // target Edited input to Use State ==========

  const InputChangeHandler = (event) => {
    const { type, name, value } = event.target
    setStudent({ ...student, [name]: value })
  }

  // Adding Edited Data to Json Server =========
  const editStudentData = (event) => {
    event.preventDefault()
    axios.put(`http://localhost:5555/Student/${id}`, student).then(() => {
      window.alert("Data Edited Succesfully !")
      nav('/Dashstudent')
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <div>
      <form className="m-5 border border-danger p-3" onSubmit={editStudentData}>
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

        <Link to="/DashStudent">
          <button className="btn btn-danger ms-5">Back</button>
        </Link>
      </form>
    </div>
  );
};

export default EditStudents;
