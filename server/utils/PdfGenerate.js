const puppeteer = require("puppeteer");
const path = require("path");
const getWeb3 = require("../web3/getweb3");
const ipfsUrlRetrieve = require("./ipfsUrlRetrieve");

const generatePDF = async (req, res) => {
  const { sellerImg, buyerrImg, sellerId, buyerId, landId } = req.body;
  const land_contract = await getWeb3();
  const sellerinfo = await land_contract.methods.UserMap(sellerId).call();
  console.log("sellerinfo", sellerinfo);
  const buyerinfo = await land_contract.methods.UserMap(buyerId).call();
  console.log("buyerinfo", buyerinfo);
  const landinfo = await land_contract.methods.landsMap(landId).call();
  console.log("landinfo", landinfo);

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const date = new Date();
  const currentDay = String(date.getDate()).padStart(2, "0");

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentMonth = months[date.getMonth()];

  const currentYear = date.getFullYear();

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body {
                font-family: Arial, sans-serif;
                color: #333;
                background-color: #FFF8E6;
            }
            .header {
                text-align: center;
                padding: 5px;
                background-color: #F6F4DE;
                border-bottom: 2px solid #ddd;
            }
              
            .header-content {
                display: flex;
                align-items: center;
                justify-content: center;
            }
              
            .header img {
                margin-right: 0px;
            }
              

            .stamp {
                text-align: center;
                margin: 20px;
            }

            .content {
                margin: 20px;
            }

            .page-2 {
                page-break-before: always;
                padding: 10px;
            }

            .footer {
                text-align: center;
                padding: 20px;
                background-color: #F6F4DE;
                border-top: 1px solid #ddd;
                position: fixed;
                bottom: 0;
                width: 100%;
            }
            table {
                width: 100%;
                border-collapse: collapse;
                margin-top: 20px;
            }
            th, td {
                border: 1px solid #ddd;
                padding: 8px;
                text-align: left;
            }
            th {
                background-color: #f8f9fa;
                color: #333;
            }
            .seller-info img {
                width: 300px; 
                height: auto; 
            }

            .buyer-info img {
                width: 300px; 
                height: auto; 
            }

            .container {
                display: flex;
            }
              
              .seller-info,
              .buyer-info {
                flex: 1;
            }
              
              
        </style>
    </head>
    <body>
        <div class="header">
            <div class="header-content">
                <img src="https://i.postimg.cc/HW06pn7K/bcIcon.png" alt="Company Logo">
                <h1>TerraBloc</h1>
            </div>
            <p>Revolutionizing property transactions with blockchain</p>
        </div>
  
        <div class="stamp">
            <img src="https://i.postimg.cc/mkdhyLMy/salestamp.jpg" alt="stamp">
            <h2>Land Sale Deed</h2>
        </div>
        <div class="content">
        <div class="page-1">
            <p>
                This Deed of Sale is made and executed on this the <b>${currentDay}th day of ${currentMonth} ${currentYear}</b> by and between:
            </p>
            <p>
            <b>${sellerinfo.name}</b>, aged about <b>${sellerinfo.age}</b>, residing at <b>${sellerinfo.city}</b>, hereinafter called the "SELLER" (which expression shall mean and include wherever the context so requires admits his heirs, executors, representatives and assigns) of the ONE PART;
            </p>
            <p>
                AND
            </p>
            <p>
            <b>${buyerinfo.name}</b>, aged about <b>${buyerinfo.age}</b>, residing at <b>${buyerinfo.city}</b>, hereinafter called the "BUYER" (which expression shall mean and include wherever the context so requires, admits his heirs, executors, representatives and assigns) of the OTHER PART.
            </p>
            <p>
                The SELLER hereby acknowledges the receipt of a sum of <b>₹${landinfo.landPrice}</b> towards the full and final payment of the sale consideration of the schedule mentioned property.
            </p>
            <p>
                The SELLER further assures the BUYER that the schedule mentioned property is free from all sorts of encumbrances such as prior sale, gifts, mortgage, litigation, disputes, stay orders, claims, demands, etc., and if any defect is found in the title at a later date, the SELLER shall be liable for all costs, charges and expenses for the clearance of the same.
            </p>
            </div>
            <div class="page-2">
                <h2>Property Details</h2>
                <table>
                    <tr>
                        <th>Property ID</th>
                        <th>Location</th>
                        <th>Area</th>
                        <th>Price</th>
                    </tr>
                    <tr>
                        <td><b>${landinfo.propertyPID}</b></td>
                        <td><b>${landinfo.landAddress}</b></td>
                        <td><b>${landinfo.area}</b></td>
                        <td><b>₹${landinfo.landPrice}</b></td>
                    </tr>
                </table>
                <div class="container">
                    <div class="seller-info">
                        <h3>Seller</h3>
                        <img src=${sellerImg} alt="Seller Image">
                        <p>Name: <b>${sellerinfo.name}</b></p>
                        <p>Address: <b>${sellerinfo.city}</b></p>
                        <p>PAN: <b>${sellerinfo.panNumber}</b></p>
                        <p>Public Key: <b><small>${sellerinfo.id}</small></b></p>
                    </div>
                    <div class="buyer-info">
                        <h3>Buyer</h3>
                        <img src=${buyerrImg} alt="Buyer Image">
                        <p>Name: <b>${buyerinfo.name}</b></p>
                        <p>Address: <b>${buyerinfo.city}</b></p>
                        <p>PAN: <b>${buyerinfo.panNumber}</b></p>
                        <p>Public Key: <b><small>${buyerinfo.id}</small></b></p>
                    </div>
              </div>
              
                <p>In conclusion, this Land Sale Deed signifies the agreement between the seller and the buyer, acknowledging the receipt of payment and ensuring that the property is free from any encumbrances, with the seller assuming responsibility for addressing any future defects in the title.</p>
            </div>
        </div>
        <div class="footer">
            <p>Generated on: ${date}</p>
            <p>© 2023 TerraBloc. All rights reserved.</p>
        </div>
    </body>
    </html>
`;

  await page.setContent(htmlContent);

  console.log("Generating PDF...");

  const pdfPath = path.join(__dirname, "FinalDoc.pdf");
  const buffer = await page.pdf({ format: "A4", printBackground: true });
  console.log("pdfres: ", buffer);
  console.log("Generated PDF");
  const file = {
    buffer: buffer,
    originalname: `${sellerinfo.id}_to_${buyerinfo.id}.pdf`,
    mimetype: "pdf",
  };

  await browser.close();
  const filelink = await ipfsUrlRetrieve(file);
  console.log(filelink);
  if (filelink) {
    res.json(filelink);
  } else {
    res.json(false);
  }
};

module.exports = generatePDF;
