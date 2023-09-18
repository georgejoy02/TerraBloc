const storeFiles = require("../ipfs/ipfsstorage");
const retrieveFiles = require("../ipfs/ipfsretrieve");
const fs = require("fs/promises");
const path = require("path");

const ipfsUrlRetrieve = async (file) => {
  const cid = await storeFiles(file);
  const filelink = await retrieveFiles(cid);
  console.log(`ipfsUrlRetrieve: ${filelink}`);
  return filelink;
};
module.exports = ipfsUrlRetrieve;
