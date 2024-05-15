// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

contract SimpleStorageContract {
    uint256 public someValue;

    function setValue(uint256 _someValue) external {
        someValue = _someValue;
    }

    function getValue() external view returns (uint256) {
        return someValue;
    }
}