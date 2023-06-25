import { useEffect, useState } from "react";
import "./landinfo.css";
import { Link } from "@mui/material";
import axios from "axios";

interface LandData {
  id: number | null;
  area: number | null;
  landAddress: string;
  landPrice: number | null;
  allLatitudeLongitude: string;
  propertyPID: number | null;
  physicalSurveyNumber: string;
  document: string;
  isforSell: boolean;
  ownerAddress: string;
  landVerified: boolean;
}

export const Landinfo = (props: { landId: string }) => {
  const [landData, setLandData] = useState<LandData>({
    id: null,
    area: null,
    landAddress: "",
    landPrice: null,
    allLatitudeLongitude: "",
    propertyPID: null,
    physicalSurveyNumber: "",
    document: "",
    isforSell: false,
    ownerAddress: "",
    landVerified: false,
  });

  useEffect(() => {
    const fetchLandData = async () => {
      const res = await axios.post("http://localhost:4000/getlanddata", {
        landId: props.landId,
      });
      console.log("getlanddata Axios", res.data);
      setLandData(res.data);
    };
    fetchLandData();
  }, []);

  return (
    <div className="landbox">
      <h2>Land Info</h2>
      <div>
        <h5>Verified</h5>
      </div>
      <div className="link">
        <div>
          <h4>Owner Address:</h4>
          <p>{landData.ownerAddress}</p>
        </div>
        <div>
          <h4>Area:</h4>
          <p>{landData.area} sqft</p>
        </div>
        <div>
          <h4>PID:</h4>
          <p>{landData.propertyPID}</p>
        </div>
        <div>
          <h4>Survey No:</h4>
          <p>{landData.physicalSurveyNumber}</p>
        </div>
        <div>
          <h4>Address:</h4>
          <p>{landData.landAddress}</p>
        </div>
        <div>
          <h4>Price:</h4>
          <p>₹{landData.landPrice}</p>
        </div>

        <Link href={landData.document}>View Documents</Link>
      </div>
    </div>
  );
};
