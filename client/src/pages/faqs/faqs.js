import "./faqs.css";
import React, { useState } from 'react';
import { Navbar } from '../../containers';
import { IoIosArrowDown } from 'react-icons/io';


function FAQs() {
  const [isDisplayOpen1, setIsDisplayOpen1] = useState(false);
  const [isDisplayOpen2, setIsDisplayOpen2] = useState(false);
  const [isDisplayOpen3, setIsDisplayOpen3] = useState(false);
  const [isDisplayOpen4, setIsDisplayOpen4] = useState(false);
  const [isDisplayOpen5, setIsDisplayOpen5] = useState(false);
  const [isDisplayOpen6, setIsDisplayOpen6] = useState(false);
  const [isDisplayOpen7, setIsDisplayOpen7] = useState(false);
  const [isDisplayOpen8, setIsDisplayOpen8] = useState(false);
  const [isDisplayOpen9, setIsDisplayOpen9] = useState(false);
  const [isDisplayOpen10, setIsDisplayOpen10] = useState(false);
  const [isDisplayOpen11, setIsDisplayOpen11] = useState(false);
  const [isDisplayOpen12, setIsDisplayOpen12] = useState(false);
  const [isDisplayOpen13, setIsDisplayOpen13] = useState(false);
  const [isDisplayOpen14, setIsDisplayOpen14] = useState(false);
  const [isDisplayOpen15, setIsDisplayOpen15] = useState(false);


  const toggleDisplay1 = () => {
    setIsDisplayOpen1(!isDisplayOpen1);
  }
  const toggleDisplay2 = () => {
    setIsDisplayOpen2(!isDisplayOpen2);
  }
  const toggleDisplay3 = () => {
    setIsDisplayOpen3(!isDisplayOpen3);
  }
  const toggleDisplay4 = () => {
    setIsDisplayOpen4(!isDisplayOpen4);
  }
  const toggleDisplay5 = () => {
    setIsDisplayOpen5(!isDisplayOpen5);
  }
  const toggleDisplay6 = () => {
    setIsDisplayOpen6(!isDisplayOpen6);
  }
  const toggleDisplay7 = () => {
    setIsDisplayOpen7(!isDisplayOpen7);
  }
  const toggleDisplay8 = () => {
    setIsDisplayOpen8(!isDisplayOpen8);
  }
  const toggleDisplay9 = () => {
    setIsDisplayOpen9(!isDisplayOpen9);
  }
  const toggleDisplay10 = () => {
    setIsDisplayOpen10(!isDisplayOpen10);
  }
  const toggleDisplay11 = () => {
    setIsDisplayOpen11(!isDisplayOpen11);
  }
  const toggleDisplay12 = () => {
    setIsDisplayOpen12(!isDisplayOpen12);
  }
  const toggleDisplay13 = () => {
    setIsDisplayOpen13(!isDisplayOpen13);
  }
  const toggleDisplay14 = () => {
    setIsDisplayOpen14(!isDisplayOpen14);
  }
  const toggleDisplay15 = () => {
    setIsDisplayOpen15(!isDisplayOpen15);
  }

  return (
    <div >
        
        <Navbar></Navbar>
        <div className="title">FAQs</div>
        <div className="flexbox">  
        
        <button className="question-button" onClick={toggleDisplay1}><div className="match-card12" > <div className="question"> What is an Ethereum-based cricket betting d-app? </div><div><IoIosArrowDown/> </div></div></button>
        {isDisplayOpen1 && (
            
            <div className="answer" > <div className="answermessage">An Ethereum-based cricket betting dApp is a decentralized application built on the Ethereum blockchain that allows users to place bets on cricket matches using cryptocurrency. The dApp uses smart contracts to facilitate secure and transparent betting transactions without the need for intermediaries such as bookmakers. Users can connect their Ethereum wallets to the dApp and place bets on various outcomes of a cricket match, such as the winning team or the top scorer. The dApp also includes features such as real-time betting odds, and automatic payout distribution based on the outcome of the match.</div>
            
            </div>
            
        )}
        <button className="question-button" onClick={toggleDisplay2}><div className="match-card12" > <div className="question"> How do I use MetaMask to bet on cricket matches? </div><div><IoIosArrowDown/> </div></div></button>
        {isDisplayOpen2 && (
            
            <div className="answer" > <div className="answermessage">To use MetaMask to bet on cricket matches on an Ethereum-based dApp, you can follow these steps:
            <li>
            Install the MetaMask extension for your web browser and create a new account.
            <li>Add some ether to your MetaMask wallet by purchasing it from a cryptocurrency exchange or transferring it from another wallet.</li>
            <li>Visit the cricket betting dApp and connect your MetaMask wallet by clicking on the wallet icon and selecting your account.</li>
            <li>Select the cricket match you want to bet on and choose the type of bet you want to place (player or team).</li>
            <li>Enter the amount of ether you want to bet and confirm the transaction in MetaMask.</li>
            <li>Wait for the transaction to be confirmed on the Ethereum network, and check the dApp to see if your bet was successful.</li>
            </li>
            It's important to always verify that you are using the correct dApp URL and to never share your MetaMask seed phrase or private key with anyone</div>
            
            </div>
            
        )}
        <button className="question-button" onClick={toggleDisplay3}><div className="match-card12" > <div className="question"> Is it safe to use MetaMask for betting on the d-app? </div><div><IoIosArrowDown/> </div></div></button>
        {isDisplayOpen3 && (
            
            <div className="answer" >
            <div className="answermessage">MetaMask is generally considered a safe and secure wallet to use for Ethereum-based d-apps, including cricket betting d-apps. However, as with any digital wallet, there are always some risks involved, such as the potential for hacking or phishing attacks. It is important to always use caution and follow best practices for securing your wallet, such as keeping your seed phrase private and using strong passwords. Additionally, it is always a good idea to thoroughly research and vet any d-apps or smart contracts before interacting with them to minimize your risk.</div>
            
            </div>
            
        )}
        <button className="question-button" onClick={toggleDisplay4}><div className="match-card12" > <div className="question"> How can I create an account on the d-app? </div><div><IoIosArrowDown/> </div></div></button>
        {isDisplayOpen4 && (
            
            <div className="answer" >
             <div className="answermessage">Our dApp only uses MetaMask wallet for authentication and does not require users to create an account on the dApp separately. When a user wants to interact with the dApp, they will need to connect their MetaMask wallet to the dApp, and the dApp will retrieve their account address from MetaMask to ensure that the user is authenticated.</div>
            
            </div>
            
        )}
        <button className="question-button" onClick={toggleDisplay5}><div className="match-card12" > <div className="question"> How can I add funds to my d-app account using MetaMask? </div><div><IoIosArrowDown/> </div></div></button>
        {isDisplayOpen5 && (
            
            <div className="answer" ><div className="answermessage">Since the dApp uses MetaMask for account management, users can add funds to their MetaMask wallet by purchasing cryptocurrency from a cryptocurrency exchange or using a peer-to-peer platform to receive cryptocurrency from another user. Once the funds are added to the MetaMask wallet, the user can use them to place bets on cricket matches on the dApp.</div>
            
            </div>
            
        )}
        <button className="question-button" onClick={toggleDisplay6}><div className="match-card12" ><div className="question"> What are the minimum and maximum betting amounts on the d-app? </div><div><IoIosArrowDown/> </div></div></button>
        {isDisplayOpen6 && (
            
            <div className="answer" > <div className="answermessage">As such, there may not be a fixed minimum or maximum limit on bets. It is recommended to check the specific match and market before placing a bet.</div>
            
            </div>
            
        )}
        <button className="question-button" onClick={toggleDisplay7}><div className="match-card12" ><div className="question"> How can I select the team or player to bet on? </div><div><IoIosArrowDown/> </div></div></button>
        {isDisplayOpen7 && (
            
            <div className="answer" > <div className="answermessage">To select the team or player to bet on, you need to follow these steps:

            <li>Choose the cricket match from the list of available matches.</li>
            <li>Click on the match to see the details of the match, including the teams and players.</li>
            <li>Choose the team or player you want to bet on by clicking on the respective button, i.e., "Player Bet" or "Team Bet."</li>
            <li>Enter the amount you want to bet and click on the "Place Bet" button.
            Confirm the transaction using MetaMask.</li>
            Once the transaction is confirmed, your bet will be placed, and you will receive a confirmation message.</div>
            
            </div>
            
        )}
        <button className="question-button" onClick={toggleDisplay8}><div className="match-card12" ><div className="question"> How are the betting odds and payout rates determined? </div><div><IoIosArrowDown/> </div></div></button>
        {isDisplayOpen8 && (
            
            <div className="answer" > <div className="answermessage">This is the sliding display. This is the sliding display.This is the sliding display.This is the sliding display.This is the sliding display.</div>
            
            </div>
            
        )}
        <button className="question-button" onClick={toggleDisplay9}><div className="match-card12" ><div className="question"> What happens to my bet if the match is canceled or postponed? </div><div><IoIosArrowDown/> </div></div></button>
        {isDisplayOpen9 && (
            
            <div className="answer" > <div className="answermessage">If a match is canceled or postponed, the bets placed on that match will be refunded to the users. The refund will be done automatically and will be transferred to the user's account balance.</div>
            
            </div>
            
        )}
        <button className="question-button" onClick={toggleDisplay10}><div className="match-card12" ><div className="question"> How can I withdraw my winnings from the d-app using MetaMask? </div><div><IoIosArrowDown/> </div></div></button>
        {isDisplayOpen10 && (
            
            <div className="answer" > <div className="answermessage">Once the match is closed and the winning amounts are determined, the d-app will automatically transfer the amount to the user's MetaMask account.</div>
            
            </div>
            
        )}
        <button className="question-button" onClick={toggleDisplay11}><div className="match-card12" ><div className="question"> What is the process for dispute resolution or complaint handling? </div><div><IoIosArrowDown/> </div></div></button>
        {isDisplayOpen11 && (
            
            <div className="answer" > <div className="answermessage">As a decentralized application, our d-app relies on smart contracts to execute transactions and manage bets. The code for our smart contracts is open source and publicly available on the Ethereum blockchain. Therefore, all transactions and bets are irreversible once they are executed on the blockchain.
            <br></br>
            In case of any disputes or complaints, users are advised to reach out to the d-app administrators via the provided contact information. Our team will review the complaint and may take appropriate actions depending on the circumstances. However, please note that the final decision lies with the smart contract and the Ethereum blockchain, and our team cannot reverse or modify any transactions or bets.</div>
            
            </div>
            
        )}
        <button className="question-button" onClick={toggleDisplay12}><div className="match-card12" ><div className="question"> Is there any customer support available for the d-app? </div><div><IoIosArrowDown/> </div></div></button>
        {isDisplayOpen12 && (
            
            <div className="answer" > <div className="answermessage">Our d-app provides customer support through a help section within the application. Users can refer to the help section for any queries, issues, or complaints related to the betting process or the application's functionality. If users face any technical issues or bugs while using the d-app, they can report them through the contact us section, and our team will address the issues at the earliest.</div>
            
            </div>
            
        )}
        <button className="question-button" onClick={toggleDisplay13}><div className="match-card12" ><div className="question"> Are there any restrictions or legal implications for using the d-app in my country? </div><div><IoIosArrowDown/> </div></div></button>
        {isDisplayOpen13 && (
            
            <div className="answer" > <div className="answermessage">The legality of using the d-app for cricket betting may vary by country or region, so it is important to check the local laws and regulations before using the platform. Some countries have restrictions on online gambling or betting, and failure to comply with the laws could result in legal implications. It is the responsibility of the user to ensure that their use of the d-app is legal in their jurisdiction.</div>
            
            </div>
            
        )}
        <button className="question-button" onClick={toggleDisplay14}><div className="match-card12" ><div className="question"> How can I stay updated on the latest matches and betting options on the d-app? </div><div><IoIosArrowDown/> </div></div></button>
        {isDisplayOpen14 && (
            
            <div className="answer" > <div className="answermessage">You can stay updated on the latest matches and betting options on the d-app by regularly visiting the platform. It's important to keep yourself informed about any updates or changes to the platform to ensure you have the best possible experience while using it.</div>
            
            </div>
            
        )}
        <button className="question-button" onClick={toggleDisplay15}><div className="match-card12" ><div className="question"> What are the fees and charges for using the d-app and MetaMask wallet? </div><div><IoIosArrowDown/> </div></div></button>
        {isDisplayOpen15 && (
            
            <div className="answer" > <div className="answermessage">The d-app does not charge any fees for its use.</div>
            
            </div>
            
        )}
        </div>
    </div>
  );
}

export default FAQs;

// const FAQs = () =>{
//     return(
//         <>

//         <div className="flexbox">
//             <div className="question">
//                 Q1 lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
//             </div>
//             <div className="question">
//                 Q1
//             </div>
//             <div className="question">
//                 Q1
//             </div>
//             <div className="question">
//                 Q1
//             </div>
//             <div className="question">
//                 Q1
//             </div>
//             <div className="question">
//                 Q1
//             </div>
//         </div>
//         </>
//     );
// };

// export default FAQs;