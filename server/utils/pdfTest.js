const generatePDF = require('./PdfGenerate');

const generateAndStorePDF = async () => {

  // Generate the PDF file
  const pdfPath = await generatePDF();

  // Store the PDF file to IPFS
//   const filelink = await ipfsUrlRetrieve(pdfPath);

//   console.log(`Generated PDF file stored on IPFS: ${filelink}`);
};

module.exports = generateAndStorePDF;