import { Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { WrapperContext } from "../context/wrappercontext";
import './mycard.css'
// import {Navbar} from "./container"

const Mycard=({team1,team2,contract})=>{
const navigate = useNavigate();
const {onselectmatch} = useContext(WrapperContext);
const onsubmit = (e) => {
    onselectmatch({team1:team1,team2:team2,contract:contract});
    navigate('matchresult');
}
return (
    <div class="match-card">
        <h2>{team1} vs {team2}</h2>
        {/* <p>Venue: {venue}</p>
        <p>Date: {date}</p>
        <p>Time: {time}</p> */}
        <div class="bet-toggle">
            <button onClick={onsubmit} id="winning-amount" class="active">Close Match</button>
        </div>
    </div>
);
};
export default Mycard