const hre = require("hardhat");

const main = async () => {
  const [addr0, addr1, addr2, addr3] = await ethers.getSigners();
  const PushPaymentSplitter = await hre.ethers.getContractFactory(
    "PushPaymentSplitter"
  );
  const pushPaymentSplitter = await PushPaymentSplitter.connect(addr0).deploy([
    addr1.address,
    addr2.address,
    addr3.address,
  ]);

  await pushPaymentSplitter.deployed();

  console.log("PushPaymentSplitter deployed to:", pushPaymentSplitter.address);
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
