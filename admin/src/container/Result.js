import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Form1=()=>{
    const navigate = useNavigate();
    return (
        <form>
            <label>
                Winning Team:
                <input type="text" name="team1" />
            </label>
            <br></br>
            <label>
                Plaer1:
                <input type="text" name="team2" />
            </label>
            <br></br>
            <label>
                Player2:
                <input type="text" name="team1_player1" />
            </label>
            <br></br>
            <label>
                Player3:
                <input type="text" name="team1_player2" />
            </label>
            <br></br>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default Form1