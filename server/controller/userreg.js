const multer = require('multer');
const storeFiles = require("../ipfs/ipfsstorage")
const retrieveFiles = require("../ipfs/ipfsretrieve")
const fs = require('fs');

const storeFile = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'fileTempStorage/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});
const filterFile = (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type. Only PDF files are allowed.'), false);
    }
};



const upload = multer({ storage: storeFile, fileFilter: filterFile });

const userReg = async (req, res) => {

    const test = async (path) => {
        const filePath = path;
        console.log(filePath)
        const cid = await storeFiles(filePath)
        console.log(cid)
        const filelink = await retrieveFiles(cid);
        console.log(filelink)
        fs.unlink(path, (err) => {
            if (err) {
                throw err;
            }
            console.log("Delete File successfully.");
        });
    }

    await upload.single('file')
        (req, res, (err) => {
            const { name, password } = req.body
            console.log(`name is ${name} and password is ${password} `)
            const file = req.file
            test(file.path);
            res.send({ message: 'PDF file uploaded successfully.', file: req.file });
        })
}
module.exports = userReg