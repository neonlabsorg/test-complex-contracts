const { ethers } = require("hardhat");

async function main() {
  const FactoryContractAt = await ethers.getContractAt(
    "FactoryContract",
    "0x3089f71E447ec91721cEd31Be19B76BEF55CB94B"
  );

  // Deploy a Factory Instance
  const deployInstance = await FactoryContractAt.deployFactoryContractInstance(
    345
  );
  await deployInstance.wait(3);

  // Get the deployed instance address
  const deployedInstanceAddress =
    await FactoryContractAt.getDeployedFactoryInstanceAddress(4);
  console.log("Address of deployed contract:", deployedInstanceAddress);

  const initialData = await FactoryContractAt.getStoredData(4);
  console.log("Initial data:", initialData);

  // Call setData function of DeployerContract to update MyContract data
  const tx = await FactoryContractAt.setData(4, 45600);
  await tx.wait(3);

  const finalData = await FactoryContractAt.getStoredData(4);
  console.log("Final data:", finalData);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
