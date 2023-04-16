import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom";
// import React, { useContext } from 'react'
import { WrapperContext } from '../context/wrappercontext'
import "./close.css";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Loader from '../components/Loader';

const Close = (props) => {
    const navigate = useNavigate();
    const {winningteam,setwinningteam,selectedmatch,closeMatch,winningplayers,handleChangeList,loadingmatchclose} = useContext(WrapperContext);  
//     const placebetplayer =async (e) => {
//         e.preventDefault();
//     if(betvalue==0) return;
//     if(selectedplayer=="") return;

//     console.log(betvalue);
//     console.log(selectedplayer);

//     await placeplayerbet();
//     navigate(-1);
//   }
//   const onsubmit=(e)=>{
//     e.preventDefault();
//     // console.log(e.target.value);
//     setbetvalue(e.target.value);
//   }

    const handleChange = (SelectChangeEvent) => {
        setwinningteam(SelectChangeEvent.target.value);
    }

    const onsubmit = async (e) => {
        const {player1,player2,player3} = winningplayers;
        
        e.preventDefault();
        if(!winningteam || !player1 ||!player2||!player3) return;

        await closeMatch();

        navigate(-1);
    }
    return(props.trigger) ? (
    <div className='gradient__bg'>
        <div className='popup'>
        <div>
            <button onClick={()=> props.setTrigger(false)} className='cross-button'></button>
          </div>
        <form>
            <label>
                <h3>WINNING TEAM:</h3>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    onChange={handleChange}
                    >
                    <MenuItem value="">
                    <em>None</em>
                    </MenuItem>
                    <MenuItem value={selectedmatch.team1}>{selectedmatch.team1}</MenuItem>
                    <MenuItem value={selectedmatch.team2}>{selectedmatch.team2}</MenuItem>
                </Select>
                </FormControl>
            </label>
            <br></br>
            <label>
                Player1:
                <input required type="text" name="player1" onChange={(e)=>handleChangeList(e,"player1")}/>
            </label>
            <br></br>
            <label>
                Player2:
                <input required type="text" name="player2" onChange={(e)=>handleChangeList(e,"player2")}/>
            </label>
            <br></br>
            <label>
                Player3:
                <input required type="text" name="player3" onChange={(e)=>handleChangeList(e,"player3")}/>
            </label>
            <br></br>
            <input onClick={onsubmit} type="submit" value="Declare Result" />
        </form>
        {/* <form className = "btn-grad">
            <div>
            <button onClick={()=> props.setTrigger(false)} className='cross-button'></button>
            </div>
            <div>
            <h1 className='general_statement'>
                You are betting on : <br/>{}
                </h1>
            </div>
            <label>
                <div className='form_field_text'>
                Enter Bet Amount: 
                </div><br/>
                <input required type="numeric" name="amount" onChange={onsubmit} placeholder='Enter Amount' className='form_field_properties'/>
            </label>
            <br></br>
            <input type="submit" value="Place Bet" onClick={placebetplayer}/>
        </form> */}
        </div>
    </div>
    ):"";
}

export default Close
