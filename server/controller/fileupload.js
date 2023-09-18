const ipfsUrlRetrieve = require("../utils/ipfsUrlRetrieve");

const fileUpload = async (req, res) => {
  try {
    console.log(req.body);
    const file = req.file;
    const docUrl = await ipfsUrlRetrieve(file);
    res.json(docUrl);
  } catch (err) {
    console.log(`${err}:${JSON.stringify(err.receipt)}`);
    res.json(err);
  }
};
module.exports = fileUpload;
