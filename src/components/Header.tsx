import { AppBar, Typography, Toolbar, Box, Grid, FormControl, Input, InputLabel, TextField } from "@mui/material";
import React from "react";
import CreateStudentForm from "./CreateStudentForm";

interface HeaderProps {
    title: string;
    subtitle: string;
}

export default function Header(props: HeaderProps) {
    return (
        <React.Fragment>
            <AppBar position="static">
                <Toolbar>
                    <Grid container justifyContent="center" alignItems="center" direction="column" minHeight="50vh" spacing={5}>
                        <Grid item>
                            <Typography variant="h1" textAlign="center" paddingTop={10} gutterBottom>
                                { props.title.toLocaleUpperCase() }
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h5" textAlign="center" gutterBottom>
                                { props.subtitle.toLocaleUpperCase() }
                            </Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}