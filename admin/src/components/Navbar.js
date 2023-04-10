import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";

const Navbar=()=>{
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton color="inherit">
                    <MenuIcon/>
                </IconButton>
                <Typography>
                    LiveScore
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar