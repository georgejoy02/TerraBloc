const ipfsUrlRetrieve = require("../utils/ipfsUrlRetrieve")
const regUserBlockchain = require("../utils/regUserBlockchain")

const userReg = async (req, res) => {
    try {
        // const { name, age, city, aadharNo, panNo, email } = req.body
        console.log(req.body)
        const file = req.file
        const docUrl = await ipfsUrlRetrieve(file)
        // const receipt = await regUserBlockchain(name, age, city, aadharNo, panNo, docUrl, email)
        // if (receipt.events)
        //     console.log(`userReg${receipt.events}`)
        // else
        //     throw receipt
        res.json(docUrl);
    }
    catch (err) {
        console.log(`${err}:${JSON.stringify(err.receipt)}`)
        res.json(err)
    }
}
module.exports = userReg