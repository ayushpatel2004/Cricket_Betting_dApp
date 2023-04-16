import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import './player.css';
import { WrapperContext } from '../../context/wrappercontext';
import Loader from '../../components/Loader';
import { useState } from 'react';
import Amount_Player from '../amount_player';
import { Navbar } from '../../containers';
import PlayerCard1 from './PlayerCard1'
import PlayerCard2 from './PlayerCard2'
import Newpop2 from '../newpopplayer';

const Player = () => {

    const [isOpen, setIsOpen] = useState(false);
    const {playerlist1,playerlist2,selectedmatchdetails,loadingplayerdisplay,loadingplayerbet,betplayercount,betplayerhistory,ButtonState3,setButtonState3} = useContext(WrapperContext);
    // console.log(betplayerhistory);
    const oncontinue = (e) => {
        setButtonState3(false);
    }
  return (
    <div>
        {
            loadingplayerdisplay||loadingplayerbet?<Loader/>:
            <div>
                
                <Navbar/>
                <div className="playerbet">PLAYER BET</div>
                <div className='bet'>
                    <div className='list'>
                        <h1 className="gradient__text">{selectedmatchdetails.team1}</h1>
                        <div className='box'>
                            {playerlist1.map((player)=>{
                                return <PlayerCard1 playername={player}/>
                            })}
                        </div>
                    </div>
                    <div className='vs'>V/S</div>
                    <div className='list'>
                        <h1 className="gradient__text">{selectedmatchdetails.team2}</h1>
                        <div className='box'>
                            {playerlist2.map((player)=>{
                                return <PlayerCard2 playername={player}/>
                            })}
                        </div>
                    </div>
                </div>

                <Newpop2 trigger = {ButtonState3} bets={betplayerhistory} count={betplayercount} setTrigger = {setButtonState3} isOpen={isOpen}></Newpop2>
            </div>
        }
    </div>
  )
}

export default Player
