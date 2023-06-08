const fs = require('fs');
const path = require('path');

const abiDir = path.join(__dirname, "../server/abiandnetwork/");
const jsonFilePath = path.join(__dirname, 'artifacts/Land.json');
// const artifacts=path.join(__dirname, 'artifacts/');

const deleteFiles = (abiDir) => {
  fs.readdir(abiDir, (err, files) => {
    if (err) console.error(err);

    for (const file of files) {
      fs.unlink(path.join(abiDir, file), err => {
        if (err) console.error(err);
      });
    }
    console.log(`deleted all files from ${abiDir}`);
  });
}
deleteFiles(abiDir);
// deleteFiles(artifacts);

fs.readFile(jsonFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file from disk: ${err}`);
  } else {
    const originalData = JSON.parse(data);
    const newData = {
      "abi": originalData.abi,
      "networks": originalData.networks
    };
    const newJsonString = JSON.stringify(newData, null, 4);
    const newFilePath = path.join(abiDir, "abi.json");

    fs.writeFile(newFilePath, newJsonString, err => {
      if (err) {
        console.error(`Error writing file: ${err}`);
      } else {
        console.log(`File is written successfully!`);
      }
    });
  }
});