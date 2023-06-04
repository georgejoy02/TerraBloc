const web3Init = require("../web3/getweb3")
const Web3 = require("web3")

const userVerify = async (req, res) => {
    try {
        const { userKey } = req.body
        const rpcURL = process.env.RPC_URL;
        const web3 = new Web3(rpcURL)
        const land_contract = await web3Init();
        const addresses = await web3.eth.getAccounts();
        const LiAddr=addresses[1]
        await land_contract.methods.verifyUser(userKey)
            .send({ from: LiAddr, gas: '1000000' })
            .then(
                (val) => {
                    console.log(val.events);
                    res.json(val)
                },
                (error) => {
                    console.log(error.reason);
                    res.json(error.reason)
                }
            );
    } catch (err) {
        console.log(err)
    }

}

module.exports = userVerify