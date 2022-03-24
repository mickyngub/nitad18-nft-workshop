const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("PPS addTargets", function () {
  it("Should add recipients", async function () {
    const [addr0, addr1, addr2, addr3] = await ethers.getSigners();
    const PushPaymentSplitter = await hre.ethers.getContractFactory(
      "PushPaymentSplitter"
    );
    const pushPaymentSplitter = await PushPaymentSplitter.connect(
      addr0
    ).deploy();
    await pushPaymentSplitter.deployed();

    await pushPaymentSplitter
      .connect(addr0)
      .addTargets([addr1.address, addr2.address, addr3.address]);

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
    const pushPaymentSplitter = await PushPaymentSplitter.connect(
      addr0
    ).deploy();
    await pushPaymentSplitter
      .connect(addr0)
      .addTargets([addr1.address, addr2.address, addr3.address]);

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

describe("PPS Split", function () {
  it("Should be able to split contract's balance to recipients", async function () {
    const [addr0, addr1, addr2, addr3] = await ethers.getSigners();
    const PushPaymentSplitter = await hre.ethers.getContractFactory(
      "PushPaymentSplitter"
    );
    const pushPaymentSplitter = await PushPaymentSplitter.connect(
      addr0
    ).deploy();
    await pushPaymentSplitter.deployed();

    await pushPaymentSplitter
      .connect(addr0)
      .addTargets([addr1.address, addr2.address, addr3.address]);

    await addr0.sendTransaction({
      to: pushPaymentSplitter.address,
      value: ethers.utils.parseEther("3"),
    });

    expect(
      await ethers.provider.getBalance(pushPaymentSplitter.address)
    ).to.equal(ethers.utils.parseEther("3"));

    await pushPaymentSplitter.connect(addr0).split();

    expect(
      await ethers.provider.getBalance(pushPaymentSplitter.address)
    ).to.equal(ethers.utils.parseEther("0"));

    console.log("addr1 balance", await addr1.getBalance());
    expect(await addr1.getBalance()).to.be.at.least(
      ethers.utils.parseEther("10001")
    );
    expect(await addr2.getBalance()).to.be.at.least(
      ethers.utils.parseEther("10001")
    );
    expect(await addr3.getBalance()).to.be.at.least(
      ethers.utils.parseEther("10001")
    );
  });
});
