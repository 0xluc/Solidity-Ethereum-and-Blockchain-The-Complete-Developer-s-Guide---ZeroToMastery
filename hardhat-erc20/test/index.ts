import { ERC20 } from "./../typechain-types/ERC20";
import { expect } from "chai";
import { ethers } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

describe("MyERC20Contract", function () {
  let myERC20Contract: ERC20;
  let someAddress: SignerWithAddress;
  let someOtherAddress: SignerWithAddress;
  beforeEach(async function () {
    const ERC20ContractFactory = await ethers.getContractFactory("ERC20");
    myERC20Contract = await ERC20ContractFactory.deploy("Hello", "SYM");
    await myERC20Contract.deployed();

    someAddress = (await ethers.getSigners())[1];
    someOtherAddress = (await ethers.getSigners())[2];
  });
  describe("When I have 10 tokens", function () {
    beforeEach(async function () {
      await myERC20Contract.transfer(someAddress.address, 10);
    });

    describe("When I transfer 10 tokens", function () {
      it("Should transfer tokens correctly", async function () {
        await myERC20Contract
          .connect(someAddress)
          .transfer(someOtherAddress.address, 10);
        expect(
          await myERC20Contract.balanceOf(someOtherAddress.address)
        ).to.equal(10);
      });
    });
    describe("When I transfer 15 tokens", function () {
      it("Should revert the transaction", async function () {
        await expect(myERC20Contract
          .connect(someAddress)
          .transfer(someOtherAddress.address, 15)).to.be.revertedWith("ERC20: transfer amount exceeds balance")

      });
    });
  });
});
