// SPDX-License-Identifier: MIT
// AUTHOR: yoyoismee.eth
// Modified by: mickyngub / palsp

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

// @notice just a push payment splitter. not the best practice. use it on trusted address only
contract PushPaymentSplitter is Ownable, ReentrancyGuard {

    receive() external payable {}
    fallback() external payable {}

    // @notice receive addresses and push balance to all recipients.
    function split(address[] memory _recipients) external onlyOwner nonReentrant {
        uint256 amount = address(this).balance / _recipients.length;
        for (uint256 i = 0; i < _recipients.length; i++) {
            payable(_recipients[i]).transfer(amount);
        }
    }
}