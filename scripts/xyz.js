
async function main() {


  const XYZ = await hre.ethers.getContractFactory("MyToken");
  const xyz = await XYZ.deploy("MYTOKEN", "XYZ");

  await xyz.deployed();

  console.log(`Token is Deployed on ${xyz.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
