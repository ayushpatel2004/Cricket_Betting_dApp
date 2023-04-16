import { Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { WrapperContext } from "../context/wrappercontext";
import { useState } from 'react';
import './mycard.css'
import Close from '../container/close/close'
// import {Navbar} from "./container"

const Mycard=({team1,team2,contract,venue,date,time})=>{
    const navigate = useNavigate();
    const {onselectmatch} = useContext(WrapperContext);
    const [ButtonState, setButtonState] = useState(false);
    const onsubmit = (e) => {
        onselectmatch({team1:team1,team2:team2,contract:contract});
        // navigate('matchresult');
        setButtonState(true);
        
    }
    return (
        <div class="match-card">
            <h2>{team1} vs {team2}</h2>
            <p>Venue: {venue}</p>
            <p>Date: {date}</p>
            <p>Time: {time}</p>
            <div class="bet-toggle">
                <div className="pop-form"><Close trigger = {ButtonState} setTrigger = {setButtonState}></Close></div>
                <div className="closeMatch"><button  onClick={(e)=>onsubmit(e,{team1,team2,contract,venue,date,time})} id="winning-amount" type="button" class="active">
                    Close Match
                </button>
                </div>
            </div>
        </div>
    );
};
export default Mycard