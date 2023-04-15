import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom";
// import React, { useContext } from 'react'
import { WrapperContext } from '../context/wrappercontext'
import Loader from '../components/Loader';
import "./amount.css";

const Amount_Player = (props) => {
  const navigate = useNavigate();
  const {setbetvalue,betvalue,placeplayerbet,selectedplayer,loadingplayerbet} = useContext(WrapperContext);
  const placebetplayer =async (e) => {
        e.preventDefault();
    if(betvalue==0) return;
    if(selectedplayer=="") return;

    console.log(betvalue);
    console.log(selectedplayer);

    await placeplayerbet();
    navigate(-1);
  }
  const onsubmit=(e)=>{
    e.preventDefault();
    // console.log(e.target.value);
    setbetvalue(e.target.value);
  }
  return(props.trigger) ? (
    <div className='gradient__bg'>
      <div className='popup'>
        <form className = "btn-grad">
          <div>
            <button onClick={()=> props.setTrigger(false)}>Close</button>
          </div>
          <div>
            <h1 className='general_statement'>
               You are betting on : {selectedplayer}
                </h1>
            </div>
            <label>
                Enter Bet Amount: 
                <input required type="numeric" name="amount" onChange={onsubmit}/>
            </label>
            <br></br>
            <input type="submit" value="Place Bet" onClick={placebetplayer}/>
        </form>
        </div>
    </div>
  ):"";
}

export default Amount_Player
