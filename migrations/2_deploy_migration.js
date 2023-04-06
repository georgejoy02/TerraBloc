
// eslint-disable-next-line no-undef
const landContract = artifacts.require("Land");

module.exports = function(deployer) {
  deployer.deploy(landContract);
};
