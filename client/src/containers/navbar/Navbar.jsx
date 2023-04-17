import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/LOGO2.svg';
import './navbar.css';

const Navbar = () => {
  	const [toggleMenu, setToggleMenu] = useState(false);
  	return (
		<div className="crickbet__navbar">
                <div className="crickbet__navbar-links">
                    <div className="crickbet__navbar-links_logo">
                        <img src={logo} />
                    </div>
                    <div className="crickbet__navbar-links_container">
                        <p><a href="/home">Home</a></p>
                        <p><a href="/aboutus">About Us</a></p>
                        <p><a href="/faqs">FAQs</a></p>
                        <p><a href="#help">Help</a></p>
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
                                <p><a href="#help">Help</a></p>
                            </div>
                            <div className="crickbet__navbar-menu_container-links-sign">
                                <button onClick={onsubmit} type="button">Connect to Metamask</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
  	);
};

export default Navbar;