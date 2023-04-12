import React, { useContext } from 'react'
import { WrapperContext } from '../context/wrappercontext'
import { useNavigate } from 'react-router-dom';

const Amount_Team = () => {
  const navigate = useNavigate();
  const {setbetvalue,betvalue,placeteambet,selectedteam} = useContext(WrapperContext);
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
            <input type="submit" value="Submit" onClick={placebetteam} />
        </form>
    </>
  )
}

export default Amount_Team
