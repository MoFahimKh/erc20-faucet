// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Faucet is ERC20 {
    constructor() ERC20("Faucet Token", "FTKN") {}

    function getTokens() public {
        _mint(msg.sender, 1000000000000000000000); //1000 FTKNs
    }
}
