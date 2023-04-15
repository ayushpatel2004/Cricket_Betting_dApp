import React, { useContext, useState } from "react";
import "./home.css";
import Mycard from "../components/Mycard";
import { WrapperContext } from "../context/wrappercontext";
import MyCard2 from "../components/MyCard2";
import {Navbar} from "../containers/"
import Loader from "../components/Loader";
// import {match_list} from "../containers";


const Home = () =>{
    const {matchinfolist,completedmatchlist,loadingactivematch,loadingcompletedmatch}=useContext(WrapperContext);
    return(
        <div className="gradient__bg ">
            <Navbar/>
            <div>
            <h1 className="gradient__text new_text center_align gradient__text">
                ACTIVE MATCHES
            </h1>
            </div>
            { loadingactivematch?<Loader/>:
            <div  className="match_list_allignment match-list">
            {
                matchinfolist.map((match,i)=>{
                    console.log(match);
                    return <Mycard key={i}{...match}/>
                })
            }
            </div>
            }
            <h1 className="gradient__text new_text center_align">
                COMPLETED MATCHES
            </h1>
            { loadingcompletedmatch?<Loader/>:
            <div  className="match_list_allignment match-list">
            {
                completedmatchlist.map((match,i)=>{
                    console.log(match);
                    return <MyCard2 key={i}{...match}/>
                })
            }
            </div>
            }
         </div>

    );
};

export  default Home;