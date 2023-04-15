import React,{ useContext } from 'react'
import './team.css'
import { useNavigate } from "react-router-dom";
import { WrapperContext } from '../../context/wrappercontext';
import { Navbar } from "../../containers";
import team1 from '../../assets/team1.svg';
import team2 from '../../assets/team2.svg';
import Amount_Team from '../amount_team';
import { useState } from 'react';
import Loader from '../../components/Loader';

export default function TeamBet() {
const navigate = useNavigate();
const {selectedmatchdetails,setselectedteam,loadingteambet} = useContext(WrapperContext);
const [ButtonState, setButtonState] = useState(false);

const onsubmit = (e,team)=>{
  setButtonState(true);
    setselectedteam(team);
    // navigate('transactionmatch');
}
  return (
    <div>
      {loadingteambet?<Loader/>:
      <div>
      <div className="playerbet">TEAM BET</div>
      <div className='bet'>
        <div className='list'>
          <button onClick={(e)=>onsubmit(e,selectedmatchdetails.team1)} type="button" class="btn btn-outline-secondary team1_button">
            <img src={team1} alt="" />
            <h1 className='team1'>{selectedmatchdetails.team1}</h1>
          </button>
        </div>
        <div className='vs'>V/S</div>
        <div className='list'>
          <button onClick={(e)=>onsubmit(e,selectedmatchdetails.team2)} type="button" class="btn btn-outline-secondary team2_button">
            <img src={team2} alt="" />
            <h1 className='team2'>{selectedmatchdetails.team2}</h1>
          </button>

          <Amount_Team trigger = {ButtonState} setTrigger = {setButtonState}></Amount_Team>

        </div>
      </div>
      </div>
      }
    </div>
  )
}
