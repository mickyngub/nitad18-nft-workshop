import NFT_ABI from "src/abi/NITAD18NFT.json";
import { Contract } from "@ethersproject/contracts";
import { ethers } from "ethers";

const useContract = () => {
  const NFT_ADDRESS = "0x3A53ed558ABe74cDb12032097628B7c330C36d88";
  const NFT_INTERFACE = new ethers.utils.Interface(NFT_ABI);
  const NFT_CONTRACT = new Contract(NFT_ADDRESS, NFT_INTERFACE);
  return {
    NFT_CONTRACT,
    NFT_INTERFACE,
    NFT_ADDRESS,
  };
};

export default useContract;
