const hre = require("hardhat");

async function main() {
  // Get a Flipper contract on already deployed address
  const flipperAddress = (process.env.FLIPPER_ADDRESS) ? process.env.FLIPPER_ADDRESS :  "0x0b528946Ed47DE2bF19Ca88B10f1349a782a2e4f";
  
  const alice = await hre.reef.getSignerByName("alice")
  const flipper = await hre.reef.getContractAt("Flipper", flipperAddress, alice);

  // Call flip()
  console.log("Current value:", await flipper.get());
  await flipper.flip();
  console.log("New value after flip():", await flipper.get());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });