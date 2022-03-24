import NFT_ABI from "src/abi/NITAD18NFT.json";
import { Contract } from "@ethersproject/contracts";
import { ethers } from "ethers";

const useContract = () => {
  const NFT_ADDRESS = "0xc0b19635cfEb6772e8cF237c398D00567e16b9Bf";
  const NFT_INTERFACE = new ethers.utils.Interface(NFT_ABI);
  const NFT_CONTRACT = new Contract(NFT_ADDRESS, NFT_INTERFACE);
  return {
    NFT_CONTRACT,
    NFT_INTERFACE,
    NFT_ADDRESS,
  };
};

export default useContract;
