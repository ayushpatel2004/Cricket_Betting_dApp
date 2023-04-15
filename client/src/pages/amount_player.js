import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { WrapperContext } from '../context/wrappercontext'
import Loader from '../components/Loader';

const Amount_Player = () => {
  const navigate = useNavigate();
  const {setbetvalue,betvalue,placeplayerbet,selectedplayer,loadingplayerbet,} = useContext(WrapperContext);
  const placebetplayer =async (e) => {
    e.preventDefault();
    if(betvalue==0) return;
    if(selectedplayer=="") return;

    console.log(betvalue);
    console.log(selectedplayer);

    await placeplayerbet();
    navigate(-2);
  }
  const onsubmit=(e)=>{
    e.preventDefault();
    setbetvalue(e.target.value);
  }
  return (
    <div>{
      loadingplayerbet?<Loader/>:
        <form>
            <label>
                Amount:
                <input required type="numeric" name="amount" onChange={onsubmit}/>
            </label>
            <br></br>
            <input type="submit" value="Submit" onClick={placebetplayer}/>
        </form>
    }
    </div>
  )
}

export default Amount_Player