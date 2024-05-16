// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DeployedCreate2Contract {
    uint256 public value;

    constructor(uint256 _value) {
        value = _value;
    }

    function getValue() public view returns (uint256) {
        return value;
    }
}