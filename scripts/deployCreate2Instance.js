const hre = require("hardhat");

async function main() {
  const factory = await ethers.getContractAt(
    "Create2FactoryContract",
    "0x54B366a3345d517BBbD85f51585Ef92Ca3c7354e" // Replace this with your own factory contract
  );

  const value = 42;
  const bytecode = await factory.getBytecode(value);
  const salt = 2;

  const deployTx = await factory.deploy(salt, bytecode);
  const receipt = await deployTx.wait(3);
  console.log("Contract instance deployed:", receipt.logs[0].args[0]);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
