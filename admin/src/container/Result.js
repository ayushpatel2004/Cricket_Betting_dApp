import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Result=()=>{
    const navigate = useNavigate();
    return (
        <form>
            <label>
                Winning Team:
                <input required type="text" name="winning_team" />
            </label>
            <br></br>
            <label>
                Plaer1:
                <input required type="text" name="winning_player1" />
            </label>
            <br></br>
            <label>
                Player2:
                <input required type="text" name="winning_player2" />
            </label>
            <br></br>
            <label>
                Player3:
                <input required type="text" name="winning_player3" />
            </label>
            <br></br>
            <input onClick={() => navigate(-1)} type="submit" value="Submit" />
        </form>
    )
}

export default Result