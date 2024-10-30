//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "forge-std/console.sol";

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract erc20 is ERC20 {
    constructor() ERC20("MockERC20", "MRC20") {}

    function mint(address to, uint256 amount) external {
        _mint(to, amount);
    }
}
