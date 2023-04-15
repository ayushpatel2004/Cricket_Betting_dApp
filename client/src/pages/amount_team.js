import React, { useContext } from 'react'
import { WrapperContext } from '../context/wrappercontext'
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';
import "./amount.css";

const Amount_Team = (props) => {
  const navigate = useNavigate();
  const {setbetvalue,betvalue,placeteambet,selectedteam} = useContext(WrapperContext);
  const placebetteam =async (e) => {
    e.preventDefault();
    if(betvalue==0) return;
    if(selectedteam=="") return;

    console.log(betvalue);
    console.log(selectedteam);

    await placeteambet();
    navigate(-1);
  }
  const onsubmit=(e)=>{
    e.preventDefault();
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
               You are betting on : {selectedteam}
                </h1>
            </div>
            <label>

                Enter Bet Amount: 
                <input required type="numeric" name="amount" onChange={onsubmit}/>
            </label>
            <br></br>
            <input type="submit" value="Place Bet" onClick={placebetteam}/>
        </form>
        </div>
    </div>
  ):"";
}

export default Amount_Team
