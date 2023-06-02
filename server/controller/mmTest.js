const getWeb3 = require("../web3/getweb3")

const mmTest=async (req,res)=>{
    try{
        const land_contract = await getWeb3();

    }catch(err){
        console.log(err)
    }
}