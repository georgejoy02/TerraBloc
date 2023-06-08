import "./landinfo.css";
import { Link } from "@mui/material";

export const Landinfo = () => {
  return (
    <div className="landbox">
      <h2>Land Info</h2>
      <div>
        <h5>Verified</h5>
      </div>
      <div className="link">
        <div>
          <h4>Owner Address:</h4>
          <p>zksfuhwi64w3iuf87we4t83rw34thw837rhfaw74wd3g5384</p>
        </div>
        <div>
          <h4>Area:</h4>
          <p>1000 sqft</p>
        </div>
        <div>
          <h4>PID:</h4>
          <p>43243</p>
        </div>
        <div>
          <h4>Survey No:</h4>
          <p>13323443</p>
        </div>
        <div>
          <h4>Address:</h4>
          <p>kozhikode,kerala</p>
        </div>
        <div>
          <h4>Price:</h4>
          <p>50,000</p>
        </div>

        <Link href="/documents">View Documents</Link>
      </div>
    </div>
  );
};
