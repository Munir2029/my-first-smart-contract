// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract SimpleStorage{
uint256 private number;

event NumberChanged (uint256 newNumber);


function setNumber(uint256 newNumber)
public{
number = newNumber;
emit NumberChanged(newNumber);
}

function getNumber() public view
returns (uint256) {
return number;
}
}