import { Button } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { WrapperContext } from "../context/wrappercontext";
import './form1.css';
import Navbar from "./navbar/Navbar";

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
        // const playername1 = formDataPlayer1info.map((player)=>c);
        // console.log(formDataPlayer2info);
        

        // console.log(playerlist1);

        // const playerlist1=[];

        const {team1_player1,team1_player2,team1_player3,team1_player4,team1_player5,team1_player6,team1_player7,team1_player8,team1_player9,team1_player10,team1_player11} = formDataPlayer1info;

        if(!team1_player1||!team1_player2||!team1_player3||!team1_player4||!team1_player5||!team1_player6||!team1_player7||!team1_player8||!team1_player9||!team1_player10||!team1_player11) return;


        const {team2_player1,team2_player2,team2_player3,team2_player4,team2_player5,team2_player6,team2_player7,team2_player8,team2_player9,team2_player10,team2_player11} = formDataPlayer2info;

        if(!team2_player1||!team2_player2||!team2_player3||!team2_player4||!team2_player5||!team2_player6||!team2_player7||!team2_player8||!team2_player9||!team2_player10||!team2_player11) return;

        if(!team1 || !team2) return;

        await createMatch();
        navigate(-1);
    }
    return (
        <div className="gradient__bg match_details " >
            <h1 className="">Enter Match Details</h1>
        <form className="form match-card1 ">
        <div className="form1">
            <div className="team1 team">
            <label>
                
                <input required type="text" name="team1" placeholder="Enter TEAM 1" onChange={(e) => handleChange(e, "team1")}/>
            </label>
            <br></br>
            <label>
                <input required type="text" name="team1_player1" placeholder="Enter Player 1" onChange={(e) => handleChangePlayer1(e, "team1_player1")}/>
            </label>
            <br></br>
            <label>
                <input required type="text" name="team1_player2"  placeholder="Enter Player 2" onChange={(e) => handleChangePlayer1(e, "team1_player2")}/>
            </label>
            <br></br>
            <label>
                <input required type="text" name="team1_player3" placeholder="Enter Player 3" onChange={(e) => handleChangePlayer1(e, "team1_player3")}/>
            </label>
            <br></br>
            <label>
                <input required type="text" name="team1_player4" placeholder="Enter Player 4" onChange={(e) => handleChangePlayer1(e, "team1_player4")} />
            </label>
            <br></br>
            <label>
                <input required type="text" name="team1_player5" placeholder="Enter Player 5" onChange={(e) => handleChangePlayer1(e, "team1_player5")}/>
            </label>
            <br></br>
            <label>
                <input required type="text" name="team1_player6" placeholder="Enter Player 6" onChange={(e) => handleChangePlayer1(e, "team1_player6")}/>
            </label>
            <br></br>
            <label>
                <input required type="text" name="team1_player7" placeholder="Enter Player 7" onChange={(e) => handleChangePlayer1(e, "team1_player7")}/>
            </label>
            <br></br>
            <label>
                <input required type="text" name="team1_player8" placeholder="Enter Player 8" onChange={(e) => handleChangePlayer1(e, "team1_player8")}/>
            </label>
            <br></br>
            <label>
                <input required type="text" name="team1_player9" placeholder="Enter Player 9" onChange={(e) => handleChangePlayer1(e, "team1_player9")}/>
            </label>
            <br></br>
            <label>
                <input required type="text" name="team1_player10" placeholder="Enter Player 10" onChange={(e) => handleChangePlayer1(e, "team1_player10")}/>
            </label>
            <br></br>
            <label>
                <input required type="text" name="team1_player11" placeholder="Enter Player 11" onChange={(e) => handleChangePlayer1(e, "team1_player11")}/>
            </label>
            <br></br>
            </div>
            <div className="team2 team">
            <label >          
                <input required type="text" name="team2" placeholder="Enter TEAM 2" onChange={(e) => handleChange(e, "team2")}/>
            </label>
            <br></br>
            <label>
                <input required type="text" name="team2_player1" placeholder="Enter Player 1" onChange={(e) => handleChangePlayer2(e, "team2_player1")}/>
            </label>
            <br></br>
            <label>
                <input required type="text" name="team2_player2" placeholder="Enter Player 2" onChange={(e) => handleChangePlayer2(e, "team2_player2")}/>
            </label>
            <br></br>
            <label>
                <input required type="text" name="team2_player3" placeholder="Enter Player 3" onChange={(e) => handleChangePlayer2(e, "team2_player3")}/>
            </label>
            <br></br>
            <label>
                <input required type="text" name="team2_player4" placeholder="Enter Player 4" onChange={(e) => handleChangePlayer2(e, "team2_player4")}/>
            </label>
            <br></br>
            <label>
                <input required type="text" name="team2_player5" placeholder="Enter Player 5" onChange={(e) => handleChangePlayer2(e, "team2_player5")}/>
            </label>
            <br></br>
            <label>
                <input required type="text" name="team2_player6" placeholder="Enter Player 6" onChange={(e) => handleChangePlayer2(e, "team2_player6")}/>
            </label>
            <br></br>
            <label>
                <input required type="text" name="team2_player7" placeholder="Enter Player 7" onChange={(e) => handleChangePlayer2(e, "team2_player7")}/>
            </label>
            <br></br>
            <label>
                <input required type="text" name="team2_player8" placeholder="Enter Player 8" onChange={(e) => handleChangePlayer2(e, "team2_player8")}/>
            </label>
            <br></br>
            <label>
                <input required type="text" name="team2_player9" placeholder="Enter Player 9" onChange={(e) => handleChangePlayer2(e, "team2_player9")}/>
            </label>
            <br></br>
            <label>
                <input required type="text" name="team2_player10" placeholder="Enter Player 10" onChange={(e) => handleChangePlayer2(e, "team2_player10")}/>
            </label>
            <br></br>
            <label>
                <input required type="text" name="team2_player11" placeholder="Enter Player 11" onChange={(e) => handleChangePlayer2(e, "team2_player11")}/>
            </label>
            <br></br>
            
            </div>
            
            </div>
            <div>
            <label>
                <input required type="text" name="venue" placeholder="Enter Venue" onChange={(e)=>setformvenueinfo(e.target.value)}/>
            </label>
            <br></br>
            <label>
                <input required type="text" name="date" placeholder="Enter Date" onChange={(e)=>setformdateinfo(e.target.value)}/>
            </label>
            <br></br>
            <label>
                <input required type="text" name="time" placeholder="Enter Time" onChange={(e)=>setformtimeinfo(e.target.value)}/>
            </label>
            <br></br>
            </div>
            <input onClick={handlesubmit} type="submit" className="submit" value="Submit" />
            
        </form>
        </div>
    )
}

export default Form1