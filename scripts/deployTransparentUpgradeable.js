const { ethers } = require("hardhat");

async function main() {
  const TransparentUpgradeableContractFactory =
    await hre.ethers.getContractFactory("TransparentUpgradeableContract");
  const TransparentUpgradeableContract = await upgrades.deployProxy(
    TransparentUpgradeableContractFactory,
    [],
    { kind: "transparent" }
  );
  await TransparentUpgradeableContract.waitForDeployment();

  console.log(
    `TransparentUpgradeableContract proxy deployed to ${TransparentUpgradeableContract.target}`
  );
  console.log(
    `TransparentUpgradeableContract implementation deployed to ${await upgrades.erc1967.getImplementationAddress(
      TransparentUpgradeableContract.target
    )}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
