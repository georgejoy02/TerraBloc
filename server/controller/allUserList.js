const getWeb3 = require("../web3/getweb3")

const allUserList = async (req, res) => {
    try {
        const land_contract = await getWeb3();
        const result = await land_contract.methods.ReturnAllUserList().call();
        if (result.length !== 0) {
            res.json(result)
        } else {
            res.json("not added any")
        }
    } catch (err) {
        console.log(err)
        res.send(err.message)
    }
}
module.exports = allUserList