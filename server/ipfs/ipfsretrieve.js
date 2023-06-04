const { Web3Storage } = require('web3.storage')

const token = process.env.WEB3_STORAGE_KEY
const client = new Web3Storage({ token })

const retrieveFiles = async (cid) => {
    try {
        const res = await client.get(cid)
        const files = await res.files()
        for (let file of files) {
            // console.log(`${file.cid}: ${file.name} (${file.size} bytes)`)
            return `https://${cid}.ipfs.w3s.link/${file.name}`
        }
    } catch (err) { console.log(err) }
}

module.exports = retrieveFiles