const ipfsUrlRetrieve = require("../utils/ipfsUrlRetrieve")
const regUserBlockchain = require("../utils/regUserBlockchain")

const userReg = async (req, res) => {
    try {
        const { name, age, city, aadharNo, panNo, email } = req.body
        const file = req.file
        const docUrl = await ipfsUrlRetrieve(file.path, file.destination)
        const receipt = await regUserBlockchain(name, age, city, aadharNo, panNo, docUrl, email)
        if (receipt.events)
            console.log(receipt.events)
        else
            throw receipt
        res.json({ message: 'PDF file uploaded  to ipfs successfully', file: req.file, receipt: receipt.events });
    }
    catch (err) {
        console.log(`${err.reason}:${JSON.stringify(err.receipt)}`)
        res.json(err)
    }
}
module.exports = userReg