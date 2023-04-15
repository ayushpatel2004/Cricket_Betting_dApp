import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import './player.css'
import { WrapperContext } from '../../context/wrappercontext';
import Loader from '../../components/Loader';

const PlayerCard=(props) => {
    const navigate = useNavigate();
    const {setselectedplayer} = useContext(WrapperContext);
    const onsubmit = (e,player) => {
        setselectedplayer(player);
        navigate('transactionplayer');
    }
    return(<>
        <button onClick={(e)=>onsubmit(e,props.playername)} type="button" class="btn btn-outline-secondary">
            <img src="https://w7.pngwing.com/pngs/981/645/png-transparent-default-profile-united-states-computer-icons-desktop-free-high-quality-person-icon-miscellaneous-silhouette-symbol.png" alt="" />
            {props.playername}
            </button>
        </>);
}

const Player = () => {

    const {playerlist1,playerlist2,selectedmatchdetails,loadingplayerdisplay} = useContext(WrapperContext);
  return (
    <div>{
        loadingplayerdisplay?<Loader/>:
        <div>
    <div className="playerbet gradient__text">PLAYER BET</div>
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
