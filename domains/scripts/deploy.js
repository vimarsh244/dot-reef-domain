const hre = require("hardhat");

const main = async () => {

  const signer = await hre.reef.getSignerByName("MyAccount");
  await signer.claimDefaultAccount();

  const domainContractFactory = await hre.reef.getContractFactory(
    "Domains",
    signer
  );
  const domainContract = await domainContractFactory.deploy("rf");
  await domainContract.deployed();

  console.log("Contract deployed to:", domainContract.address);

  let txn = await domainContract.register("sample-domain", {
    value: hre.reef.utils.parseEther("10"), //10 REEF tokens
  });
  await txn.wait();
  console.log("Minted domain");

  txn = await domainContract.setRecord("sample-domain", "ig it works?");
  await txn.wait();
  console.log("Set record for domain");

  const address = await domainContract.getAddress("sample-domain");
  console.log("Owner of domain:", address);

  const balance = await hre.reef.provider.getBalance(domainContract.address);
  console.log("Contract balance:", hre.reef.utils.formatEther(balance));
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
