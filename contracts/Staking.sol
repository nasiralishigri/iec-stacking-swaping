// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./IBEP20.sol";

contract Staking{

    address owner;
    IBEP20 ercToken; //

    IBEP20 busd;
    mapping(address=> uint256) tokenStake;
    mapping(address=> uint256) stakingTime;

    constructor(address ercToken_, address _busd){
        ercToken = IBEP20(ercToken_);
        busd = IBEP20(_busd);
         owner = msg.sender;
    }


    function stack(uint256 stakeAmount)public { 

        require(ercToken.allowance( msg.sender , address(this) )>= stakeAmount,"NOT_ENOUGH_TOKEN_APPROVE");  //(address _owner, address spender)
        require(ercToken.balanceOf(msg.sender)>= stakeAmount,"NOT_ENOUGH_TOKEN");

        ercToken.transferFrom(msg.sender, address(this), stakeAmount);

        tokenStake[msg.sender] += stakeAmount;

        stakingTime[msg.sender] = block.timestamp;

    }
    function claimReward() public {
        require(tokenStake[msg.sender]> 0,"USER_DOESN'T_STAKE");
        require(stakingTime[msg.sender]> 0,"NOT_MEET_CLAIMING");
        
        uint256 stakeTAmount = tokenStake[msg.sender];
        tokenStake[msg.sender] = 0;
        ercToken.transfer(msg.sender, stakeTAmount);

        // ercToken.transfer(msg.sender, tokenStake[msg.sender]);
        // tokenStake[msg.sender] = 0;


        busd.transfer(msg.sender, 50000);
    }
    // witdrawUsd
    // WithdrawToken
}