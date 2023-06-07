const Web3 = require("web3")
const contract = require("../../artifacts/Land.json")

const rpcURL = process.env.RPC_URL;
const web3 = new Web3(rpcURL)
const web3Init = async () => {
    const net_id = await web3.eth.net.getId();
    const deployedNetwork = contract.networks[net_id]
    const land_contract = await new web3.eth.Contract(contract.abi, deployedNetwork.address, { handleRevert: true })
    return land_contract
}
module.exports = web3Init