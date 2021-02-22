// Rain.credit Token $RAIN
// © 2021 Rain Credit
// SPDX-License-Identifier: MIT

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Burnable.sol";

pragma solidity ^0.6.0;

contract RainToken is ERC20, ERC20Burnable {
    uint8 constant DECIMALS = 18;
    uint256 constant TOTAL_SUPPLY = 800_000 * 10**uint256(DECIMALS);

    constructor(string memory _name, string memory _symbol)
        public
        ERC20(_name, _symbol)
    {
        require(_msgSender() != address(0));
        _mint(_msgSender(), TOTAL_SUPPLY);
    }
}
