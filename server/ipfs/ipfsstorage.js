const { NFTStorage, File } = require("nft.storage");
const express = require("express");

const token = process.env.NFT_STORAGE_KEY;
const client = new NFTStorage({ token });

const storeFiles = async (file) => {
  console.log(file);
  const cid = await client.storeBlob(
    new File([file.buffer], `${Date.now()}-${file.originalname}`, {
      type: file.mimetype,
    })
  );
  console.log(`storeFiles: ${cid}`);
  return cid;
};

module.exports = storeFiles;
