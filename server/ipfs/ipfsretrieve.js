const retrieveFiles = async (cid) => {
  return `https://${cid}.ipfs.nftstorage.link`;
};

module.exports = retrieveFiles;
