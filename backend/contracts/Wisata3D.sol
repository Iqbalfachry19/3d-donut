// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Import this file to use console.log
import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
contract Wisata3D is ERC721URIStorage    {
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;
string public baseURI;
    constructor(string memory _baseURI) ERC721("Wisata3D", "W3D") {
        baseURI = _baseURI;
      mint(_baseURI);
    }

        
    

   function mint(string memory tokenURI) public returns(uint256) {
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);
        return newItemId;
    }

   
}
