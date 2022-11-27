const main = async () => {

    const signer = await hre.reef.getSignerByName("MyAccount");
    await signer.claimDefaultAccount();


    const domainContractFactory = await hre.reef.getContractFactory("Domains",signer);
    const domainContract = await domainContractFactory.deploy("rf");
    await domainContract.deployed();
  
    console.log("Contract deployed to:", domainContract.address);
  
    // CHANGE THIS DOMAIN TO SOMETHING ELSE! I don't want to see OpenSea full of bananas lol
    let txn = await domainContract.register("banana",  {value: hre.reef.utils.parseEther('10')});
    await txn.wait();
    console.log("Minted domain banana.rf");
  
    txn = await domainContract.setRecord("banana", "Am I a banana or a ninja??");
    await txn.wait();
    console.log("Set record for banana.rf");
  
    const address = await domainContract.getAddress("banana");
    console.log("Owner of domain banana:", address);
  
    const balance = await hre.reef.provider.getBalance(domainContract.address);
    console.log("Contract balance:", hre.reef.utils.formatEther(balance));
  }
  
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