import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { WrapperContext } from "../../context/wrappercontext";
import './currentMatch.css';

const Mycard=({team1,team2,venue,time,date,contract})=>{

const navigate = useNavigate();
const {selectedmatch,setselectedmatch,setselectedmatchdetails,setloadingplayerdisplay} = useContext(WrapperContext);
const onsubmitplayer = async (e) => {
    if(selectedmatch!=contract){
    setloadingplayerdisplay(true);
    setselectedmatch(contract);
    setselectedmatchdetails({team1:team1,team2:team2});}
    navigate('playerbet');
}
const onsubmitmatch = async (e) => {
    setselectedmatch(contract);
    setselectedmatchdetails({team1:team1,team2:team2});
    navigate('teambet');
}
return (
    <div class="match-card">
        <h2>{team1} vs {team2}</h2>
        <p>Venue: {venue}</p>
        <p>Date: {date}</p>
        <p>Time: {time}</p>
        <div class="bet-toggle">
            <button onClick={onsubmitmatch} id="player-bet" class="active">Player Bet</button>
            <button onClick={onsubmitplayer} id="team-bet" class="active">Team Bet</button>
        </div>
    </div>
);
};
export default Mycard