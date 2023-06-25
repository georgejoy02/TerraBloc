const getWeb3 = require("../web3/getweb3");

const ownerLogin = async (req, res) => {
  try {
    const { key } = req.body;
    console.log("fe: ", key);
    const land_contract = await getWeb3();
    const result = await land_contract.methods.isContractOwner(key).call();
    if (result == true) {
      res.json(true);
    } else {
      res.json("not the contract owner");
    }
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
};

module.exports = ownerLogin;
