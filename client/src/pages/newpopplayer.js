import React, { useContext, useEffect } from 'react'
import { WrapperContext } from '../context/wrappercontext'
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';
import "./amount.css";
import "./newpop.css";


const Newpop2 = (props, isOpen) => {

  const navigate = useNavigate();
  const GoBack = () =>{
    navigate(-1);
  }
  // const{betmatchhistory}= useEffect(WrapperContext);
  // console.log("inside pop up");
  // console.log(betmatchhistory);
  // props.bets.forEach(element => {
  //   console.log(element);
  // });

  // const onsubmit = (e) => {
  //   props.settrigger(false);
  // }
  return(props.trigger) ? (
    <div className={`popup-wrapper ${isOpen ? 'open' : ''}`}>
      <div className="popup-content">
    <div className='gradient__bg'>
        <div className='popup btn-grad height_figure'>
        <div>
            <button onClick={GoBack} className='cross-button-2'></button>
          </div>
          <div className='font_in_popup'>
          You have already placed {props.count} bet(s) on Players<br/><br/>
            <div>
              {
                  props.bets.map(element => {
                    // console.log(element);
                    return <div>
                      Player: {element.player}<br/>
                      Amount: {element.amount}<br/><br/>
                    </div>
                  })
              }
            </div>
          {(props.count<3)&&<button type='submit' onClick={()=> props.setTrigger(false)} className='continue_button'>Continue</button>}
           </div>
        </div></div>
        </div>
    </div>
  ):"";
}

export default Newpop2

