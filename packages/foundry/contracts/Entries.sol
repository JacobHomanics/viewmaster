//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "forge-std/console.sol";

import "@openzeppelin/contracts/interfaces/IERC20.sol";

contract Entries {
    error NotEnoughTokens();
    error AlreadyVoted();
    error NotOwner();

    uint256 s_entriesCount;
    mapping(uint256 id => uint256) s_upvoteCount;
    mapping(uint256 id => mapping(address => bool)) s_voted;
    IERC20 s_token;
    address s_owner;

    constructor(address owner, address tokenAddress, uint256 entriesCount) {
        s_entriesCount = entriesCount;
        s_token = IERC20(tokenAddress);
        s_owner = owner;
    }

    function getUpvoteCount(uint256 id) external view returns (uint256) {
        return s_upvoteCount[id];
    }

    function upvote(uint256 id) external {
        if (s_token.balanceOf(msg.sender) < 1000) {
            revert NotEnoughTokens();
        }

        if (s_voted[id][msg.sender]) {
            revert AlreadyVoted();
        }

        s_upvoteCount[id]++;
        s_voted[id][msg.sender] = true;

        // if (s_token.balanceOf(msg.sender) >= 3000) {
        //     s_token.transferFrom(msg.sender, address(this), 100);
        // }

        // if (s_token.balanceOf(msg.sender) < 3000) {
        //     s_token.transferFrom(address(this), msg.sender, 100);
        // }
    }

    function withdraw() external {
        if (msg.sender != s_owner) {
            revert NotOwner();
        }

        s_token.transfer(s_owner, s_token.balanceOf(address(this)));
    }
}
