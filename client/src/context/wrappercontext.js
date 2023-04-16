import React,{useEffect,useState} from 'react'

import { contractAddress, contractABI_Match, contractABI_Wrapper, contractABI_Player} from '../utils/constants'

import { ethers } from 'ethers';
import { json } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
// const ethers = require("ethers")

export const WrapperContext = React.createContext();


const { ethereum } = window;

const createEthereumContractWrapper = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionsContract = new ethers.Contract(contractAddress, contractABI_Wrapper, signer);
  
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

  // const navigate = useNavigate();

    const [currentAccount, setCurrentAccount] = useState("");
    const [matchinfolist, setmatchinfolist] = useState([]);
    const [completedmatchlist,setcompletedmathlist] = useState([]);

    const [selectedmatch,setselectedmatch] = useState(null);
    const [selectedaddress,setselectedaddress] = useState("");
    const [playerlist1,setplayerlist1] = useState([]);
    const [playerlist2,setplayerlist2] = useState([]);
    const [selectedmatchdetails,setselectedmatchdetails] = useState({team1:"",team2:""});
    const [selectedteam,setselectedteam] = useState("");
    const [betvalue,setbetvalue] = useState(0);
    const [playercontractselected,setplayercontractselected] =useState(null);
    const [selectedplayer,setselectedplayer] = useState("");
    const [betplayerhistory,setbetplayerhistory] = useState([]);
    const [betplayercount,setbetplayercount] = useState(0);
    const [betmatchhistory,setbetmatchhistory] = useState({amount:"",team:""});
    const [ButtonState2, setButtonState2] = useState(false);
    const [ButtonState3, setButtonState3] = useState(false);

    const [loadingteambet,setloadingteambet] = useState(false);
    const [loadingplayerbet,setloadingplayerbet] = useState(false);
    const [loadingplayerdisplay,setloadingplayerdisplay] = useState(false);
    const [loadingactivematch,setloadingactivematch] = useState(false);
    const [loadingcompletedmatch,setloadingcompletedmatch] = useState(false);

    useEffect(()=>{
      // setselectedmatch(window.localStorage.getItem('selectedmatch'));
      const element = window.localStorage.getItem('selectedmatchaddress');
      console.log(element);
      if(element!=null) setselectedaddress(element);
    },[]);
    // useEffect(()=>{
    //   const element = window.localStorage.getItem('playerlist1');
    //   console.log(element);
    //   // if(element!=null) setplayerlist1(element);
    // },[]);
    // useEffect(()=>{
    //   const element = window.localStorage.getItem('playerlist2');
    //   console.log(element);
    //   // if(element!=null) setplayerlist2(element);
    // },[]);
    // useEffect(()=>{
    //   const element = window.localStorage.getItem('selectedmatchdetails');
    //   // console.log(element);
    //   if(element!=null) setselectedmatchdetails(element);
    // })
    // useEffect(()=>{
    //   if(selectedmatch!=null) console.log(selectedmatch.contract.address);
    //   if(selectedmatch!=null) window.localStorage.setItem('selectedmatchaddress',selectedmatch.contract.address);
    // },[selectedmatch]);
    // useEffect(()=>{
    //   window.localStorage.setItem('playerlist1',JSON.stringify(playerlist1));
    // },[playerlist1]);
    // useEffect(()=>{
    //   window.localStorage.setItem('playerlist2',JSON.stringify(playerlist2));
    // },[playerlist2]);

    const setmatchdetails = async ()=>{
      
      const details = await selectedmatch.viewmatch();
      setselectedmatchdetails({team1:details.team1,team2:details.team2});
    }
    useEffect(()=>{
      console.log("inside");
      try {
        if (!ethereum) return alert("Please install MetaMask.");

        if(selectedaddress==null||selectedaddress=='') return;

        console.log(selectedaddress);

        const matchcontracttemp  = createEthereumContractMatch(selectedaddress);
        setselectedmatch(matchcontracttemp);

        // const playercontractaddress = selectedmatch.getplayercontract();

        // const playercontract = createEthereumContractPlayer(playercontractaddress);

        // playercontract.bethistory().then((res)=>{
        //   const playerhistory = res.map((history)=>{
        //     return {player:history.player,amount:ethers.utils.formatEther(parseInt(history.amount).toString())}
        //   })
        //   setbetplayerhistory(playerhistory);
        //   setbetplayercount(playerhistory.length);
        // });

        // playercontract.viewplayer().then((res)=>{
        //     setplayerlist1(res.player_info_team1);
        //     setplayerlist2(res.player_info_team2);
        // });

        // // window.localStorage.setItem('playerlist1');
        // // window.localStorage.setItem('playerlist2');

        // setplayercontractselected(playercontract);

        // setloadingplayerdisplay(false);
            
        } catch (error) {
            
        console.log(error);
    
        throw new Error("No ethereum object");
        }
    },[selectedaddress])

    useEffect(()=>{
      // window.localStorage.setItem('selectedmatch',selectedmatch);
      // if(loadingplayerdisplay){
        // console.log("inside contract");
      try {
      if (!ethereum) return alert("Please install MetaMask.");

      if(selectedmatch==null||selectedmatch=='') return;

      // selectedmatchdetails();
      setmatchdetails(); 
      
      selectedmatch.bethistory().then((res)=>{
        // console.log(res);
        const match = res.team?selectedmatchdetails.team1:selectedmatchdetails.team2;
        console.log(match);
        setbetmatchhistory({amount:ethers.utils.formatEther(parseInt(res.amount).toString()),team:res.team});
        if(ethers.utils.formatEther(parseInt(res.amount).toString())>0) setButtonState2(true);
        else setButtonState2(false);
      })

      // console.log(selectedmatch.address);
      window.localStorage.setItem('selectedmatchaddress',selectedmatch.address);

      const playercontractaddress = selectedmatch.getplayercontract();

      const playercontract = createEthereumContractPlayer(playercontractaddress);

      playercontract.bethistory().then((res)=>{
        const playerhistory = res.map((history)=>{
          return {player:history.player,amount:ethers.utils.formatEther(parseInt(history.amount).toString())}
        })
        if(playerhistory.length>0) setButtonState3(true);
        else setButtonState3(false); 
        setbetplayerhistory(playerhistory);
        setbetplayercount(playerhistory.length);
      });

      playercontract.viewplayer().then((res)=>{
          setplayerlist1(res.player_info_team1);
          setplayerlist2(res.player_info_team2);
      });

      // window.localStorage.setItem('playerlist1');
      // window.localStorage.setItem('playerlist2');

      setplayercontractselected(playercontract);

      setloadingplayerdisplay(false);
          
      } catch (error) {
          
      console.log(error);
  
      throw new Error("No ethereum object");
      }
      // }
    },[selectedmatch,loadingplayerdisplay])

    const activematchlist = async () => {
      try {
        if (ethereum) {
          const WrapperContract = createEthereumContractWrapper();

          setloadingactivematch(true);
          setloadingcompletedmatch(true);

          const activematchcontractaddress = await WrapperContract.viewlivematches();

          const livematchescontracts =[];
          for (let index = 0; index < activematchcontractaddress.length; index++) {
            const element = activematchcontractaddress[index];
            if(element!=0)
            livematchescontracts.push(createEthereumContractMatch(element));
          }
          const list =[];
          // console.log(livematchescontracts);
          // const playeraddress = [];
          for (let index = 0; index < livematchescontracts.length; index++) {
            const element = await livematchescontracts[index].viewmatch();
            const element2 = await livematchescontracts[index].bethistory();
            list.push({
              team1: element.team1,
              team2: element.team2,
              venue: element.venue,
              time: element.time,
              date: element.date,
              teambethistory: element2.team,
              amountbethistory: ethers.utils.formatEther(parseInt(element2.amount).toString()),
              contract: livematchescontracts[index]
            });
          }
          // console.log(list);
          setmatchinfolist(list);
          setloadingactivematch(false);
          const completedmatchaddress = await WrapperContract.viewclosematches();

          const completedmatchcontract = [];

          for (let index = completedmatchaddress.length-1; index >=0; index--) {
            const element = completedmatchaddress[index];
            console.log(element);
            completedmatchcontract.push(createEthereumContractMatch(element));
          }
          // console.log(completedmatchcontract);
          const listcompleted = [];
          for (let index = 0; index < completedmatchcontract.length; index++) {
            const element = await completedmatchcontract[index].viewmatch();
            const amount = await completedmatchcontract[index].amountrefunded();
            listcompleted.push({
              team1: element.team1,
              team2: element.team2,
              venue: element.venue,
              time: element.time,
              date: element.date,
              refundamount: ethers.utils.formatEther(parseInt(amount._hex).toString())
            });
          }

          setcompletedmathlist(listcompleted);
          setloadingcompletedmatch(false);

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
            // navigate('home');

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
            completedmatchlist,
            setloadingplayerdisplay,
            loadingplayerdisplay,
            loadingactivematch,
            loadingcompletedmatch,
            ButtonState2, 
            ButtonState3, 
            setButtonState2,
            setButtonState3,
            betmatchhistory,
            betplayerhistory,
            betplayercount
        }}>
            {children}
        </WrapperContext.Provider>
    );
};