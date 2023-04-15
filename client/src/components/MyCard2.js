// import { Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import './myCard2.css';

const MyCard2=({team1,team2,venue,time,date,refundamount})=>{

return (
    <div class="match-card">
        <h2>{team1} vs {team2}</h2>
        <p>Venue: {venue}</p>
        <p>Date: {date}</p>
        <p>Time: {time}</p>
        <div class="bet-toggle">
            <button id="winning-amount" class="active">Winning amount: {refundamount}</button>
        </div>
    </div>
);
};
export default MyCard2