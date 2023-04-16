import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import './playerCard.css';
import { WrapperContext } from '../../context/wrappercontext';
import { useState } from 'react';
import Amount_Player from '../amount_player';
import player2 from '../../assets/player2.svg';

const PlayerCard2 = (props) => {
    const navigate = useNavigate();
    const {setselectedplayer} = useContext(WrapperContext);
    const [ButtonState, setButtonState] = useState(false);
    
     onsubmit = (e,player) => {
        setButtonState(true);
        setselectedplayer(player);
    }
    return(
        <>
            <button onClick={(e)=>onsubmit(e,props.playername)} type="button" class="my-button team2_button">
                <img src={player2} alt="My Image" className='player_image'/>
                <h1 className='team2'>{props.playername}</h1>
            </button>
            <Amount_Player trigger = {ButtonState} setTrigger = {setButtonState}></Amount_Player>
        </>
        );
}

export default PlayerCard2