import React,{ useContext } from 'react'
import './team.css'
import { useNavigate } from "react-router-dom";
import { WrapperContext } from '../../context/wrappercontext';
import { Navbar } from "../../containers";
import team1 from '../../assets/team1.svg';
import team2 from '../../assets/team2.svg';

export default function TeamBet() {
const navigate = useNavigate();
const {selectedmatchdetails,setselectedteam} = useContext(WrapperContext);

const onsubmit = (e,team)=>{
    setselectedteam(team);
    navigate('transactionmatch');
}
  return (
    <>
      <Navbar/>
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
        </div>
      </div>
    </>
  )
}
