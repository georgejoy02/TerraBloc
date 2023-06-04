const ipfsUrlRetrieve = require("../utils/ipfsUrlRetrieve")
const regUserBlockchain = require("../utils/regUserBlockchain")

const userReg = async (req, res) => {
    const { name, age, city, aadharNo, panNo, email } = req.body
    console.log(req.body)
    const ruser = async (name, age, city, aadharNo, panNo, docUrl, email) => {
        const receipt = await regUserBlockchain(name, age, city, aadharNo, panNo, docUrl, email)
        if (receipt.events)
            console.log(receipt.events)
        else
            console.log(receipt)
    }
    const file = req.file
    const docUrl = await ipfsUrlRetrieve(file.path, file.destination)
    ruser(name, age, city, aadharNo, panNo, docUrl, email)
    res.send({ message: 'PDF file uploaded  to ipfs successfully', file: req.file });

}
module.exports = userReg