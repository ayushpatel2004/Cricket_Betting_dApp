import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom";
// import React, { useContext } from 'react'
import { WrapperContext } from '../../context/wrappercontext'
import "./close.css";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Loader from '../../components/Loader';

const Close = (props) => {
    const navigate = useNavigate();
    const {winningteam,setwinningteam,selectedmatch,closeMatch,winningplayers,handleChangeList,loadingmatchclose} = useContext(WrapperContext);  

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
            <form className='btn-grad'>
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
                    <input required type="text" className='input_field' name="player1" onChange={(e)=>handleChangeList(e,"player1")}/>
                </label>
                <br></br>
                <label>
                    Player2:
                    <input required type="text" className='input_field' name="player2" onChange={(e)=>handleChangeList(e,"player2")}/>
                </label>
                <br></br>
                <label>
                    Player3:
                    <input required type="text" className='input_field' name="player3" onChange={(e)=>handleChangeList(e,"player3")}/>
                </label>
                <br></br>
                <input onClick={onsubmit} type="submit" className='input_field' value="Declare Result" />
            </form>
        </div>
    </div>
    ):"";
}

export default Close
