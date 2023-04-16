import { Button } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Mycard from "../../components/Mycard"
import { WrapperContext } from "../../context/wrappercontext";
import './home.css'
import Loader from "../../components/Loader";
import MyCard2 from "../../components/pastMatch";

const Home=()=>{
    const {connectWallet,currentAccount,matchinfolist,loadingactivematch,loadingmatchcreate,loadingmatchclose,completedmatchlist,loadingcompletedmatch} = useContext(WrapperContext);
    const navigate = useNavigate();
    return (
        <div className="gradient__bg">
            
            {(!currentAccount) && 
                <Button onClick={connectWallet} variant="contained">Connect Wallet</Button>
            }

            {(currentAccount)&&<div>
            <div className="list">
                <div className="ongoing">ONGOING MATCHES</div>
                {loadingactivematch||loadingmatchclose||loadingmatchcreate?<Loader/>:
                <div className="match-list">
                    {
                        matchinfolist.map((match,i)=>{
                            return <Mycard key={i}{...match}/>
                        })
                    }
                </div>}
            </div>

            
            <div className="createMatch"><button className="create-match"  onClick={() => navigate('matchinput')} variant="contained">Create Match</button></div>
            <div className="list">
                <div className="ongoing">COMPLETED MATCHES</div>
                {loadingcompletedmatch||loadingmatchclose||loadingmatchcreate?<Loader/>:
                <div className="match-list">
                    {
                        completedmatchlist.map((match,i)=>{
                            return <MyCard2 key={i}{...match}/>
                        })
                    }
                </div>}
            </div>
            </div>}
        </div>
    )
}

export default Home