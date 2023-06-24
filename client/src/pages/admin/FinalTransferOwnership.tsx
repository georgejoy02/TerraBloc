import { Profile } from "../../components/Profile";
import "./transfer.css";
import { Appbar } from "../../components/Appbar";
import { Landinfo } from "../../components/Landinfo";
import { Button } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";








export default function TransferOwnershipFinal() {


  useEffect(() => {
  
  }, [])

  const location = useLocation();
  const { sellerId, buyerId, landId } = location.state;
  console.log(sellerId, buyerId, landId);

  return (
    <div>
      <div className="Appbar">
        {/* <Appbar title="Transfer Ownership" /> */}
      </div>
      <div className="transferContainer">
        <Profile title="Seller Profile"  Address={sellerId} />
        <Profile title="Buyer Profile"  Address={buyerId} />
      </div>
      <div>
        <Landinfo landId={landId} />
      </div>
      <div style={{ textAlign: 'center', margin: '20px' }}>
        <Button variant="contained">Transfer</Button>
      </div>
    </div>
  );
}
