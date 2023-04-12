import React, { useContext, useState } from "react";
import "./home.css";
import Mycard from "../components/Mycard";
import { WrapperContext } from "../context/wrappercontext";
// import {match_list} from "../containers";


const Home = () =>{
    const {matchinfolist}=useContext(WrapperContext);
    return(
        <div className="gradient__bg custom_background">
            <div>
            <h1 className="gradient__text center_align">
                Welcome to CricBet<br/><br/>
            </h1>
            <h1 className="gradient__text new_text center_align">
                ACTIVE MATCHES
            </h1>
            </div>

            <div  className="match_list_allignment">
            {
                matchinfolist.map((match,i)=>{
                    console.log(match);
                    return <Mycard key={i}{...match}/>
                })
            }
            </div>
         </div>

    );
};

export  default Home;