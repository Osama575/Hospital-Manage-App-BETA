import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { BsCheck2Circle } from 'react-icons/bs'
import { FaRegTimesCircle } from 'react-icons/fa'
import { Typography } from '@mui/material';

const AllPatient = () => {
  const [patients, setPatients] = useState([])
  useEffect(() => {
    fetch('/fakeData.json')
      .then(res => res.json())
      .then(data => setPatients(data.patients))
  }, [])
  const handleDelete = (id) => {
    const makeSure = window.confirm('Are You Sure to want to delete this patient?')
    if (makeSure) {
      const newArr = patients.filter(patient => patient.id !== id)
      setPatients(newArr)
    }
  }
  return (
    <>
      <Typography variant='h4' sx={{ borderBottom: "1px solid #333", mb: 5 }} >All Patient</Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow >
              <TableCell sx={{ fontSize: "20px", fontWeight: "500", color: "#333" }}>Name</TableCell>
              <TableCell sx={{ fontSize: "20px", fontWeight: "500", color: "#333" }} align="center">Diseases</TableCell>
              <TableCell sx={{ fontSize: "20px", fontWeight: "500", color: "#333" }} align="center">Date</TableCell>
              <TableCell sx={{ fontSize: "20px", fontWeight: "500", color: "#333" }} align="center">Status</TableCell>
              <TableCell sx={{ fontSize: "20px", fontWeight: "500", color: "#333" }} align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              patients.map(patient => <TableRow
                key={patient.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {patient.name}
                </TableCell>
                <TableCell align="center">{patient.diseases}</TableCell>
                <TableCell align="center">{patient.date}</TableCell>
                <TableCell align="center">{patient.status}</TableCell>
                <TableCell align="center" className='icon-box'>
                  <BsCheck2Circle style={{ color: "green", cursor: "pointer" }} />
                  <FaRegTimesCircle onClick={() => handleDelete(patient.id)} style={{ color: "red", cursor: "pointer", marginLeft: "10px" }} />
                </TableCell>
              </TableRow>)
            }
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default AllPatient;