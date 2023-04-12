// import { Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { WrapperContext } from "../context/wrappercontext";
// import { WrapperContext } from "../context/wrappercontext";

const Mycard=({team1,team2,contract})=>{
// const navigate = useNavigate();
// const {onselectmatch} = useContext(WrapperContext);
// const onsubmit = (e) => {
//     onselectmatch({team1:team1,team2:team2,contract:contract});
//     navigate('matchresult');
// }

// const [selectedmatch,setselectedmatch] = useState(null);

const navigate = useNavigate();
const {getplayerlist,setselectedmatch,selectedmatch,setselectedmatchdetails} = useContext(WrapperContext);

// const tempFunction=async (contract)=>{
//     await setselectedmatch(contract)
// }

const onsubmitplayer = async (e) => {
    console.log(contract);
    setselectedmatch(contract);
    setselectedmatchdetails({team1:team1,team2:team2});
    // console.log(selectedmatch);
    // getplayerlist();
    navigate('playerbet');
}
const onsubmitmatch = async (e) => {
    console.log(contract);
    setselectedmatch(contract);
    setselectedmatchdetails({team1:team1,team2:team2});
    // console.log(selectedmatch);
    // getplayerlist();
    navigate('teambet');
}
return (
    <div className="only_button_pos">
        <div className="btn-grad" >
            <div className="placement_of_match_details_2">
                {team1} vs {team2}
            </div>
            {/* <div className="vertical_rule"></div> */}
            <div className="dropdown">
                <ul>
                    <button onClick={onsubmitmatch} className="bet_type_list btn-grad-small">Team Bet</button>
                    <button onClick={onsubmitplayer} className="bet_type_list btn-grad-small">Player Bet</button>
                </ul>
            </div>
        </div>
    </div>
);
};
export default Mycard