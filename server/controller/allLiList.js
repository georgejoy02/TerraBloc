const getWeb3 = require("../web3/getweb3")

const allLiList = async (req, res) => {
    try {
        const land_contract = await getWeb3();
        const result = await land_contract.methods.ReturnAllLandIncpectorList().call();
        if (result.lenth !== 0) {
            res.json(result)
        } else {
            res.json("not added any")
        }
        //------------------------------TEST_CODE(remove before final)----------------------------------------------------------------


        const Web3 = require("web3")
        const rpcURL = process.env.RPC_URL;
        const web3 = new Web3(rpcURL)

        const addresses = await web3.eth.getAccounts();
        const privateKey = addresses[0]
        console.log(privateKey)
        var number = await web3.eth.getBalance(privateKey);
        console.log(number)
        var bal = await web3.utils.fromWei(number, 'ether')
        console.log(bal)


        //--------------------------------------------------------------------------------------------------

    } catch (err) {
        console.log(err)
        res.send(err.message)
    }
}
module.exports = allLiList