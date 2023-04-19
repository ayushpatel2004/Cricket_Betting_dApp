import React, { useContext, useEffect, useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/LOGO2.svg';
import './help.css';
import { useNavigate } from "react-router-dom";
import { WrapperContext } from '../../context/wrappercontext';

const Landing = () => {
  	const [toggleMenu, setToggleMenu] = useState(false);
	const navigate = useNavigate();
  	return (
        <>
            <div className="crickbet__navbar">
                <div className="crickbet__navbar-links">
                    <div className="crickbet__navbar-links_logo">
                        <img src={logo} />
                    </div>
                    <div className="crickbet__navbar-links_container">
                        <p><a href="/home">Home</a></p>
                        <p><a href="/aboutus">About Us</a></p>
                        <p><a href="/faqs">FAQs</a></p>
                        <p><a href="/help">Help</a></p>
                    </div>
                </div>
                <div className="crickbet__navbar-menu">
                    {toggleMenu
                        ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                        :<RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
                    {toggleMenu && (
                        <div className="crickbet__navbar-menu_container scale-up-center">
                            <div className="crickbet__navbar-menu_container-links">
                                <p><a href="/home">Home</a></p>
                                <p><a href="/aboutus">About Us</a></p>
                                <p><a href="/faqs">FAQs</a></p>
                                <p><a href="/help">Help</a></p>
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
                    <h1 className="gradient__text">Need Help?</h1>
                    <p>If you have any questions or need help using our d-app, feel free to contact us or check out our GitHub page for more information.</p>
                    <p>Email: a_adeshmukh@cs.iitr.ac.in</p>
                    <p>Mobile Number: +919876543113</p>
                    <br></br>
                    <button className='github' type="button"><a href='https://github.com/ayushpatel2004/Cricket_Betting_dApp'>Github</a></button>
                </div>
            </div>
        </>
  	);
};

export default Landing;