import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Form1=()=>{
    const navigate = useNavigate();
    return (
        <form>
            <label>
                Team1:
                <input required type="text" name="team1" />
            </label>
            <br></br>
            <label>
                Team2:
                <input required type="text" name="team2" />
            </label>
            <br></br>
            <label>
                Team1 Player1:
                <input required type="text" name="team1_player1" />
            </label>
            <br></br>
            <label>
                Team1 Player2:
                <input required type="text" name="team1_player2" />
            </label>
            <br></br>
            <label>
                Team1 Player3:
                <input required type="text" name="team1_player3" />
            </label>
            <br></br>
            <label>
                Team1 Player4:
                <input required type="text" name="team1_player4" />
            </label>
            <br></br>
            <label>
                Team1 Player5:
                <input required type="text" name="team1_player5" />
            </label>
            <br></br>
            <label>
                Team1 Player6:
                <input required type="text" name="team1_player6" />
            </label>
            <br></br>
            <label>
                Team1 Player7:
                <input type="text" name="team1_player7" />
            </label>
            <br></br>
            <label>
                Team1 Player8:
                <input required type="text" name="team1_player8" />
            </label>
            <br></br>
            <label>
                Team1 Player9:
                <input required type="text" name="team1_player9" />
            </label>
            <br></br>
            <label>
                Team1 Player10:
                <input required type="text" name="team1_player10" />
            </label>
            <br></br>
            <label>
                Team1 Player11:
                <input required type="text" name="team1_player11" />
            </label>
            <br></br>
            <label>
                Team2 Player1:
                <input required type="text" name="team2_player1" />
            </label>
            <br></br>
            <label>
                Team2 Player2:
                <input required type="text" name="team2_player2" />
            </label>
            <br></br>
            <label>
                Team2 Player3:
                <input required type="text" name="team2_player3" />
            </label>
            <br></br>
            <label>
                Team2 Player4:
                <input type="text" name="team2_player4" />
            </label>
            <br></br>
            <label>
                Team2 Player5:
                <input required type="text" name="team2_player5" />
            </label>
            <br></br>
            <label>
                Team2 Player6:
                <input required type="text" name="team2_player6" />
            </label>
            <br></br>
            <label>
                Team2 Player7:
                <input required type="text" name="team2_player7" />
            </label>
            <br></br>
            <label>
                Team2 Player8:
                <input required type="text" name="team2_player8" />
            </label>
            <br></br>
            <label>
                Team2 Player9:
                <input required type="text" name="team2_player9" />
            </label>
            <br></br>
            <label>
                Team2 Player10:
                <input required type="text" name="team2_player10" />
            </label>
            <br></br>
            <label>
                Team2 Player11:
                <input required type="text" name="team2_player11" />
            </label>
            <br></br>
            <input onClick={() => navigate(-1)} type="submit" value="Submit" />
        </form>
    )
}

export default Form1