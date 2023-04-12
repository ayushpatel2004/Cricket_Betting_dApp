import React,{ useContext } from 'react'
import './team.css'
import { useNavigate } from "react-router-dom";
// import React, { useContext } from 'react'
import { WrapperContext } from '../context/wrappercontext'

export default function TeamBet() {
const navigate = useNavigate();
const {selectedmatchdetails,setselectedteam} = useContext(WrapperContext);

const onsubmit = (e,team)=>{
    setselectedteam(team);
    navigate('transactionmatch');
}
  return (
    <>
    <div className="playerbet gradient__text">TEAM BET</div>
    <div className='bet'>
    <div className='list'>
    <button onClick={(e)=>onsubmit(e,selectedmatchdetails.team1)} type="button" class="btn btn-outline-secondary">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/188px-Flag_of_India.svg.png" alt="" />
            <h1 className="gradient__text">{selectedmatchdetails.team1}</h1>

            </button>
    </div>
    <div className='vs'>V/S</div>
    <div className='list'>
    <button onClick={(e)=>onsubmit(e,selectedmatchdetails.team2)} type="button" class="btn btn-outline-secondary">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/188px-Flag_of_Pakistan.svg.png" alt="" />
            <h1 className="gradient__text">{selectedmatchdetails.team2}</h1>

            </button>
    </div>
    </div>
    </>
  )
}
