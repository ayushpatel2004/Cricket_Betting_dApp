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
    const [formDataMatchinfo, setFormDataMatchinfo] = useState({team1:"",team2:""});
    const [formDataPlayer1info, setFormDataPlayer1info] = useState([]);
    const [formDataPlayer2info, setFormDataPlayer2info] = useState([]);
    const [matchinfolist, setmatchinfolist] = useState([]);
    const [winningteam,setwinningteam] = useState("");
    const [winningplayers,setwinningplayers] = useState({player1:"",player2:"",player3:"",});
    const [selectedmatch,setselectedmatch] = useState("");

    const handleChange = (e, name) => {
      setFormDataMatchinfo((prevState) => ({ ...prevState, [name]: e.target.value }));
    };

    const handleChangePlayer1 = (e) => {
      setFormDataPlayer1info([...formDataPlayer1info,e.target.value]);
    };

    const handleChangePlayer2 = (e) => {
      setFormDataPlayer2info([...formDataPlayer2info,e.target.value]);
    };

    const onselectmatch = (contract) => {
      setselectedmatch(contract);
    }

    const handleChangeList = (e,name) => {
      setwinningplayers((prevState) => ({ ...prevState, [name]: e.target.value }))
    }

    const activematchlist = async () => {
      try {
        if (ethereum) {
          const WrapperContract = createEthereumContractWrapper();

          const activematchcontractaddress = await WrapperContract.viewlivematches();
          // console.log(activematchcontractaddress);
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
          // console.log(list);
          setmatchinfolist(list);

          // window.location.reload();
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
      }, [matchinfolist]);

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

      const createMatch = async () => {
        try{
          if(!ethereum) return alert("Please install Metamask");

          const {team1,team2} = formDataMatchinfo;

          const WrapperContract = createEthereumContractWrapper();

          const Wrapperhash = await WrapperContract.createbet(team1,team2,formDataPlayer1info,formDataPlayer2info);

          await Wrapperhash.wait();

          window.location.reload();

          // const livematches = await WrapperContract.viewlivematches();
          
          // console.log(livematches);
          // const livematchescontracts = livematches.map( (match)=> createEthereumContractMatch(match));

          // console.log(livematchescontracts);

          // const livematchesinfo = livematchescontracts.map(async (match) => await match.viewmatch());

          // console.log(livematchesinfo);

          // const playercontractsadd = livematchescontracts.map(async (match) => await match.getplayercontract());

          // console.log(playercontractsadd);

          // const playercontract = playercontractsadd.map((player)=>createEthereumContractPlayer(player));

          // console.log(playercontract);

          // const matchplayers = playercontract.map(async (player)=>await player.viewplayer());

          // console.log(matchplayers);

        } catch(error){
          console.log(error);
    
          throw new Error("No ethereum object");
        }
      }

      const closeMatch = async () => {
        try {
          if(!ethereum) return alert("Please install Metamask");

          const WrapperContract = createEthereumContractWrapper();

          console.log(WrapperContext);

          const check = winningteam == selectedmatch.team1 ? true : false;

          const {player1,player2,player3} = winningplayers;

          // console.log(check);

          // console.log("Printing before");

          // console.log(selectedmatch.contract.address);
          
          const closebethash = await WrapperContract.closeBet(selectedmatch.contract.address,check,player1,player2,player3);
          console.log("Printing after");
          
          await closebethash.wait();
          console.log("Printing after after");

          window.location.reload();

        } catch (error) {
          console.log(error);
    
          throw new Error("No ethereum object");
        }
      }
      


    return (
        <WrapperContext.Provider value={{
            connectWallet,
            currentAccount,
            createMatch,
            handleChange,
            handleChangePlayer1,
            handleChangePlayer2,
            formDataPlayer1info,
            formDataPlayer2info,
            formDataMatchinfo,
            matchinfolist,
            onselectmatch,
            setwinningteam,
            setwinningplayers,
            selectedmatch,
            winningteam,
            winningplayers,
            closeMatch,
            handleChangeList
        }}>
            {children}
        </WrapperContext.Provider>
    );
};