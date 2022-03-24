const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("PPS constructor", function () {
  it("Should have correct recipients from constructor array", async function () {
    const [addr0, addr1, addr2, addr3] = await ethers.getSigners();
    const PushPaymentSplitter = await hre.ethers.getContractFactory(
      "PushPaymentSplitter"
    );
    const pushPaymentSplitter = await PushPaymentSplitter.connect(addr0).deploy(
      [addr1.address, addr2.address, addr3.address]
    );
    await pushPaymentSplitter.deployed();

    expect(await pushPaymentSplitter.recipients(0)).to.equal(addr1.address);
    expect(await pushPaymentSplitter.recipients(1)).to.equal(addr2.address);
    expect(await pushPaymentSplitter.recipients(2)).to.equal(addr3.address);
  });
});

describe("PPS receive", function () {
  it("Should be able to receive sent matic", async function () {
    const [addr0, addr1, addr2, addr3] = await ethers.getSigners();
    const PushPaymentSplitter = await hre.ethers.getContractFactory(
      "PushPaymentSplitter"
    );
    const pushPaymentSplitter = await PushPaymentSplitter.connect(addr0).deploy(
      [addr1.address, addr2.address, addr3.address]
    );
    await pushPaymentSplitter.deployed();
    await addr0.sendTransaction({
      to: pushPaymentSplitter.address,
      value: ethers.utils.parseEther("1"),
    });
    expect(await addr0.getBalance()).to.be.at.least(
      ethers.utils.parseEther("98.8")
    );
    expect(
      await ethers.provider.getBalance(pushPaymentSplitter.address)
    ).to.equal(ethers.utils.parseEther("1"));
  });
});
