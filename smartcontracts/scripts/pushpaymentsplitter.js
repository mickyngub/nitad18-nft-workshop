const hre = require("hardhat");

const main = async () => {
  const [addr0, addr1, addr2, addr3] = await ethers.getSigners();
  const PushPaymentSplitter = await hre.ethers.getContractFactory(
    "PushPaymentSplitter"
  );
  const pushPaymentSplitter = await PushPaymentSplitter.deploy();

  await pushPaymentSplitter.deployed();

  //   console.log("PushPaymentSplitter deployed to:", pushPaymentSplitter.address);
  //   let arrayRecipients = await pushPaymentSplitter.recipients(2);

  console.log("PushPaymentSplitter address", pushPaymentSplitter.address);
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
