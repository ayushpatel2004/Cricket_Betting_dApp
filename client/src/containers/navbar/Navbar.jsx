import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  	const [toggleMenu, setToggleMenu] = useState(false);
	const navigate = useNavigate();
  	return (
		<div className="crickbet__navbar">
			<div className="crickbet__navbar-links">
				<div className="crickbet__navbar-links_logo">
					<img src={logo} />
				</div>
				<div className="crickbet__navbar-links_container">
					<p><a href="#home">Home</a></p>
					<p><a href="#wcrickbet">What is CrickBet?</a></p>
					<p><a href="#FAQs">FAQs</a></p>
					<p><a href="#help">Help</a></p>
				</div>
			</div>
			<div className="crickbet__navbar-sign">
				<button type="button">Connect to Metamask</button>
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
							<button type="button">Connect to Metamask</button>
						</div>
					</div>
				)}
			</div>
		</div>
  	);
};

export default Navbar;