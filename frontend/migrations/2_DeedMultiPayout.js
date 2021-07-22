const DeedMultiPayouts = artifacts.require("DeedMultiPayout");

module.exports = function(deployer, _network, accounts) {
  deployer.deploy(DeedMultiPayouts, accounts[1], accounts[0], 10,{value: 1000000});
};
 