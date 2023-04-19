import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Mycard from "../../components/Mycard"
import { WrapperContext } from "../../context/wrappercontext";
import './home.css'
import Loader from "../../components/Loader";
import MyCard2 from "../../components/pastMatch";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/LOGO2.svg';
import LOGO1 from '../../assets/LOGO1.svg';


const Home=()=>{
    const [toggleMenu, setToggleMenu] = useState(false);
    const {connectWallet,currentAccount,matchinfolist,loadingactivematch,loadingmatchcreate,loadingmatchclose,completedmatchlist,loadingcompletedmatch} = useContext(WrapperContext);
    const navigate = useNavigate();
    return (
        <div className="gradient__bg">
            
            {(!currentAccount) && 
                <>
                <div className="crickbet__navbar">
                    <div className="crickbet__navbar-links">
                        <div className="crickbet__navbar-links_logo">
                            <img src={logo} />
                        </div>
                        <div className="crickbet__navbar-links_container">
                            <p><a>Admin Dashboard</a></p>
                        </div>
                    </div>
                    <div className="crickbet__navbar-sign">
                        <button onClick={connectWallet} type="button">Connect to Metamask</button>
                    </div>
                    <div className="crickbet__navbar-menu">
                        {toggleMenu
                            ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                            :<RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
                        {toggleMenu && (
                            <div className="crickbet__navbar-menu_container scale-up-center">
                                <div className="crickbet__navbar-menu_container-links-sign">
                                    <button onClick={connectWallet} type="button">Connect to Metamask</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="crickbet__header section__padding" id="home">
                    <div className="crickbet__header-content">
                        <h1 className="gradient__text">Ethereum-based cricket-betting dApp</h1>
                        <p>The DApp is a decentralized betting platform that allows users to place bets on upcoming sports matches using cryptocurrencies. It features a unique prize pool distribution algorithm that ensures fair and transparent payouts to winning users.</p>
                    </div>
                    <div className="crickbet__header-image">
                        <img src={LOGO1} />
                    </div>
                </div>
            </>
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