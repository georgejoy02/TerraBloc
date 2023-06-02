// eslint-disable-next-line no-undef
const landContract = artifacts.require("Land");

module.exports = (deployer)=> {
  deployer.deploy(landContract);
};
