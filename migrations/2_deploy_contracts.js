const ENSProxy = artifacts.require("ENSProxy");
const keccak256 = require('js-sha3').keccak_256;

// TODO: align the contract name with the source code file name.
const web3 = new (require('web3'))();
const namehash = require('eth-ens-namehash');

/**
 * Calculate root node hashes given the top level domain(tld)
 *
 * @param {string} tld plain text tld, for example: 'eth'
 */
function getRootNodeFromTLD(tld) {
  return {
    namehash: namehash.hash(tld),
    sha3: web3.utils.sha3(tld)
  };
}

/**
 * Deploy the ENS and FIFSRegistrar
 *
 */

module.exports = async function(deployer, network) {
  var tld = 'eth';
  let subDomain = 'gitfunded';
  var rootNode = '0x' + keccak256(subDomain);
    deployer.then(async () => {

        await deployer.deploy(ENSProxy).then(async (ens) => {

            console.log("ENS Registry address: ", ens.address);
            await ens.deploySubdomainRegistrar(rootNode).then((tx)=>{console.log("Sub domain Registry deployed")});

        });



    });



};
