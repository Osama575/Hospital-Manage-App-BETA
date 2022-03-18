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
import { RiEditCircleLine } from 'react-icons/ri'
import { Typography } from '@mui/material';

const AllStaff = () => {
  const [staffs, setStaffs] = useState([])
  useEffect(() => {
    fetch('/fakeData.json')
      .then(res => res.json())
      .then(data => setStaffs(data.staffs))
  }, [])
  const handleDelete = (id) => {
    const makeSure = window.confirm('Are You Sure to want to delete this patient?')
    if (makeSure) {
      const newArr = staffs.filter(staff => staff.id !== id)
      setStaffs(newArr)
    }
  }
  return (
    <>
      <Typography variant='h4' sx={{ borderBottom: "1px solid #333", mb: 5 }} >All Staff</Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow >
              <TableCell sx={{ fontSize: "20px", fontWeight: "500", color: "#333" }} >Profile Pic</TableCell>
              <TableCell sx={{ fontSize: "20px", fontWeight: "500", color: "#333" }}>Name</TableCell>
              <TableCell sx={{ fontSize: "20px", fontWeight: "500", color: "#333" }} align="center">Email</TableCell>
              <TableCell sx={{ fontSize: "20px", fontWeight: "500", color: "#333" }} align="center">Role</TableCell>
              <TableCell sx={{ fontSize: "20px", fontWeight: "500", color: "#333" }} align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              staffs?.map(staff => <TableRow
                key={staff.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row"><img className='profilePic' src={staff.img} alt="" /></TableCell>
                <TableCell component="th" scope="row">
                  {staff.name}
                </TableCell>
                <TableCell align="center">{staff.email}</TableCell>
                <TableCell align="center">{staff.role}</TableCell>
                <TableCell align="center" className='icon-box'>
                  <BsCheck2Circle style={{ color: "green", cursor: "pointer" }} />
                  <FaRegTimesCircle onClick={() => handleDelete(staff.id)} style={{ color: "red", cursor: "pointer", marginLeft: "10px" }} />
                  <RiEditCircleLine style={{ color: "orange", cursor: "pointer", marginLeft: "10px" }} />
                </TableCell>
              </TableRow>)
            }
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default AllStaff;