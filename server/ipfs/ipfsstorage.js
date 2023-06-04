const { Web3Storage, getFilesFromPath } = require('web3.storage')

const token = process.env.WEB3_STORAGE_KEY
const client = new Web3Storage({ token })

const storeFiles = async (filePath) => {
    const files = await getFilesFromPath(filePath)
    const cid = await client.put(files)
    return cid
}

module.exports = storeFiles