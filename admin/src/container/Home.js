import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Mycard from "../components/Mycard"

const Home=()=>{
    const navigate = useNavigate();
    return (
        <div>
            <Button onClick={() => navigate('matchinput')} variant="contained">Create Match</Button>
            <Mycard/>
        </div>
    )
}

export default Home