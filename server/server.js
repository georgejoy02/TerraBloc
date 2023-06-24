// console.clear();
const dotenv = require('dotenv')
dotenv.config();
const express = require('express')
const app = express()
const cors = require("cors")
// const bodyParser = require("body-parser");
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// );
// app.use(express.static(`${__dirname}/uploads`));
app.use(cors())

const test = async () => {
  const Web3 = require("web3")
  const rpcURL = process.env.RPC_URL;
  const web3 = new Web3(rpcURL)
  const addresses = await web3.eth.getAccounts();
  console.log(addresses)
}
test();

const router = require('./router/router');

app.use(express.json())
app.use('/', router)
//------------------------------MAIN----------------------------------------------------------------






//--------------------------------------------------------------------------------------------------
const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`server runnning on ${PORT}`)
});
