pragma solidity 0.8.11;

contract ERC20 {
    uint256 public totalSupply;
    string public name;
    string public symbol;

    constructor(string memory _name, string memory _symbol){
        name = _name;
        symbol = _symbol;
    }

    function decimals() external pure returns (uint8) {
        return 18;
    }
}