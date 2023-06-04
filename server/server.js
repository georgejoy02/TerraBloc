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

const router = require('./router/router')

app.use(express.json())

app.use('/', router)
//------------------------------MAIN----------------------------------------------------------------










//--------------------------------------------------------------------------------------------------
const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`server runnning on ${PORT}`)
});
