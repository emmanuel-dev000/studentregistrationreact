import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { Grid, TextField } from '@mui/material';
import EditStudent from '../hooks/EditStudent';
import { Student } from '../types/Student';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface EditStudentProps {
  id: number;
  studentId: string;
}

export default function EditStudentFormPopup({ id, studentId }: EditStudentProps) {
  const studentIdRef = React.useRef("");
  const studentNameRef = React.useRef("");
  const studentMiddlenameRef = React.useRef("");
  const studentLastnameRef = React.useRef("");
  const studentAddressRef = React.useRef("");
  const studentEmailRef = React.useRef("");
  const studentPhoneNumberRef = React.useRef("");

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button 
        id={ studentId } 
        variant="contained" 
        color="primary" 
        onClick = {
          () => {
              handleClickOpen();
            }          
          }
        >
          Edit
        </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        fullWidth={true}
      >
        <DialogTitle>{"Edit Student"}</DialogTitle>
        <DialogContent>
            <Grid container direction="column" alignItems="center" justifyContent="center" rowSpacing={2}>
                <Grid item>
                    <TextField label="Student ID" variant="outlined" inputRef={studentIdRef}/>
                </Grid>

                <Grid item>
                  <TextField label="Name" variant="outlined" inputRef={studentNameRef}/>
                </Grid>

                <Grid item>
                  <TextField label="Middle Name" variant="outlined" inputRef={studentMiddlenameRef}/>
                </Grid>

                <Grid item>
                  <TextField label="Lastname" variant="outlined" inputRef={studentLastnameRef}/>
                </Grid>

                <Grid item>
                  <TextField label="Email" variant="outlined" inputRef={studentEmailRef}/>
                </Grid>
                
                <Grid item>
                  <TextField label="Phone Number" variant="outlined" inputRef={studentPhoneNumberRef}/>
                </Grid>

                <Grid item>
                  <TextField label="Address" variant="outlined" inputRef={studentAddressRef}/>
                </Grid>
            </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={
            async () => {
              const x = await EditStudent(id, {
                id: id,
                studentId: studentIdRef.current.value,
                name: studentNameRef.current.value,
                middlename: studentMiddlenameRef.current.value,
                lastname: studentLastnameRef.current.value,
                address: studentAddressRef.current.value,
                email: studentEmailRef.current.value,
                phoneNumber: studentPhoneNumberRef.current.value,
              });
              handleClose();
              console.log(x);
            }            
          }>Edit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
