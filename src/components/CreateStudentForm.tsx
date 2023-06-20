import { Button, Grid, TextField } from "@mui/material";
import { useRef } from "react";
import RegisterStudent from "../hooks/RegisterStudent";

export default function CreateStudentForm() {
    const studentIdRef = useRef("");
    const studentNameRef = useRef("");
    const studentMiddlenameRef = useRef("");
    const studentLastnameRef = useRef("");
    const studentAddressRef = useRef("");
    const studentEmailRef = useRef("");
    const studentPhoneNumberRef = useRef("");

    const registerStudent = async () => {
        const student = {
            studentId: studentIdRef.current.value,
            name: studentNameRef.current.value,
            middlename: studentMiddlenameRef.current.value,
            lastname: studentLastnameRef.current.value,
            address: studentAddressRef.current.value,
            email: studentEmailRef.current.value,
            phoneNumber: studentPhoneNumberRef.current.value
        };

        const savedStudentInDb = await RegisterStudent(student);
        alert("Student registered to database: " + JSON.stringify(savedStudentInDb));
    }
    return (
        <>
            <Grid container direction="column" alignItems="center" justifyContent="center" rowSpacing={5}>
                <Grid item>
                    <TextField label="Student ID" variant="outlined" fullWidth inputRef={studentIdRef}/>
                </Grid>
                <Grid item>
                    <Grid container direction="row" gap={5}>
                        <TextField label="Name" placeholder="Name" variant="outlined" inputRef={studentNameRef}/>
                        <TextField label="Middle Name" placeholder="Middle Name" variant="outlined" inputRef={studentMiddlenameRef}/>
                        <TextField label="Lastname" placeholder="Lastname" variant="outlined" inputRef={studentLastnameRef}/>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction="row" gap={5}>
                        <TextField label="Email" variant="outlined" inputRef={studentEmailRef}/>
                        <TextField label="Phone Number" variant="outlined" inputRef={studentPhoneNumberRef}/>
                    </Grid>
                </Grid>
                <Grid item>
                    <TextField label="Address" variant="outlined" inputRef={studentAddressRef}/>
                </Grid>
                <Grid item>
                    <Button color="primary" variant="contained" size="large" type="submit" onClick={registerStudent}>
                        REGISTER
                    </Button>
                </Grid>
            </Grid>
        </>
    ); 
}