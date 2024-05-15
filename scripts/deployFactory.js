const { ethers } = require("hardhat");

async function main() {
  const FactoryContract = await ethers.getContractFactory("FactoryContract");

  const factoryContract = await FactoryContract.deploy();
  //await factoryContract.waitForDeployment();
  console.log("Factory Contract deployed to:", factoryContract.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
