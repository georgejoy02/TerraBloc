import { Profile } from "../../components/Profile";
import "./transfer.css";
import { Appbar } from "../../components/Appbar";
import { Landinfo } from "../../components/Landinfo";
import { Button } from "@mui/material";

export default function TransferOwnershipFinal() {
  return (
    <div>
      <div className="Appbar">
        <Appbar title="Transfer Ownership" />
      </div>
      <div className="transferContainer">
        <Profile title="Seller Profile" status="Verified" />
        <Profile title="Buyer Profile" status="Verified" />
      </div>
      <div>
        <Landinfo />
      </div>
      <div style={{textAlign:'center', margin:'20px'}}>
        <Button variant="contained">Transfer</Button>
      </div>
    </div>
  );
}
