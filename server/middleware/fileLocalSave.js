const multer = require('multer');

const fileLocalSave = () => {

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
    return upload;
}
module.exports = fileLocalSave