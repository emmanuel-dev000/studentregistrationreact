import { Grid } from "@mui/material";
import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "./Footer";

export default function Main() {
    const WEBSITE_NAME = "Student Registration";
    const SCHOOL_NAME = "University of Tuguegarao City";
    return (
        <Grid container justifyContent="center" alignItems="center" direction="column" minHeight="100vh">
            <Grid item>
                <Header title={WEBSITE_NAME} subtitle={SCHOOL_NAME} />
            </Grid>
            <Grid item>
                <Body />
            </Grid>
            <Grid item>
                <Footer />
            </Grid>
        </Grid>
    );
}