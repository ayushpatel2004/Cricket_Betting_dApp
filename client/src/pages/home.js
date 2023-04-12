import React, { useState } from "react";
import "./home.css";
import {match_list} from "../containers";


const Home = () =>{
    return(
        <div className="gradient__bg custom_background">
            <div>
            <h1 className="gradient__text center_align">
                Welcome to CricBet<br/><br/>
            </h1>
            <h1 className="new_text center_align">
                ACTIVE MATCHES
            </h1>
            </div>

            <div  className="match_list_allignment">
                <div className="only_button_pos">
                <div className="btn-grad" >
                    <div className="placement_of_match_details_2">
                        India vs Australia
                    </div>
                    {/* <div className="vertical_rule"></div> */}
                    <div className="dropdown">
                <ul>
                    <li className="bet_type_list btn-grad-small">Team Bet</li>
                    <li className="bet_type_list btn-grad-small">Player Bet</li>
                </ul>
                </div>
                    </div>
</div>

<div className="only_button_pos">
                <div className="btn-grad" >
                    <div className="placement_of_match_details_2">
                        India vs Pakistan
                    </div>
                    {/* <div className="vertical_rule"></div> */}
                    <div className="dropdown">
                <ul>
                    <li className="bet_type_list btn-grad-small">Team Bet</li>
                    <li className="bet_type_list btn-grad-small">Player Bet</li>
                </ul>
                </div>
                    </div>
</div>

<div className="only_button_pos">
                <div className="btn-grad" >
                    <div className="placement_of_match_details_2">
                        India vs Sri-lanka
                    </div>
                    {/* <div className="vertical_rule"></div> */}
                    <div className="dropdown">
                <ul>
                    <li className="bet_type_list btn-grad-small">Team Bet</li>
                    <li className="bet_type_list btn-grad-small">Player Bet</li>
                </ul>
                </div>
                    </div>
</div>

<div className="only_button_pos">
                <div className="btn-grad" >
                    <div className="placement_of_match_details_2">
                        India vs Australia
                    </div>
                    {/* <div className="vertical_rule"></div> */}
                    <div className="dropdown">
                <ul>
                    <li className="bet_type_list btn-grad-small">Team Bet</li>
                    <li className="bet_type_list btn-grad-small">Player Bet</li>
                </ul>
                </div>
                    </div>
</div>

<div className="only_button_pos">
                <div className="btn-grad" >
                    <div className="placement_of_match_details_2">
                        India vs Australia
                    </div>
                    {/* <div className="vertical_rule"></div> */}
                    <div className="dropdown">
                <ul>
                    <li className="bet_type_list btn-grad-small">Team Bet</li>
                    <li className="bet_type_list btn-grad-small">Player Bet</li>
                </ul>
                </div>
                    </div>
</div>

<div className="only_button_pos">
                <div className="btn-grad" >
                    <div className="placement_of_match_details_2">
                        India vs Australia
                    </div>
                    {/* <div className="vertical_rule"></div> */}
                    <div className="dropdown">
                <ul>
                    <li className="bet_type_list btn-grad-small">Team Bet</li>
                    <li className="bet_type_list btn-grad-small">Player Bet</li>
                </ul>
                </div>
                    </div>
</div>

<div className="only_button_pos">
                <div className="btn-grad" >
                    <div className="placement_of_match_details_2">
                        India vs Australia
                    </div>
                    {/* <div className="vertical_rule"></div> */}
                    <div className="dropdown">
                <ul>
                    <li className="bet_type_list btn-grad-small">Team Bet</li>
                    <li className="bet_type_list btn-grad-small">Player Bet</li>
                </ul>
                </div>
                    </div>
</div>

            </div>
         </div>

    );
};

export  default Home;