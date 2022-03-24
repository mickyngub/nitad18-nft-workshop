//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract Nitad18NFT is ERC721Enumerable {
    using Strings for uint256;
    uint256 public constant MAX_SUPPLY = 200;
    address public immutable owner;
    Stage public stage;
    string public baseURI;
    string internal baseExtension = ".json";

    enum Stage {
        Public,
        Pause
    }

    modifier onlyOwner() {
        require(owner == _msgSender(),"Nitad18NFT: not owner");
        _;
    }

    event StageChanged(Stage from, Stage to);

    constructor() ERC721("Nitad18","NT18") {
        owner = _msgSender();
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory){
        require(_exists(tokenId), "Nitad18NFT: DNE");
        string memory currentBaseURI = _baseURI();
        return (
            bytes(currentBaseURI).length > 0
                ? string(
                abi.encodePacked(currentBaseURI, tokenId.toString(), baseExtension)
                )
                : ""
            );
    }

    function setStage(Stage _stage) external onlyOwner {
        require(stage != _stage , "Nitad18NFT: invalid stage.");
        Stage prevStage = stage;
        stage = _stage;
        emit StageChanged(prevStage, stage);
    }

    function setBaseURI(string memory _newBaseURI) external onlyOwner {
        baseURI = _newBaseURI;
    }

    function mint() external {
        _beforeMint();
        _safeMint(msg.sender, 1);
    }

    function _beforeMint() internal view {
        uint256 currentSupply = totalSupply();
        require(currentSupply + 1 <= MAX_SUPPLY, "Nitad18NFT: exceed max supply.");
        if (stage == Stage.Pause) {
            revert("Nitad18NFT: mint is pause.");
        }
    }

}