pragma solidity 0.8.18;
import {ERC20} from "./ERC20.sol";

contract DepositorCoin is ERC20{
    address public owner;
    constructor() ERC20("DepositorCoin", "DPC"){
        owner = msg.sender;
    }
    function mint(address to, uint256 amount) external {
        require(msg.sender == owner, "DPC: only owner can mint");
        _mint(to, amount);
    }
    function brun(address from, uint256 amount) external {
        require(msg.sender == owner, "DPC: only owner can burn");
        _burn(from, amount);
    }
}