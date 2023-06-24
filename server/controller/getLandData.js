const getWeb3 = require("../web3/getweb3")

const getLandData = async (req, res) => {
    console.log("get user data called")
    try {
        const { landId } = req.body;
        console.log(landId)
        const land_contract = await getWeb3();
        const result = await land_contract.methods.landsMap(landId).call();
        console.log(result)
        res.json(result)
    } catch (err) {
        console.log(err)
        res.send(err.message)
    }
}

module.exports = getLandData