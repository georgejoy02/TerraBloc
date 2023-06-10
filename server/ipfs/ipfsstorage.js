// const { Web3Storage, getFilesFromPath } = require('web3.storage')
// const { NFTStorage, File } = require('nftstorage');
const { NFTStorage, File } = require('nft.storage')
const express = require('express')

const token = process.env.NFT_STORAGE_KEY
// const client = new Web3Storage({ token })
const client = new NFTStorage({ token });

const storeFiles = async (file) => {
    console.log(file)
    // const { Blob } = await import('fetch-blob')
    // const blob = new Blob([file.buffer], { type: file.mimetype })
    // console.log(blob )
    const cid = await client.storeBlob(new File([file.buffer], `${Date.now()}-${file.originalname}`, { type: file.mimetype }));
    // const cid = await client.put([file], { wrapWithDirectory: true, name: `${Date.now()}-${file.originalname}` });
    console.log(`storeFiles: ${cid}`)
    return cid
}

module.exports = storeFiles