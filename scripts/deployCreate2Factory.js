const hre = require("hardhat");

async function main() {
  const Create2Factory = await hre.ethers.getContractFactory(
    "Create2FactoryContract"
  );
  const factory = await Create2Factory.deploy();
  await factory.waitForDeployment();
  console.log("Create2Factory deployed to:", factory.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
