import { Button } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { WrapperContext } from "../context/wrappercontext";

const Form1=()=>{
    const navigate = useNavigate();
    const {createMatch,handleChange,
        handleChangePlayer1,
        handleChangePlayer2,
        formDataMatchinfo,
        formDataPlayer1info,
        formDataPlayer2info} = useContext(WrapperContext);

    const handlesubmit=async (e)=>{
        const {team1,team2} = formDataMatchinfo;

        e.preventDefault();

        console.log(formDataMatchinfo);

        if(!team1 || !team2 ||formDataPlayer1info.length ==0||formDataPlayer2info.length ==0) return;

        await createMatch();
        navigate(-1);
    }
    return (
        <form>
            <label>
                Team1:
                <input required type="text" name="team1"  onChange={(e) => handleChange(e, "team1")}/>
            </label>
            <br></br>
            <label>
                Team2:
                <input required type="text" name="team2" onChange={(e) => handleChange(e, "team2")}/>
            </label>
            <br></br>
            <label>
                Team1 Player1:
                <input required type="text" name="team1_player1" onChange={handleChangePlayer1}/>
            </label>
            <br></br>
            <label>
                Team1 Player2:
                <input required type="text" name="team1_player2" onChange={handleChangePlayer1}/>
            </label>
            <br></br>
            <label>
                Team1 Player3:
                <input required type="text" name="team1_player3" onChange={handleChangePlayer1}/>
            </label>
            <br></br>
            <label>
                Team1 Player4:
                <input required type="text" name="team1_player4"onChange={handleChangePlayer1} />
            </label>
            <br></br>
            <label>
                Team1 Player5:
                <input required type="text" name="team1_player5" onChange={handleChangePlayer1}/>
            </label>
            <br></br>
            <label>
                Team1 Player6:
                <input required type="text" name="team1_player6" onChange={handleChangePlayer1}/>
            </label>
            <br></br>
            <label>
                Team1 Player7:
                <input required type="text" name="team1_player7" onChange={handleChangePlayer1}/>
            </label>
            <br></br>
            <label>
                Team1 Player8:
                <input required type="text" name="team1_player8" onChange={handleChangePlayer1}/>
            </label>
            <br></br>
            <label>
                Team1 Player9:
                <input required type="text" name="team1_player9" onChange={handleChangePlayer1}/>
            </label>
            <br></br>
            <label>
                Team1 Player10:
                <input required type="text" name="team1_player10" onChange={handleChangePlayer1}/>
            </label>
            <br></br>
            <label>
                Team1 Player11:
                <input required type="text" name="team1_player11" onChange={handleChangePlayer1}/>
            </label>
            <br></br>
            <label>
                Team2 Player1:
                <input required type="text" name="team2_player1" onChange={handleChangePlayer2}/>
            </label>
            <br></br>
            <label>
                Team2 Player2:
                <input required type="text" name="team2_player2" onChange={handleChangePlayer2}/>
            </label>
            <br></br>
            <label>
                Team2 Player3:
                <input required type="text" name="team2_player3" onChange={handleChangePlayer2}/>
            </label>
            <br></br>
            <label>
                Team2 Player4:
                <input required type="text" name="team2_player4" onChange={handleChangePlayer2}/>
            </label>
            <br></br>
            <label>
                Team2 Player5:
                <input required type="text" name="team2_player5" onChange={handleChangePlayer2}/>
            </label>
            <br></br>
            <label>
                Team2 Player6:
                <input required type="text" name="team2_player6" onChange={handleChangePlayer2}/>
            </label>
            <br></br>
            <label>
                Team2 Player7:
                <input required type="text" name="team2_player7" onChange={handleChangePlayer2}/>
            </label>
            <br></br>
            <label>
                Team2 Player8:
                <input required type="text" name="team2_player8" onChange={handleChangePlayer2}/>
            </label>
            <br></br>
            <label>
                Team2 Player9:
                <input required type="text" name="team2_player9" onChange={handleChangePlayer2}/>
            </label>
            <br></br>
            <label>
                Team2 Player10:
                <input required type="text" name="team2_player10" onChange={handleChangePlayer2}/>
            </label>
            <br></br>
            <label>
                Team2 Player11:
                <input required type="text" name="team2_player11" onChange={handleChangePlayer2}/>
            </label>
            <br></br>
            <input onClick={handlesubmit} type="submit" value="Submit" />
        </form>
    )
}

export default Form1