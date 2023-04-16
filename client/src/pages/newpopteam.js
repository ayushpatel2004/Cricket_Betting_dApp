import React, { useContext, useEffect } from 'react'
import { WrapperContext } from '../context/wrappercontext'
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';
import "./amount.css";
import "./newpop.css";


const Newpop = (props, isOpen) => {

  const navigate = useNavigate();
  const GoBack = () =>{
    navigate(-1);
  }
  // const{betmatchhistory}= useEffect(WrapperContext);
  console.log("inside pop up");
  // console.log(betmatchhistory);
  return(props.trigger) ? (
    <div className={`popup-wrapper ${isOpen ? 'open' : ''}`}>
      <div className="popup-content">
    <div className='gradient__bg'>
        <div className='popup btn-grad height_figure'>
        <div>
            <button onClick={GoBack} className='cross-button-2'></button>
          </div>
          <div className='font_in_popup'>
          You have already placed your bet.<br/><br/>
           Bet Amount : {props.amount}<br/>
           Bet Team : {props.team}
           </div>
        </div></div>
        </div>
    </div>
  ):"";
}

export default Newpop
