import NFT_ABI from "src/abi/NITAD18NFT.json";
import { Contract } from "@ethersproject/contracts";
import { ethers } from "ethers";

const useContract = () => {
  const NFT_ADDRESS = "0x44f964aC98355aE48f64bf4BC5db81d6d485D8Fb";
  const NFT_INTERFACE = new ethers.utils.Interface(NFT_ABI);
  const NFT_CONTRACT = new Contract(NFT_ADDRESS, NFT_INTERFACE);
  return {
    NFT_CONTRACT,
    NFT_INTERFACE,
    NFT_ADDRESS,
  };
};

export default useContract;
