import React, { useContext, useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/LOGO2.svg';
import LOGO1 from '../../assets/LOGO1.svg'
import './landing.css';
import { useNavigate } from "react-router-dom";
import { WrapperContext } from '../../context/wrappercontext';

const Landing = () => {
  	const [toggleMenu, setToggleMenu] = useState(false);
	const navigate = useNavigate();

    const {connectWallet,currentAccount} = useContext(WrapperContext);

    const onsubmit = (e) =>{
        connectWallet();
        if(!currentAccount) return;
        navigate('home');
    }
  	return (
        <>
            <div className="crickbet__navbar">
                <div className="crickbet__navbar-links">
                    <div className="crickbet__navbar-links_logo">
                        <img src={logo} />
                    </div>
                    <div className="crickbet__navbar-links_container">
                        <p><a href="#wcrickbet">About Us</a></p>
                        <p><a href="/faqs">FAQs</a></p>
                        <p><a href="#help">Help</a></p>
                    </div>
                </div>
                <div className="crickbet__navbar-sign">
                    <button onClick={onsubmit} type="button">Connect to Metamask</button>
                </div>
                <div className="crickbet__navbar-menu">
                    {toggleMenu
                        ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                        :<RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
                    {toggleMenu && (
                        <div className="crickbet__navbar-menu_container scale-up-center">
                            <div className="crickbet__navbar-menu_container-links">
                                <p><a href="#home">Home</a></p>
                                <p><a href="#wcrickbet">What is CrickBet?</a></p>
                                <p><a href="#FAQs">FAQs</a></p>
                                <p><a href="#help">Help</a></p>
                            </div>
                            <div className="crickbet__navbar-menu_container-links-sign">
                                <button onClick={onsubmit} type="button">Connect to Metamask</button>
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
  	);
};

export default Landing;