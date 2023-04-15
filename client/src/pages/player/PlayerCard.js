import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import './playerCard.css';
import { WrapperContext } from '../../context/wrappercontext';
import { useState } from 'react';
import Amount_Player from '../amount_player';

const PlayerCard = (props) => {
    const navigate = useNavigate();
    const {setselectedplayer} = useContext(WrapperContext);
    const [ButtonState, setButtonState] = useState(false);
    
     onsubmit = (e,player) => {
        setButtonState(true);
        setselectedplayer(player);
    }
    return(
        <>
            <button onClick={(e)=>onsubmit(e,props.playername)} type="button" class="my-button">
                <img src="https://w7.pngwing.com/pngs/981/645/png-transparent-default-profile-united-states-computer-icons-desktop-free-high-quality-person-icon-miscellaneous-silhouette-symbol.png" alt="My Image"/>
                <h1>{props.playername}</h1>
            </button>
            <Amount_Player trigger = {ButtonState} setTrigger = {setButtonState}></Amount_Player>
        </>
        );
}

export default PlayerCard