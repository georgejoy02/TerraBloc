const { Web3Storage } = require("web3.storage");

const token = process.env.WEB3_STORAGE_KEY;
const client = new Web3Storage({ token });

const retrieveFiles = async (cid) => {
  return `https://${cid}.ipfs.nftstorage.link`;
};

module.exports = retrieveFiles;
