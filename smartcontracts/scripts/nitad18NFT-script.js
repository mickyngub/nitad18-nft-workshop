const hre = require("hardhat");

const main = async () => {
  const Nitad18NFT = await hre.ethers.getContractFactory("Nitad18NFT");
  const nitad18NFT = await Nitad18NFT.deploy();
  await nitad18NFT.deployed();
  console.log("Nitad18NFT address:", nitad18NFT.address);
};
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
