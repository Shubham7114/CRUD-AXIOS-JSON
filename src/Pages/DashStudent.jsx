import axios from "axios";
import { useEffect, useState } from "react";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {Link} from 'react-router-dom'

const DashStudent = () => {

   const [student, setStudent] = useState([]);

   useEffect(() => {
    fetchData();
   }, []);

  // Axios Get Data From Json-Server ==========================

  const fetchData = () => {
    axios
      .get("http://localhost:5555/Student")
      .then((res) => {
        setStudent(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Axios Delet Data from Json-server ==============================

  const deletData = (id) => {
    if (window.confirm("Are you Sure Want to delet Data")) {
      axios
        .delete(`http://localhost:5555/Student/${id}`)
        .then(() => {
          alert("Data Deleted Succesfully !");
          fetchData();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return <div>
      <div>
         <h1 className="text-danger-emphasis ms-5"><b>Student Details Module</b></h1>
        <marquee>This Is Student Details Table</marquee>
        <Link to="/AddStudents"><button className="btn btn-success me-5">Add Student</button></Link>
       
      <TableContainer component={Paper} sx={{ marginLeft: 20, marginTop:5 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ backgroundColor: "black" }}>
            <TableRow>
              <TableCell align="center" sx={{ color: "white" }}>
                Sr.No
              </TableCell>
              <TableCell align="center" sx={{ color: "white" }}>
                Name
              </TableCell>
              <TableCell align="center" sx={{ color: "white" }}>
                Course
              </TableCell>
              <TableCell align="center" sx={{ color: "white" }}>
                Contact
              </TableCell>
              <TableCell align="center" sx={{ color: "white" }}>
                Batch
              </TableCell>
              <TableCell align="center" sx={{ color: "white" }}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {student.map((val, index) => (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{index+1}</TableCell>
                <TableCell align="center">{val.name}</TableCell>
                <TableCell align="center">{val.course}</TableCell>
                <TableCell align="center">{val.contact}</TableCell>
                <TableCell align="center">{val.batch}</TableCell>
                <TableCell align="center">
                      <button type="button" onClick={() => {deletData(val.id);}}className="btn btn-danger me-2 border" >
                    Delete
                    </button>
                    <Link to={`/EditStudents/${val.id}`}><button className="btn btn-primary ms-5">Edit Student</button></Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>

  </div>;
};

export default DashStudent;
