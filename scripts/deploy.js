
const hre = require("hardhat");

async function main() {
  const CONTRACT = await hre.ethers.getContractFactory("Verify");
  const contract = await CONTRACT.deploy();
  await contract.deployed();
  console.log("contract deployed to:", contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});