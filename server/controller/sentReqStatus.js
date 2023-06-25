const getWeb3 = require("../web3/getweb3")

const sentReqStatus = async (req, res) => {
    try {
        const { key } = req.body;
        console.log("mySentRequest-key: ", key);
        const land_contract = await getWeb3();
        const result = await land_contract.methods.mySentLandRequests(key).call();
        console.log("mySentLandRequests: ", result)
        const array = [];
        for (let i = 0; i < result.length; i++) {
            console.log(result[i])
            const res = await land_contract.methods.LandRequestMap(result[i]).call();
            console.log("LandRequestMap: ", res)
            const landPrice = await land_contract.methods.landPriceFind(res.landId).call();
            console.log("landprice  : ", landPrice)
            array.push({ "reqId": res.reqId, "sellerId": res.sellerId, "buyerId": res.buyerId, "landId": res.landId, "requestStatus": res.requestStatus, "isPaymentDone": res.isPaymentDone, "landPrice": landPrice })
        }
        console.log(array)
        if (array.length !== 0) {
            res.json(array)
        } else {
            res.json("not added any")
        }
    } catch (err) {
        console.log(err)
        res.send(err.message)
    }
}
module.exports = sentReqStatus