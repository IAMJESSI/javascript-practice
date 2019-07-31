const SDK = require("codechain-sdk");

const sdk = new SDK({
    server: "https://corgi-rpc.codechain.io",
    networkId: "wc"
})

async function main() {
    const address = await sdk.key.createPlatformAddress();
    console.log(address.toString());
}

main();