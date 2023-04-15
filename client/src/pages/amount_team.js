import React, { useContext } from 'react'
import { WrapperContext } from '../context/wrappercontext'
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';

const Amount_Team = () => {
  const navigate = useNavigate();
  const {setbetvalue,betvalue,placeteambet,selectedteam,loadingteambet} = useContext(WrapperContext);
  const placebetteam =async (e) => {
    e.preventDefault();
    if(betvalue==0) return;
    if(selectedteam=="") return;

    console.log(betvalue);
    console.log(selectedteam);

    await placeteambet();
    navigate(-2);
  }
  const onsubmit=(e)=>{
    e.preventDefault();
    setbetvalue(e.target.value);
  }
  return (
    <div>
      {
        loadingteambet?<Loader/>:
        <form>
            <label>
                Amount:
                <input required type="numeric" name="amount" onChange={onsubmit}/>
            </label>
            <br></br>
            <input type="submit" value="Submit" onClick={placebetteam} />
        </form>
      } 
    </div>
  )
}

export default Amount_Team