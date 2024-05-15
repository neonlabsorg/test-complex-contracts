// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./DeployedContractInstance.sol";

// Contract that deploys MyContract
contract FactoryContract {
    DeployedContractInstance[] public DeployedContractsArray;

    function deployFactoryContractInstance(uint256 _initialValue) external {
        DeployedContractInstance deployedContract = new DeployedContractInstance(_initialValue);
        DeployedContractsArray.push(deployedContract);
    }

    function getDeployedFactoryInstanceAddress(uint256 _index) external view returns (address) {
        return address(DeployedContractsArray[_index]);
    }

    function setData(uint256 _index, uint256 _value) external {
        // Call MyContract's setData function
        DeployedContractsArray[_index].setData(_value);
    }

    function getStoredData(uint256 _index) external view returns (uint256) {
        return DeployedContractsArray[_index].getStoredData();
    }
}
