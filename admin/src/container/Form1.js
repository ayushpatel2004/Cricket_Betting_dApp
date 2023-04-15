import { Button } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { WrapperContext } from "../context/wrappercontext";
import Loader from "../components/Loader";


const Form1=()=>{
    const navigate = useNavigate();
    const {createMatch,handleChange,
        handleChangePlayer1,
        handleChangePlayer2,
        formDataMatchinfo,
        formDataPlayer1info,
        formDataPlayer2info,loadingmatchcreate,setformvenueinfo,
        setformdateinfo,
        setformtimeinfo} = useContext(WrapperContext);

    const handlesubmit=async (e)=>{
        const {team1,team2} = formDataMatchinfo;

        e.preventDefault();

        console.log(formDataMatchinfo);

        const {team1_player1,team1_player2,team1_player3,team1_player4,team1_player5,team1_player6,team1_player7,team1_player8,team1_player9,team1_player10,team1_player11} = formDataPlayer1info;

        if(!team1_player1||!team1_player2||!team1_player3||!team1_player4||!team1_player5||!team1_player6||!team1_player7||!team1_player8||!team1_player9||!team1_player10||!team1_player11) return;


        const {team2_player1,team2_player2,team2_player3,team2_player4,team2_player5,team2_player6,team2_player7,team2_player8,team2_player9,team2_player10,team2_player11} = formDataPlayer2info;

        if(!team2_player1||!team2_player2||!team2_player3||!team2_player4||!team2_player5||!team2_player6||!team2_player7||!team2_player8||!team2_player9||!team2_player10||!team2_player11) return;

        if(!team1 || !team2) return;

        await createMatch();
        navigate(-1);
    }
    return (
        <div>
        {loadingmatchcreate?<Loader/>:
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
                <input required type="text" name="team1_player1" onChange={(e) => handleChangePlayer1(e, "team1_player1")}/>
            </label>
            <br></br>
            <label>
                Team1 Player2:
                <input required type="text" name="team1_player2" onChange={(e) => handleChangePlayer1(e, "team1_player2")}/>
            </label>
            <br></br>
            <label>
                Team1 Player3:
                <input required type="text" name="team1_player3" onChange={(e) => handleChangePlayer1(e, "team1_player3")}/>
            </label>
            <br></br>
            <label>
                Team1 Player4:
                <input required type="text" name="team1_player4"onChange={(e) => handleChangePlayer1(e, "team1_player4")} />
            </label>
            <br></br>
            <label>
                Team1 Player5:
                <input required type="text" name="team1_player5" onChange={(e) => handleChangePlayer1(e, "team1_player5")}/>
            </label>
            <br></br>
            <label>
                Team1 Player6:
                <input required type="text" name="team1_player6" onChange={(e) => handleChangePlayer1(e, "team1_player6")}/>
            </label>
            <br></br>
            <label>
                Team1 Player7:
                <input required type="text" name="team1_player7" onChange={(e) => handleChangePlayer1(e, "team1_player7")}/>
            </label>
            <br></br>
            <label>
                Team1 Player8:
                <input required type="text" name="team1_player8" onChange={(e) => handleChangePlayer1(e, "team1_player8")}/>
            </label>
            <br></br>
            <label>
                Team1 Player9:
                <input required type="text" name="team1_player9" onChange={(e) => handleChangePlayer1(e, "team1_player9")}/>
            </label>
            <br></br>
            <label>
                Team1 Player10:
                <input required type="text" name="team1_player10" onChange={(e) => handleChangePlayer1(e, "team1_player10")}/>
            </label>
            <br></br>
            <label>
                Team1 Player11:
                <input required type="text" name="team1_player11" onChange={(e) => handleChangePlayer1(e, "team1_player11")}/>
            </label>
            <br></br>
            <label>
                Team2 Player1:
                <input required type="text" name="team2_player1" onChange={(e) => handleChangePlayer2(e, "team2_player1")}/>
            </label>
            <br></br>
            <label>
                Team2 Player2:
                <input required type="text" name="team2_player2" onChange={(e) => handleChangePlayer2(e, "team2_player2")}/>
            </label>
            <br></br>
            <label>
                Team2 Player3:
                <input required type="text" name="team2_player3" onChange={(e) => handleChangePlayer2(e, "team2_player3")}/>
            </label>
            <br></br>
            <label>
                Team2 Player4:
                <input required type="text" name="team2_player4" onChange={(e) => handleChangePlayer2(e, "team2_player4")}/>
            </label>
            <br></br>
            <label>
                Team2 Player5:
                <input required type="text" name="team2_player5" onChange={(e) => handleChangePlayer2(e, "team2_player5")}/>
            </label>
            <br></br>
            <label>
                Team2 Player6:
                <input required type="text" name="team2_player6" onChange={(e) => handleChangePlayer2(e, "team2_player6")}/>
            </label>
            <br></br>
            <label>
                Team2 Player7:
                <input required type="text" name="team2_player7" onChange={(e) => handleChangePlayer2(e, "team2_player7")}/>
            </label>
            <br></br>
            <label>
                Team2 Player8:
                <input required type="text" name="team2_player8" onChange={(e) => handleChangePlayer2(e, "team2_player8")}/>
            </label>
            <br></br>
            <label>
                Team2 Player9:
                <input required type="text" name="team2_player9" onChange={(e) => handleChangePlayer2(e, "team2_player9")}/>
            </label>
            <br></br>
            <label>
                Team2 Player10:
                <input required type="text" name="team2_player10" onChange={(e) => handleChangePlayer2(e, "team2_player10")}/>
            </label>
            <br></br>
            <label>
                Team2 Player11:
                <input required type="text" name="team2_player11" onChange={(e) => handleChangePlayer2(e, "team2_player11")}/>
            </label>
            <br></br>
            <label>
                Venue:
                <input required type="text" name="venue" onChange={(e)=>setformvenueinfo(e.target.value)}/>
            </label>
            <br></br>
            <label>
                Date:
                <input required type="text" name="date" onChange={(e)=>setformdateinfo(e.target.value)}/>
            </label>
            <br></br>
            <label>
                Time:
                <input required type="text" name="time" onChange={(e)=>setformtimeinfo(e.target.value)}/>
            </label>
            <br></br>
            <input onClick={handlesubmit} type="submit" value="Submit" />
        </form>}
            </div>
    )
}

export default Form1