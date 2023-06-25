const multer = require("multer");

const fileLocalSave = (req, res) => {
  const upload = multer({
    storage: multer.memoryStorage(),
    fileFilter: (req, file, cb) => {
      if (file.mimetype === "application/pdf") {
        cb(null, true);
      } else {
        cb(new Error("Invalid file type. Only PDF files are allowed."), false);
      }
    },
  });
  return upload;
};
module.exports = fileLocalSave;
