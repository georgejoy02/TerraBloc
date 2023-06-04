const web3Init = require("../web3/getweb3")
const Web3 = require("web3")

const regUserBlockchain = async (name, age, city, aadharNo, panNo, docUrl, email) => {
    const rpcURL = process.env.RPC_URL;
    const web3 = new Web3(rpcURL)
    const land_contract = await web3Init();
    const addresses = await web3.eth.getAccounts();
    const test = await land_contract.methods.registerUser(name, age, city, aadharNo, panNo, docUrl, email)
        .send({ from: addresses[9], gas: '1000000' })
        .then(
            (val) => {
                return val
            },
            (error) => {
                return error.reason
            }
        );
    return test
}
module.exports = regUserBlockchain