const getWeb3 = require("../web3/getweb3")
const Web3 = require("web3")

const addLinsp = async (req, res) => {
    const { LiAddr, Name, Age, Desig, City } = req.body
    const rpcURL = "http://127.0.0.1:7545"
    const web3 = new Web3(rpcURL)
    try {
        const land_contract = await getWeb3();
        const addresses = await web3.eth.getAccounts();
        const receipt = await land_contract.methods.addLandInspector(LiAddr, Name, Age, Desig, City).send({ from: addresses[0], gas: '1000000' })
        if (receipt) {
            res.json(receipt)
            console.log(receipt)
        } else {
            res.json("not added,check sender key")
        }
    } catch (err) {
        res.json(err)
        const tx = await web3.eth.getTransaction(err.receipt.transactionHash)
        var result = await web3.eth.call(tx, tx.blockNumber)
        result = result.startsWith('0x') ? result : `0x${result}`
        if (result && result.substr(138)) {
            const reason = web3.utils.toAscii(result.substr(138))
            res.json('Revert reason:', reason)
            return reason
        } else {
            res.json('Cannot get reason - No return value')
        }
    }
}
module.exports = addLinsp