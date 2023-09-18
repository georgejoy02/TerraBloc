const getWeb3 = require("../web3/getweb3");

const allLiList = async (req, res) => {
  try {
    const liArr = [];
    const land_contract = await getWeb3();
    const result = await land_contract.methods
      .ReturnAllLandIncpectorList()
      .call();
    if (result.length !== 0) {
      for (let i = 0; i < result.length; i++) {
        const res = await land_contract.methods.InspMap(result[i]).call();
        liArr.push(res);
      }
      res.json(liArr);
    } else {
      res.json("not added any");
    }
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
};
module.exports = allLiList;
