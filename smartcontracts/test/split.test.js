const { expect } = require("chai");
const { ethers } = require("hardhat");

const accounts = [];
for (let i = 0; i < 30; i++) {
  const account = ethers.Wallet.createRandom();
  accounts.push(account.address);
}

describe("PPS split", function () {
  it("should split", async function () {
    const [addr0, addr1, addr2, addr3] = await ethers.getSigners();
    const PushPaymentSplitter = await hre.ethers.getContractFactory(
      "PushPaymentSplitter"
    );
    const pushPaymentSplitter = await PushPaymentSplitter.connect(
      addr0
    ).deploy();
    await pushPaymentSplitter.deployed();
    await addr0.sendTransaction({
      to: pushPaymentSplitter.address,
      value: ethers.utils.parseEther("1"),
    });
    await pushPaymentSplitter.split(accounts);
  });
});
