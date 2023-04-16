import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import './playerCard.css';
import { WrapperContext } from '../../context/wrappercontext';
import { useState } from 'react';
import Amount_Player from '../amount_player';
import player1 from '../../assets/player1.svg';

const PlayerCard1 = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const {setselectedplayer} = useContext(WrapperContext);
    const [ButtonState, setButtonState] = useState(false);
    
    onsubmit = (e,player) => {
        setButtonState(true);
        setselectedplayer(player);
        setIsOpen(!isOpen);
    }
    return(
        <>
            <button onClick={(e)=>onsubmit(e,props.playername)} type="button" class="my-button team1_button">
                <img src={player1} alt="My Image" className='player_image'/>
                <h1 className='team1'>{props.playername}</h1>
            </button>
            <Amount_Player trigger = {ButtonState} setTrigger = {setButtonState} isOpen={isOpen}></Amount_Player>
        </>
        );
}

export default PlayerCard1