const getWeb3 = require("../web3/getweb3");

const checkOwner = async (req, res) => {
  try {
    const { ownerKey } = req.body;
    const land_contract = await getWeb3();
    const result = await land_contract.methods.isContractOwner(ownerKey).call();
    if (result) {
      res.json("contract owner logged in");
    } else {
      res.json("not owner key");
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = checkOwner;
