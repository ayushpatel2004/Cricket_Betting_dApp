import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import './player.css';
import { WrapperContext } from '../../context/wrappercontext';
import Loader from '../../components/Loader';
import { useState } from 'react';
import Amount_Player from '../amount_player';
import { Navbar } from '../../containers';
import PlayerCard from './PlayerCard'

const Player = () => {

    const {playerlist1,playerlist2,selectedmatchdetails,loadingplayerdisplay,loadingplayerbet} = useContext(WrapperContext);
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
                                return <PlayerCard playername={player}/>
                            })}
                        </div>
                    </div>
                    <div className='vs'>V/S</div>
                    <div className='list'>
                        <h1 className="gradient__text">{selectedmatchdetails.team2}</h1>
                        <div className='box'>
                            {playerlist2.map((player)=>{
                                return <PlayerCard playername={player}/>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        }
    </div>
  )
}

export default Player
