import React, { useContext, useState } from "react";
import "./home.css";
import Mycard from "../components/Mycard";
import { WrapperContext } from "../context/wrappercontext";
import MyCard2 from "../components/MyCard2";
import {Navbar} from "../containers/"
// import {match_list} from "../containers";


const Home = () =>{
    const {matchinfolist,completedmatchlist}=useContext(WrapperContext);
    return(
        <div className="gradient__bg custom_background">
            <Navbar/>
            <div>
            <h1 className="gradient__text new_text center_align">
                ACTIVE MATCHES
            </h1>
            </div>

            <div  className="match_list_allignment match-list">
            {
                matchinfolist.map((match,i)=>{
                    console.log(match);
                    return <Mycard key={i}{...match}/>
                })
            }
            </div>
            <h1 className="gradient__text new_text center_align">
                COMPLETED MATCHES
            </h1>
            <div  className="match_list_allignment match-list">
            {
                completedmatchlist.map((match,i)=>{
                    console.log(match);
                    return <MyCard2 key={i}{...match}/>
                })
            }
            </div>
         </div>

    );
};

export  default Home;