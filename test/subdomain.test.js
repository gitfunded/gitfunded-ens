const ENSProxy = artifacts.require('./ENSProxy.sol');
const ENSSd = artifacts.require("ENSSubdomainRegistrar");

const namehash = require('eth-ens-namehash');


contract('ENSProxy', (accounts) => {
    let ensProxyInstance, sdRegistrarInstance;

    const account_a = accounts[0];

    before(async () => {
        ensProxyInstance = await ENSProxy.deployed();
        sdRegistrarInstance = await ENSSd.at(await ensProxyInstance.sdRegistrar());

    });

    beforeEach(async () => {

    });

    describe('deployment', async () => {
        it('deploys successfully', async () => {

            // Checking for valid contract account address

            assert.equal(ensProxyInstance.address.length, 42);
            assert.equal(sdRegistrarInstance.address.length, 42);

        });

    });

    describe('subdomain registrar', async () => {
        it('create name', async () => {

         // Add tests here

        });
    });
});
