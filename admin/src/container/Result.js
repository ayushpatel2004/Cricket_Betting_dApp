import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { WrapperContext } from "../context/wrappercontext";

const Result=()=>{
    const navigate = useNavigate();
    const {winningteam,setwinningteam,selectedmatch,closeMatch,winningplayers,handleChangeList} = useContext(WrapperContext);
    
    const handleChange = (SelectChangeEvent) => {
        setwinningteam(SelectChangeEvent.target.value);
    }
    
    const onsubmit = async (e) => {
        const {player1,player2,player3} = winningplayers;
        // console.log(winningplayers);
        
        e.preventDefault();
        // console.log(player1);
        if(!winningteam || !player1 ||!player2||!player3) return;

        console.log("before submitting");
        await closeMatch();

        navigate(-1);
        // window.location.reload();
    }
    return (
        <form>
            <label>
                Winning Team:
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
            <input onClick={onsubmit} type="submit" value="Submit" />
        </form>
    )
}

export default Result