const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SimpleStorage", function () {
    let simpleStorage;

    beforeEach(async function () {
        const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
        simpleStorage = await SimpleStorage.deploy();
        await simpleStorage.deployed();
    });

    it("Should start with 0", async function () {
        expect((await simpleStorage.getNumber()).toString()).to.equal("0");
    });

    it("Should store and return a number", async function () {
        await simpleStorage.setNumber(42);
        const result = await simpleStorage.getNumber();
        expect(result.toString()).to.equal("42");
    });
});
