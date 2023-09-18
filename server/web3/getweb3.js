const Web3 = require("web3");
const contract = require("../abiandnetwork/abi.json");

const rpcURL = process.env.RPC_URL;
const web3 = new Web3(rpcURL);
const web3Init = async () => {
  const net_id = await web3.eth.net.getId();
  const contratAddress = contract.networks[net_id].address;
  const land_contract = await new web3.eth.Contract(
    contract.abi,
    contratAddress,
    { handleRevert: true }
  );
  return land_contract;
};
module.exports = web3Init;
