import React,{useEffect,useState} from 'react'

import { contractAddress, contractABI_Match, contractABI_Wrapper, contractABI_Player} from '../utils/constants'

import { ethers } from 'ethers';

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
    const [formDataPlayer1info, setFormDataPlayer1info] = useState({team1_player1:"",team1_player2:"",team1_player3:"",team1_player4:"",team1_player5:"",team1_player6:"",team1_player7:"",team1_player8:"",team1_player9:"",team1_player10:"",team1_player11:"",});
    const [formDataPlayer2info, setFormDataPlayer2info] = useState({team2_player1:"",team2_player2:"",team2_player3:"",team2_player4:"",team2_player5:"",team2_player6:"",team2_player7:"",team2_player8:"",team2_player9:"",team2_player10:"",team2_player11:"",});
    const [formtimeinfo,setformtimeinfo] = useState("");
    const [formvenueinfo,setformvenueinfo] = useState("");
    const [formdateinfo,setformdateinfo] = useState("");

    const [matchinfolist, setmatchinfolist] = useState([]);
    const [winningteam,setwinningteam] = useState("");
    const [winningplayers,setwinningplayers] = useState({player1:"",player2:"",player3:"",});
    const [selectedmatch,setselectedmatch] = useState("");
    const [loadingmatchcreate,setloadingmatchcreate] = useState(false);
    const [loadingmatchclose,setloadingmatchclose] = useState(false);

    const [loadingactivematch,setloadingactivematch] = useState(false);

    const handleChange = (e, name) => {
      setFormDataMatchinfo((prevState) => ({ ...prevState, [name]: e.target.value }));
    };

    const handleChangePlayer1 = (e, name) => {
      setFormDataPlayer1info((prevState) => ({ ...prevState, [name]: e.target.value }));
    };

    const handleChangePlayer2 = (e, name) => {
      setFormDataPlayer2info((prevState) => ({ ...prevState, [name]: e.target.value }));
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
          setloadingactivematch(true);
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
              venue: element.venue,
              time: element.time,
              date: element.date,
              contract: livematchescontracts[index]
            });
          }
          setmatchinfolist(list);
          setloadingactivematch(false);
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
      if(!loadingmatchclose && !loadingmatchcreate){
        activematchlist();
      }
      }, [loadingmatchclose,loadingmatchcreate]);

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

          const playerlist1=[];

          const {team1_player1,team1_player2,team1_player3,team1_player4,team1_player5,team1_player6,team1_player7,team1_player8,team1_player9,team1_player10,team1_player11} = formDataPlayer1info;

          playerlist1.push(team1_player1);
          playerlist1.push(team1_player2);
          playerlist1.push(team1_player3);
          playerlist1.push(team1_player4);
          playerlist1.push(team1_player5);
          playerlist1.push(team1_player6);
          playerlist1.push(team1_player7);
          playerlist1.push(team1_player8);
          playerlist1.push(team1_player9);
          playerlist1.push(team1_player10);
          playerlist1.push(team1_player11);

          const playerlist2=[];

          const {team2_player1,team2_player2,team2_player3,team2_player4,team2_player5,team2_player6,team2_player7,team2_player8,team2_player9,team2_player10,team2_player11} = formDataPlayer2info;

          playerlist2.push(team2_player1);
          playerlist2.push(team2_player2);
          playerlist2.push(team2_player3);
          playerlist2.push(team2_player4);
          playerlist2.push(team2_player5);
          playerlist2.push(team2_player6);
          playerlist2.push(team2_player7);
          playerlist2.push(team2_player8);
          playerlist2.push(team2_player9);
          playerlist2.push(team2_player10);
          playerlist2.push(team2_player11);


          console.log(playerlist1);
          console.log(playerlist2);

          const WrapperContract = createEthereumContractWrapper();

          setloadingmatchcreate(true);
          
          const Wrapperhash = await WrapperContract.createbet(team1,team2,formtimeinfo,formdateinfo,formvenueinfo,playerlist1,playerlist2);
          
          await Wrapperhash.wait();
          setloadingmatchcreate(false);

          window.location.reload();
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

          setloadingmatchclose(true);
          
          const closebethash = await WrapperContract.closeBet(selectedmatch.contract.address,check,player1,player2,player3);
          
          await closebethash.wait();
          setloadingmatchclose(false);

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
            handleChangeList,
            loadingmatchcreate,
            loadingmatchclose,
            setformvenueinfo,
            setformdateinfo,
            setformtimeinfo,
            loadingactivematch
        }}>
            {children}
        </WrapperContext.Provider>
    );
};