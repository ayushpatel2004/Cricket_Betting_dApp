import React from 'react';
import './header.css';

const Header = () => {
    return(
        <div className="crickbet__header section__padding" id="home">
            <div className="crickbet__header-content">
                <h1 className="gradient__text">Ethereum-based cricket-betting dApp</h1>
                <p>The DApp is a decentralized betting platform that allows users to place bets on upcoming sports matches using cryptocurrencies. It features a unique prize pool distribution algorithm that ensures fair and transparent payouts to winning users.</p>
            </div>
            <div className="crickbet__header-image">
                <img src="/assests/LOGO.png" />
            </div>
        </div>
    );
};

export default Header;