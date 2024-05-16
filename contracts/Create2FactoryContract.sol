// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./DeployedCreate2Contract.sol";

contract Create2FactoryContract {
    event Deployed(address addr, uint256 salt);

    function deploy(uint256 _salt, bytes memory bytecode) public returns (address) {
        address addr;

        assembly {
            addr := create2(0, add(bytecode, 0x20), mload(bytecode), _salt)
            if iszero(extcodesize(addr)) {
                revert(0, 0)
            }
        }

        emit Deployed(addr, _salt);
        return addr;
    }

    function getBytecode(uint256 _value) public pure returns (bytes memory) {
        bytes memory bytecode = type(DeployedCreate2Contract).creationCode;
        return abi.encodePacked(bytecode, abi.encode(_value));
    }
}
