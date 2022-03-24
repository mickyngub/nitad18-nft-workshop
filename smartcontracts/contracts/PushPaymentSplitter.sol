// SPDX-License-Identifier: MIT
// AUTHOR: yoyoismee.eth
// Modified by: mickyngub 

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

// @notice just a push payment splitter. not the best practice. use it on trusted address only
contract PushPaymentSplitter is Ownable, ReentrancyGuard {
    address[] public recipients;

    // @notice init with a list of recipients
    constructor(address[] memory _recipients) {
        for (uint256 i = 0; i < _recipients.length; i++) {
            recipients.push(_recipients[i]);
        }
    }
    receive() external payable {}
    fallback() external payable {}
    // @notice add new recipient
    function addTarget(address recipient) external onlyOwner {
        recipients.push(recipient);
    }

    // @notice add new recipients
    function addTargets(address[] memory _recipients) external onlyOwner {
        for (uint256 i = 0; i < _recipients.length; i++) {
            recipients.push(_recipients[i]);
        }
    }

    // @notice push balance to all recipients.
    function split() external onlyOwner nonReentrant {
        uint256 amount = address(this).balance / recipients.length;
        for (uint256 i = 0; i < recipients.length; i++) {
            payable(recipients[i]).transfer(amount);
        }
    }
}