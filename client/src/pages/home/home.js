import React, { useContext } from "react";
import "./home.css";
import CurrentMatch from "../../components/currentMatch/currentMatch";
import { WrapperContext } from "../../context/wrappercontext";
import PastMatch from "../../components/pastMatch/pastMatch";
import { Navbar } from "../../containers"
import Loader from "../../components/Loader";

const Home = () =>{
    const {matchinfolist,completedmatchlist,loadingactivematch,loadingcompletedmatch}=useContext(WrapperContext);
    return(
        <div className="gradient__bg">
            <Navbar/>
            <div>
            <h1 className="center_align">
                ACTIVE MATCHES
            </h1>
            </div>
            { loadingactivematch?<Loader/>:
            <div  className="match_list_allignment match-list">
            {
                matchinfolist.map((match,i)=>{
                    console.log(match);
                    return <CurrentMatch key={i}{...match}/>
                })
            }
            </div>
            }
            <h1 className="center_align">
                COMPLETED MATCHES
            </h1>
            { loadingcompletedmatch?<Loader/>:
            <div  className="match_list_allignment match-list">
            {
                completedmatchlist.map((match,i)=>{
                    console.log(match);
                    return <PastMatch key={i}{...match}/>
                })
            }
            </div>
            }
         </div>

    );
};

export  default Home;