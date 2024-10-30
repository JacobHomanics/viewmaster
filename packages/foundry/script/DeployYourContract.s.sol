//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "../contracts/YourContract.sol";
import "./DeployHelpers.s.sol";

import {erc20} from "../contracts/erc20.sol";

import {Entries} from "../contracts/Entries.sol";

contract DeployYourContract is ScaffoldETHDeploy {
    // use `deployer` from `ScaffoldETHDeploy`
    function run() external ScaffoldEthDeployerRunner {
        erc20 mockERC20 = new erc20();
        Entries entries = new Entries(address(mockERC20), 4);
        // YourContract yourContract = new YourContract(deployer);
        // console.logString(
        //     string.concat(
        //         "YourContract deployed at: ",
        //         vm.toString(address(yourContract))
        //     )
        // );
    }
}
