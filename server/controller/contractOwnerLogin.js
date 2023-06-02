const getWeb3 = require("../web3/getweb3")

const checkOwner = async (req, res) => {
    try {
        const { privateKey } = req.body
        const land_contract = await getWeb3();
        // console.log(land_contract)
        const result = await land_contract.methods.isContractOwner(privateKey).call();
        if (result) {
            res.json("contract owner logged in")
        } else {
            res.json("not owner key")
        }
    } catch (err) {
        console.log(err)
    }

}

module.exports = checkOwner