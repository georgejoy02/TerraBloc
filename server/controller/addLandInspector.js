const web3Init = require("../web3/getweb3")
const Web3 = require("web3")

const addLinsp = async (req, res) => {
    const { LiAddr, Name, Age, Desig, City } = req.body
    const rpcURL = process.env.RPC_URL;
    const web3 = new Web3(rpcURL)
    const land_contract = await web3Init();
    const addresses = await web3.eth.getAccounts();
    await land_contract.methods.addLandInspector(LiAddr, Name, Age, Desig, City)
        .send({ from: addresses[0], gas: '1000000' })
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
}
module.exports = addLinsp