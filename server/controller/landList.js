const getWeb3 = require("../web3/getweb3");

const landList = async (req, res) => {
  const land_contract = await getWeb3();
  const landArr = [];
  try {
    const landlist = await land_contract.methods.ReturnAllLandList().call();
    console.log("landlist: ", landlist);
    if (Array.isArray(landlist) && landlist.length > 0) {
      for (let i = 0; i < landlist.length; i++) {
        const landdetails = await land_contract.methods
          .landsMap(landlist[i])
          .call();
        console.log("land details: ", landdetails);
        if (landdetails.isforSell) {
          landArr.push(landdetails);
        }
      }
      res.json(landArr);
    } else {
      console.log("empty land list");
      res.json([]);
    }
  } catch (err) {
    console.log(err);
    // res.send(err.message)
  }
};
module.exports = landList;
