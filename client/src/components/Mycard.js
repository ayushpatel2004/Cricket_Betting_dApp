// import { Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { WrapperContext } from "../context/wrappercontext";

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
    // console.log(contract);
    setselectedmatch(contract);
    setselectedmatchdetails({team1:team1,team2:team2});
    navigate('teambet');
}
return (
    <div className="only_button_pos">
        <div className="btn-grad match-card" >
            <div className="placement_of_match_details_2">
                {team1} vs {team2}
            </div>
            <div>
                <ul>
                    Venue: {venue}
                </ul>
                <ul>
                    Time: {time}
                </ul>
                <ul>
                    Date: {date}
                </ul>
            </div>
            <div className="dropdown">
                <ul>
                    <button onClick={onsubmitmatch} className="bet_type_list btn-grad-small ">Team Bet</button>
                    <button onClick={onsubmitplayer} className="bet_type_list btn-grad-small">Player Bet</button>
                </ul>
            </div>
        </div>
    </div>
);
};
export default Mycard