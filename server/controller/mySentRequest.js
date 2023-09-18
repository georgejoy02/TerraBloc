const getWeb3 = require("../web3/getweb3");

const mySentRequest = async (req, res) => {
  try {
    const { key } = req.body;
    console.log("mySentRequest-key: ", key);
    const land_contract = await getWeb3();
    const result = await land_contract.methods.mySentLandRequests(key).call();
    console.log("mySentLandRequests: ", result);
    const array = [];
    for (let i = 0; i < result.length; i++) {
      console.log(result[i]);
      const res = await land_contract.methods.LandRequestMap(result[i]).call();
      console.log("LandRequestMap: ", typeof res.landId);
      array.push(res.landId);
    }
    console.log(array);
    if (array.length !== 0) {
      res.json(array);
    } else {
      res.json("not added any");
    }
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
};
module.exports = mySentRequest;
