const getWeb3 = require("../web3/getweb3")

const userLogin = async (req, res) => {
    try {
        const { key } = req.body
        console.log("fe: ", key)
        const land_contract = await getWeb3();
        const result = await land_contract.methods.isUserRegistered(key).call();
        // for(let i=0;i<result.length;i++){
        //     console.log(result[i].toLowerCase())
        //     if (result[i].toLowerCase()==key) {
        //         res.json(true)
        //         return;
        //     } else {
        //         console.log("not user key");
        //     }
        // }
        if (result == true) {
            res.json(true)
        }

        else {
            res.json("not a user key");
        }
    } catch (err) {
        console.log(err)
        res.send(err.message)
    }
}

module.exports = userLogin