import { Profile } from "../../components/Profile";
import "./transfer.css";
import { Appbar } from "../../components/Appbar";
import { Landinfo } from "../../components/Landinfo";
import { Button } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@mui/material";
import { Dna } from 'react-loader-spinner'
import { SmartContractContext } from "../../utils/SmartContractContext";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function TransferOwnershipFinal() {

  const [sellerImg, setSellerImg] = useState<string | null>(null);
  const [buyerrImg, setBuyerrImg] = useState<string | null>(null);
  const [docUrl, setDocUrl] = useState<string | null>()
  const [isLoading, setIsLoading] = useState(false);


  const { landContract } = useContext(SmartContractContext);


  const location = useLocation();
  const { sellerId, buyerId, landId, reqId } = location.state;
  console.log(sellerId, buyerId, landId);


  useEffect(() => {
    console.log("spinner")
  }, [isLoading])

  const handleTransfer = async () => {
    try {
      if (sellerImg && buyerrImg && sellerId && buyerId && landId && reqId) {
        console.log("TransferOwnershipFinal reqId:", reqId);
        setIsLoading(true);
        const res = await axios.post("http://localhost:4000/saledeedgenerate", { "sellerImg": sellerImg, "buyerrImg": buyerrImg, "sellerId": sellerId, "buyerId": buyerId, "landId": landId })
        console.log("TransferOwnershipFinal doc", res.data)
        if (res.data && landContract) {

          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
          const account = accounts[0];
          setIsLoading(false);
          const test = await landContract.methods.transferOwnership(reqId, res.data)
            .send({ from: account });
          console.log(JSON.stringify(test));
          setDocUrl(res.data);
        } else {
          alert("doc url not generated")
        }
      } else {
        alert("required data not found for document generation")
      }
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div >
      {isLoading && (
        <div className="loader-container">
          <Dna
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        </div>
      )} <div className={`app-container ${isLoading ? 'blur' : ''}`}>
        <div className="Appbar" >
          <Appbar title="Transfer Ownership" />
        </div>
        <div className="transferContainer">
          <Profile title="Seller Profile" Address={sellerId} setImg={setSellerImg} img={sellerImg} />
          <Profile title="Buyer Profile" Address={buyerId} setImg={setBuyerrImg} img={buyerrImg} />
        </div>
        <div>
          <Landinfo landId={landId} />
        </div>
        <div style={{ textAlign: 'center', margin: '20px' }}>
          <Button variant="contained" onClick={handleTransfer}>Transfer</Button>
          {
            docUrl &&
            <Link href={docUrl}>View saledeed</Link>
          }
        </div>
      </div>
    </div >
  );
}
