import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, TextField } from '@mui/material';
import GetAllStudents from '../hooks/GetAllStudents';
import { Student } from '../types/Student';
import DeleteStudentById from '../hooks/DeleteStudent';
import AlertDialogSlide from './EditStudentFormPopup';

function StudentRow(student: Student) {
  return (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell component="th" scope="row">
        { student.studentId }
      </TableCell>
      <TableCell>
        { student.lastname }, { student.name } { student.middlename }
      </TableCell>
      <TableCell>{ student.email }</TableCell>
      <TableCell>{ student.phoneNumber }</TableCell>
      <TableCell>{ student.address }</TableCell>
      <TableCell>
        <AlertDialogSlide id={student.id} studentId={student.studentId}></AlertDialogSlide>
      </TableCell>
      <TableCell>
        <Button id={ student.studentId } variant="contained" color="error" onClick={() => DeleteStudentById(student.id)}>Remove</Button>
      </TableCell>
    </TableRow>
  );
}

export default function Records() {
  const students = GetAllStudents();
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">STUDENT ID</TableCell>
            <TableCell align="center">NAME</TableCell>
            <TableCell align="center">EMAIL</TableCell>
            <TableCell align="center">PHONE NUMBER</TableCell>
            <TableCell align="center">ADDRESS</TableCell>
            <TableCell align="center">EDIT</TableCell>
            <TableCell align="center">REMOVE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            students.map((student) => {
              return (
                StudentRow(student)
              );
            })
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}