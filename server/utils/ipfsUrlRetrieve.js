const storeFiles = require("../ipfs/ipfsstorage")
const retrieveFiles = require("../ipfs/ipfsretrieve")
const fs = require('fs/promises');
const path = require("path")

const ipfsUrlRetrieve = async (filePath,directory) => {
    console.log(filePath)
    const cid = await storeFiles(filePath)
    console.log(cid)
    const filelink = await retrieveFiles(cid);
    console.log(filelink)

    for (const file of await fs.readdir(directory)) {
        await fs.unlink(path.join(directory, file));
        console.log(`Deleted ${file} File successfully.`);
    }
    console.log("Deleted All Files successfully");

    return filelink;
}
module.exports = ipfsUrlRetrieve