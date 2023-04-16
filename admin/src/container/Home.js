import { Button } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Mycard from "../components/Mycard"
import { WrapperContext } from "../context/wrappercontext";
import './home.css'

const Home=()=>{
    const {connectWallet,currentAccount,matchinfolist} = useContext(WrapperContext);
    const navigate = useNavigate();
    return (
        <div className="gradient__bg">
            
            {(!currentAccount) && 
                <Button onClick={connectWallet} variant="contained">Connect Wallet</Button>
            }

            <div>
            <div className="list">
                <div className="ongoing">ONGOING MATCHES</div>
                <div className="match-list">
                    {
                        matchinfolist.map((match,i)=>{
                            return <Mycard key={i}{...match}/>
                        })
                    }
                </div>
            </div>
            
            <div className="createMatch"><button className="create-match"  onClick={() => navigate('matchinput')} variant="contained">Create Match</button></div>
            </div>
        </div>
    )
}

export default Home