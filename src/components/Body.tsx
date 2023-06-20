import { Grid } from "@mui/material";
import CreateStudentForm from "./CreateStudentForm";
import Records from "./StudentRecords";

export default function Body() {
    return(
        <Grid container justifyContent="center" alignItems="center" direction="column" minHeight="100vh" spacing={5} paddingY={5}>
            <Grid item marginY={10}>
                <CreateStudentForm />
            </Grid>
            <Grid item>
                <Records />
            </Grid>
        </Grid>
    );
}