const { ethers } = require("hardhat");

async function main() {
  const SimpleStorageContract = await ethers.getContractFactory(
    "SimpleStorageContract"
  );

  const simpleStorageContract = await SimpleStorageContract.deploy();
  await simpleStorageContract.waitForDeployment();
  console.log(
    "Simple Storage Contract deployed to:",
    simpleStorageContract.target
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
