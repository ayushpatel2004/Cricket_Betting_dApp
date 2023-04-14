// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Wrapper{
    address payable owner;

    Match [] matches_bet;
    Match [] matches_complete;
    constructor(){
        owner = payable(msg.sender);
    }

    function createbet(string memory team1_input,string memory team2_input, string [] memory player_info_team1_input, string [] memory player_info_team2_input) public returns (Match) {
        Match newMatch = new Match(owner,team1_input,team2_input,player_info_team1_input,player_info_team2_input);
        matches_bet.push(newMatch);
        return newMatch;
    }

    function viewlivematches() public view returns(Match[] memory){
        return matches_bet;
    }

    function viewclosematches() public view returns(Match[] memory){
        return matches_complete;
    }

    function closeBet(Match closeMatch, bool result, string memory first, string memory second, string memory third) public{
        uint temp;
        for(uint i = 0; i < matches_bet.length; i++){
            if(matches_bet[i] == closeMatch){
                temp = i;
            }
        }
        matches_complete.push(matches_bet[temp]);
        delete matches_bet[temp];
        closeMatch.poolDistribution(result, first, second, third);
    }

}

contract Match{
    address payable owner;

    Player playingXI;

    address payable [] betters_wallet_address;
    uint [] amountPlaced;
    bool [] teamSelected;

    struct MatchInfo{
        string team1;
        string team2;
    }
    mapping (address => uint) refundamount;
    MatchInfo matches;

    event betplaced(address sender,uint amount);


    constructor(address payable ownercontract, string memory team1_input,string memory team2_input, string [] memory player_info_team1_input, string [] memory player_info_team2_input){
        owner = ownercontract;
        matches = MatchInfo(team1_input,team2_input);
        playingXI = new Player(ownercontract,player_info_team1_input,player_info_team2_input);
    }

    function viewmatch() public view returns(MatchInfo memory){
        return matches;
    }

    function placebet(bool teambetplaced) public payable{
        betters_wallet_address.push(payable(msg.sender));
        amountPlaced.push(msg.value);
        teamSelected.push(teambetplaced);

        emit betplaced(msg.sender,msg.value);
    }

    function getplayercontract() public view returns(Player){
        return playingXI;
    }

    function viewbets() public view returns(address payable[] memory){
        return betters_wallet_address;
    }

    function amountrefunded() public view returns(uint){
        uint playerrefund=playingXI.amountrefundedplayer(msg.sender);
        return refundamount[msg.sender]+playerrefund;
    }

    function poolDistribution(bool result, string memory first, string memory second, string memory third) public {
        playingXI.poolDistribution(first,second,third);
        uint n = amountPlaced.length;
        uint winning_customers = 0;
        uint losing_customers = 0;
        uint winning_bet = 0;
        uint losing_bet = 0;
        uint [] memory customerRefund= new uint[](n);
        for(uint i = 0; i < n; i++){
            customerRefund[i]=0;
        }
        for(uint i = 0; i < n; i++){
            if(teamSelected[i] == result){
                winning_customers++;
                winning_bet += amountPlaced[i];
            }
            else{
                losing_customers++;
                losing_bet += amountPlaced[i];
            }
        }
        if(winning_customers == n){
            for(uint i = 0; i < n; i++){
                customerRefund[i] += amountPlaced[i];
            }
        }
        else{
            for(uint i = 0; i < n; i++){
                if(teamSelected[i] == result){
                    customerRefund[i] += amountPlaced[i];
                    uint bonus = ((losing_bet * amountPlaced[i])*9)/(20*winning_bet);
                    customerRefund[i] += bonus;
                    if(customerRefund[i] > 2*amountPlaced[i]){
                        customerRefund[i] = 2*amountPlaced[i];
                    }
                }
                else{
                    customerRefund[i] += amountPlaced[i]/2;
                }
            }
        }
        for(uint i = 0; i < n; i++){
            betters_wallet_address[i].transfer(customerRefund[i]);
            // address temp = betters_wallet_address[i];
            refundamount[betters_wallet_address[i]]+=customerRefund[i];
        }
        refundamount[owner]+=address(this).balance;
        owner.transfer(address(this).balance);
    }

}
contract Player {
    address payable owner;

    address payable [] betters_wallet_address;
    uint [] amountPlaced;
    string [] playerSelected;


    struct PlayerInfo{
        string [] player_info_team1;
        string [] player_info_team2;
    }

    mapping (address => uint) refundamount;

    PlayerInfo players;

    event betplaced(address sender,uint amount);

    constructor(address payable ownercontract, string [] memory player_info_team1_input, string [] memory player_info_team2_input){
        owner = ownercontract;
        players = PlayerInfo(player_info_team1_input,player_info_team2_input);
    }

    function viewplayer() public view returns(PlayerInfo memory){
        return players;
    }

    function placebet(string memory playerbetplaced) public payable{
        betters_wallet_address.push(payable(msg.sender));
        amountPlaced.push(msg.value);
        playerSelected.push(playerbetplaced);

        emit betplaced(msg.sender,msg.value);
    }

    function viewbets() public view returns(address payable[] memory){
        return betters_wallet_address;
    }

    function amountrefundedplayer(address sender) public view returns(uint){
        return refundamount[sender];
    }

    function poolDistribution(string memory first, string memory second, string memory third) public {
        uint n = amountPlaced.length;
        uint winning_customers = 0;
        uint losing_customers = 0;
        uint winning_bet = 0;
        uint losing_bet = 0;
        uint [] memory customerRefund= new uint[](n);
        for(uint i = 0; i < n; i++){
            customerRefund[i]=0;
        }
        for(uint i = 0; i < n; i++){
            if(keccak256(abi.encodePacked(playerSelected[i])) == keccak256(abi.encodePacked(first)) || keccak256(abi.encodePacked(playerSelected[i])) == keccak256(abi.encodePacked(second)) || keccak256(abi.encodePacked(playerSelected[i])) == keccak256(abi.encodePacked(third))){
                winning_customers++;
                winning_bet += amountPlaced[i];
            }
            else{
                losing_customers++;
                losing_bet += amountPlaced[i];
            }
        }
        if(winning_customers == n){
            for(uint i = 0; i < n; i++){
                customerRefund[i] += amountPlaced[i];
            }
        }
        else{
            for(uint i = 0; i < n; i++){
                if(keccak256(abi.encodePacked(playerSelected[i])) == keccak256(abi.encodePacked(first)) || keccak256(abi.encodePacked(playerSelected[i])) == keccak256(abi.encodePacked(second)) || keccak256(abi.encodePacked(playerSelected[i])) == keccak256(abi.encodePacked(third))){
                    customerRefund[i] += amountPlaced[i];
                    uint bonus = ((losing_bet * amountPlaced[i])*9)/(20*winning_bet);
                    customerRefund[i] += bonus;
                    if(customerRefund[i] > 2*amountPlaced[i]){
                        customerRefund[i] = 2*amountPlaced[i];
                    }
                }
                else{
                    customerRefund[i] += amountPlaced[i]/2;
                }
            }
        }
        for(uint i = 0; i < n; i++){
            betters_wallet_address[i].transfer(customerRefund[i]);
            refundamount[betters_wallet_address[i]]+=customerRefund[i];
        }
        refundamount[owner]+=address(this).balance;
        owner.transfer(address(this).balance);
    }
}