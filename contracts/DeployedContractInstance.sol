// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Contract that will be deployed by another contract
contract DeployedContractInstance {
    uint256 public value;

    constructor(uint256 _data) {
        value = _data;
    }

    function setData(uint256 _data) external {
        value = _data;
    }

    function getStoredData() external view returns (uint256) {
        return value;
    }
}