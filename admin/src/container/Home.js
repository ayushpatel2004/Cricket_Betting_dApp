import { Button } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Mycard from "../components/Mycard"
import { WrapperContext } from "../context/wrappercontext";

const Home=()=>{
    const {connectWallet,currentAccount,matchinfolist} = useContext(WrapperContext);
    const navigate = useNavigate();
    return (
        <div>
            <Button onClick={() => navigate('matchinput')} variant="contained">Create Match</Button>
            {(!currentAccount)&&<Button onClick={connectWallet} variant="contained">Connect Wallet</Button>}
            {
                matchinfolist.map((match,i)=>{
                    
                    return <Mycard key={i}{...match}/>
                })
            }
        </div>
    )
}

export default Home