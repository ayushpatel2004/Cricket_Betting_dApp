import React,{useEffect,useState} from 'react'

import { contractAddress, contractABI_Match, contractABI_Wrapper, contractABI_Player} from '../utils/constants'

import { ethers } from 'ethers';
// const ethers = require("ethers")

export const WrapperContext = React.createContext();


const { ethereum } = window;

const createEthereumContractWrapper = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionsContract = new ethers.Contract(contractAddress, contractABI_Wrapper, signer);

    // console.log(transactionsContract);
  
    return transactionsContract;
};
const createEthereumContractPlayer = (contractaddress) => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionsContract = new ethers.Contract(contractaddress, contractABI_Player, signer);
  
    return transactionsContract;
};
const createEthereumContractMatch = (contractaddress) => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionsContract = new ethers.Contract(contractaddress, contractABI_Match, signer);
  
    return transactionsContract;
};

export const WrapperProvider = ({ children }) => {

    const [currentAccount, setCurrentAccount] = useState("");
    const [matchinfolist, setmatchinfolist] = useState([]);
    const [completedmatchlist,setcompletedmathlist] = useState([]);

    const [selectedmatch,setselectedmatch] = useState(null);
    const [playerlist1,setplayerlist1] = useState([]);
    const [playerlist2,setplayerlist2] = useState([]);
    const [selectedmatchdetails,setselectedmatchdetails] = useState({team1:"",team2:""});
    const [selectedteam,setselectedteam] = useState("");
    const [betvalue,setbetvalue] = useState(0);
    const [playercontractselected,setplayercontractselected] =useState(null);
    const [selectedplayer,setselectedplayer] = useState("");
    const [loadingteambet,setloadingteambet] = useState(false);
    const [loadingplayerbet,setloadingplayerbet] = useState(false);

    useEffect(()=>{
        try {
        if (!ethereum) return alert("Please install MetaMask.");

        if(selectedmatch==null) return;

        const playercontractaddress = selectedmatch.getplayercontract();

        const playercontract = createEthereumContractPlayer(playercontractaddress);

        playercontract.viewplayer().then((res)=>{
            setplayerlist1(res.player_info_team1);
            setplayerlist2(res.player_info_team2);
        });

        setplayercontractselected(playercontract);
            
        } catch (error) {
            
        console.log(error);
    
        throw new Error("No ethereum object");
        }
    },[selectedmatch])

    const activematchlist = async () => {
      try {
        if (ethereum) {
          const WrapperContract = createEthereumContractWrapper();

          const activematchcontractaddress = await WrapperContract.viewlivematches();

          const livematchescontracts =[];
          for (let index = 0; index < activematchcontractaddress.length; index++) {
            const element = activematchcontractaddress[index];
            console.log(element);
            if(element!=0)
            livematchescontracts.push(createEthereumContractMatch(element));
          }
          const list =[];
          console.log(livematchescontracts);
          for (let index = 0; index < livematchescontracts.length; index++) {
            const element = await livematchescontracts[index].viewmatch();
            list.push({
              team1: element.team1,
              team2: element.team2,
              contract: livematchescontracts[index]
            });
          }
          setmatchinfolist(list);
          const completedmatchaddress = await WrapperContract.viewclosematches();
          console.log(completedmatchaddress);

          const completedmatchcontract = [];

          for (let index = completedmatchaddress.length-1; index >=0; index--) {
            const element = completedmatchaddress[index];
            console.log(element);
            completedmatchcontract.push(createEthereumContractMatch(element));
          }
          console.log(completedmatchcontract);
          const listcompleted = [];
          for (let index = 0; index < completedmatchcontract.length; index++) {
            const element = await completedmatchcontract[index].viewmatch();
            const amount = await completedmatchcontract[index].amountrefunded();
            listcompleted.push({
              team1: element.team1,
              team2: element.team2,
              refundamount: ethers.utils.formatEther(parseInt(amount._hex).toString())
            });
          }
          console.log(listcompleted);

          setcompletedmathlist(listcompleted);

        }
      } catch (error) {
        console.log(error);
  
        throw new Error("No ethereum object");
      }
    }
    

    const checkIfWalletIsConnect = async () => {
        try {
          if (!ethereum) return alert("Please install MetaMask.");
    
          const accounts = await ethereum.request({ method: "eth_accounts" });
    
          if (accounts.length) {
            setCurrentAccount(accounts[0]);

          } else {
            console.log("No accounts found");
          }
        } catch (error) {
          console.log(error);
        }
    };

    useEffect(() => {
        checkIfWalletIsConnect();
        if(!loadingplayerbet && !loadingteambet){
        activematchlist();
        }
      }, [loadingplayerbet,loadingteambet]);

    const connectWallet = async () => {
        try {
          if (!ethereum) return alert("Please install MetaMask.");
    
          const accounts = await ethereum.request({ method: "eth_requestAccounts", });
    
          setCurrentAccount(accounts[0]);
          window.location.reload();
        } catch (error) {
          console.log(error);
    
          throw new Error("No ethereum object");
        }
      };

    const placeteambet = async () => {
        try {
            if (!ethereum) return alert("Please install MetaMask.");
            setloadingteambet(true);
            const check = selectedteam===selectedmatchdetails.team1?true:false;
            
            const placebethash = await selectedmatch.placebet(check,{value:ethers.utils.parseEther(betvalue)});
            
            await placebethash.wait();
            setloadingteambet(false);

            console.log("bet placed");
        } catch (error) {
            console.log(error);
    
          throw new Error("No ethereum object");
        }
    }
    const placeplayerbet = async () => {
        try {
            if (!ethereum) return alert("Please install MetaMask.");
            setloadingplayerbet(true);
            const placebethash = await playercontractselected.placebet(selectedplayer,{value:ethers.utils.parseEther(betvalue)});
            
            await placebethash.wait();
            setloadingplayerbet(false);

            console.log("bet placed");
        } catch (error) {
            console.log(error);
    
          throw new Error("No ethereum object");
        }
    }

    return (
        <WrapperContext.Provider value={{
            connectWallet,
            currentAccount,
            matchinfolist,
            setselectedmatch,
            playerlist1,
            playerlist2,
            selectedmatch,
            setselectedmatchdetails,
            selectedmatchdetails,
            setselectedteam,
            setbetvalue,
            selectedteam,
            betvalue,
            placeteambet,
            setselectedplayer,
            selectedplayer,
            placeplayerbet,
            loadingteambet,
            loadingplayerbet,
            completedmatchlist
        }}>
            {children}
        </WrapperContext.Provider>
    );
};