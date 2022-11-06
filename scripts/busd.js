
async function main() {


    const BEP20Token = await hre.ethers.getContractFactory("BEP20Token");
    const busd = await BEP20Token.deploy();
  
    await busd.deployed();
  
    console.log(`Token is Deployed on ${busd.address}`);
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  