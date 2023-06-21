const getWeb3 = require("../web3/getweb3")

const isLandReg = async (req, res) => {
    const land_contract = await getWeb3();
    try {
        const { pid } = req.body;
        console.log(pid);

        const landlist = await land_contract.methods.ReturnAllLandList().call();
        console.log("landlist: ", landlist)
        if (Array.isArray(landlist) && landlist.length > 0) {
            for (let i = 0; i < landlist.length; i++) {
                const landdetails = await land_contract.methods.landsMap(landlist[i]).call();
                console.log("land details: ", landdetails.propertyPID)
                if (landdetails.propertyPID == pid) {
                    res.json(true)
                    return;
                }
            }
            res.json(false);
        } else {
            console.log("empty land list")
            res.json(false);
        }
    } catch (err) {
        console.log(err)
        // res.send(err.message)
    }
}
module.exports = isLandReg