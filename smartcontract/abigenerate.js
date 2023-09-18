const fs = require("fs");
const path = require("path");

const abiDir1 = path.join(__dirname, "../server/abiandnetwork/");
const abiDir2 = path.join(__dirname, "../client/src/abiandnetwork/");
const jsonFilePath = path.join(__dirname, "artifacts/Land.json");

const deleteFiles = (abiDir) => {
  fs.readdir(abiDir, (err, files) => {
    if (err) console.error(err);

    for (const file of files) {
      if (file != ".gitkeep") {
        fs.unlink(path.join(abiDir, file), (err) => {
          if (err) console.error(err);
        });
      }
    }
    console.log(`deleted all files from ${abiDir}`);
  });
};
deleteFiles(abiDir1);
deleteFiles(abiDir2);
const writeFiles = (abiDir) => {
  fs.readFile(jsonFilePath, "utf8", (err, data) => {
    if (err) {
      console.error(`Error reading file from disk: ${err}`);
    } else {
      const originalData = JSON.parse(data);
      const newData = {
        abi: originalData.abi,
        networks: originalData.networks,
      };
      const newJsonString = JSON.stringify(newData, null, 4);
      const newFilePath = path.join(abiDir, "abi.json");

      fs.writeFile(newFilePath, newJsonString, (err) => {
        if (err) {
          console.error(`Error writing file: ${err}`);
        } else {
          console.log(`File is written successfully at ${abiDir}`);
        }
      });
    }
  });
};
writeFiles(abiDir1);
writeFiles(abiDir2);
