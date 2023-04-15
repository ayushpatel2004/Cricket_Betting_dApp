// import { Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";
import React from "react";

const MyCard2=({team1,team2,venue,time,date,refundamount})=>{

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
                    <button className="bet_type_list btn-grad-small">{refundamount}</button>
                </ul>
            </div>
        </div>
    </div>
);
};
export default MyCard2