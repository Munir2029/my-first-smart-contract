// EN: Import testing tools (chai for assertions, hardhat ethers for contract interaction)
// DE: Test-Tools importieren (chai für Assertions, hardhat ethers für Vertragsinteraktion)
// AR:
// - استيراد أدوات الاختبار
// - chai للتحقق من النتائج
// - ethers للتعامل مع العقد
const { expect } = require("chai");
const { ethers } = require("hardhat");

// EN: SimpleStorage tests (deploy fresh contract before each test, then verify default and updated values)
// DE: SimpleStorage-Tests (vor jedem Test neu deployen, dann Standard- und neue Werte prüfen)
// AR:
// - اختبارات SimpleStorage
// - نشر عقد جديد قبل كل اختبار
// - التحقق من القيمة الابتدائية ثم القيمة بعد التغيير

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
