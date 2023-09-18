const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const router = require("./router/router");

app.use(express.json());
app.use("/", router);
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`server runnning on ${PORT}`);
});
