// scripts/deploy.js
async function main() {
    // ethers is avaialble in the global scope
    const [deployer] = await ethers.getSigners();
    console.log(
        "Deploying the contracts with the account:",
        await deployer.getAddress()
    );

    const RainToken = await ethers.getContractFactory("RainToken");
    console.log("Deploying Rain Token...");
    // const rainToken = await upgrades.deployProxy(RainToken, ['Rain.Credit', 'RAIN'], {
    //     initializer: 'initialize'
    // });
    const rainToken = await RainToken.deploy('Rain.Credit', 'RAIN');
    console.log("Rain token deployed to:", rainToken.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });