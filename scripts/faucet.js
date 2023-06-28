const { ethers } = require('hardhat');

async function main() {
  const deployer = await ethers.getSigners();
  const Faucet = await ethers.getContractFactory('Faucet');
  const faucet = await Faucet.deploy();
  await faucet.deployed();
  console.log('Faucet deployed to:', faucet.address);

  // Get tokens from faucet
  const tx = await faucet.getTokens();
  await tx.wait();
  console.log('Tokens distributed!');
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
