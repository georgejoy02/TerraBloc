const getWeb3 = require("../web3/getweb3");

const adminLogin = async (req, res) => {
  try {
    const { key } = req.body;
    console.log("fe: ", key);
    const land_contract = await getWeb3();
    const result = await land_contract.methods.isLandInspector(key).call();
    if (result == true) {
      res.json(true);
    } else {
      res.json("not an admin");
    }
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
};

module.exports = adminLogin;
