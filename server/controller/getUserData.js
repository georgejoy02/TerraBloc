const getWeb3 = require("../web3/getweb3")

const getUserData = async (req, res) => {
    console.log("get user data called")
    try {
        const { key } = req.body;
        console.log(key)
        const land_contract = await getWeb3();
        const result = await land_contract.methods.UserMap(key).call();
        console.log(result)
        res.json(result)
    } catch (err) {
        console.log(err)
        res.send(err.message)
    }
}

module.exports = getUserData