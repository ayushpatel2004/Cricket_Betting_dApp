import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom";
// import React, { useContext } from 'react'
import { WrapperContext } from '../context/wrappercontext'

const Amount_Player = () => {
  const navigate = useNavigate();
  const {setbetvalue,betvalue,placeplayerbet,selectedplayer} = useContext(WrapperContext);
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
    // console.log(e.target.value);
    setbetvalue(e.target.value);
  }
  return (
    <>
        <form>
            <label>
                Amount:
                <input required type="numeric" name="amount" onChange={onsubmit}/>
            </label>
            <br></br>
            <input type="submit" value="Submit" onClick={placebetplayer}/>
        </form>
    </>
  )
}

export default Amount_Player
