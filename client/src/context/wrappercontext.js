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
    const [selectedmatch,setselectedmatch] = useState(null);
    const [playerlist1,setplayerlist1] = useState([]);
    const [playerlist2,setplayerlist2] = useState([]);
    const [selectedmatchdetails,setselectedmatchdetails] = useState({team1:"",team2:""});
    const [selectedteam,setselectedteam] = useState("");
    const [betvalue,setbetvalue] = useState(0);
    const [playercontractselected,setplayercontractselected] =useState(null);
    const [selectedplayer,setselectedplayer] = useState("");

    useEffect(()=>{
        try {
        if (!ethereum) return alert("Please install MetaMask.");

        // while(selectedmatch==null) ;

        // console.log(selectedmatch);

        if(selectedmatch==null) return;

        const playercontractaddress = selectedmatch.getplayercontract();

        console.log(playercontractaddress);

        const playercontract = createEthereumContractPlayer(playercontractaddress);

        console.log(playercontract);

        playercontract.viewplayer().then((res)=>{
            setplayerlist1(res.player_info_team1);
            setplayerlist2(res.player_info_team2);
        });

        setplayercontractselected(playercontract);
        // setplayerlist1(value.player_info_team1);
        // setplayerlist2(value.player_info_team2);
            
        } catch (error) {
            
        console.log(error);
    
        throw new Error("No ethereum object");
        }
    },[selectedmatch])

    const getplayerlist = async () => {
        try {
        if (!ethereum) return alert("Please install MetaMask.");

        // while(selectedmatch==null) ;

        console.log(selectedmatch);

        // const playercontractaddress = selectedmatch.getplayercontract();

        // console.log(playercontractaddress);

        // const playercontract = createEthereumContractPlayer(playercontractaddress);

        // console.log(playercontract);

        // const value = playercontract.viewplayer();

        // console.log(value);
        // setplayerlist1(value.player_info_team1);
        // setplayerlist2(value.player_info_team2);
            
        } catch (error) {
            
        console.log(error);
  
        throw new Error("No ethereum object");
        }
    }

    const activematchlist = async () => {
      try {
        if (ethereum) {
          const WrapperContract = createEthereumContractWrapper();

          const activematchcontractaddress = await WrapperContract.viewlivematches();
          const livematchescontracts =[];
          for (let index = 0; index < activematchcontractaddress.length; index++) {
            const element = activematchcontractaddress[index];
            if(element!=0)
            livematchescontracts.push(createEthereumContractMatch(element));
          }
          const list =[];
          for (let index = 0; index < livematchescontracts.length; index++) {
            const element = await livematchescontracts[index].viewmatch();
            list.push({
              team1: element.team1,
              team2: element.team2,
              contract: livematchescontracts[index]
            });
          }
          setmatchinfolist(list);

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

            // activematchlist();
          } else {
            console.log("No accounts found");
          }
        } catch (error) {
          console.log(error);
        }
    };

    useEffect(() => {
        checkIfWalletIsConnect();
        activematchlist();
      }, []);

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

            console.log(betvalue);
            console.log(selectedteam);

            const check = selectedteam===selectedmatchdetails.team1?true:false;

            const placebethash = await selectedmatch.placebet(check,{value:ethers.utils.parseEther(betvalue)});

            await placebethash.wait();

            console.log("bet placed");
        } catch (error) {
            console.log(error);
    
          throw new Error("No ethereum object");
        }
    }
    const placeplayerbet = async () => {
        try {
            if (!ethereum) return alert("Please install MetaMask.");

            console.log(betvalue);
            console.log(selectedplayer);

            // const check = selectedteam===selectedmatchdetails.team1?true:false;

            const placebethash = await playercontractselected.placebet(selectedplayer,{value:ethers.utils.parseEther(betvalue)});

            await placebethash.wait();

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
            getplayerlist,
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
            placeplayerbet
        }}>
            {children}
        </WrapperContext.Provider>
    );
};