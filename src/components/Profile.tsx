import React, { ReactNode } from "react";
import WebcamImage from "./WebcamImage";
import "./profile.css";
import VerifiedIcon from "@mui/icons-material/Verified";
import { TextField, Link } from "@mui/material";

export const Profile = (props: {
  status: ReactNode;
  title:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => {
  return (
    <div className="box">
      <h3>{props.title}</h3>
      <div>
        <h5>
          {props.status} <VerifiedIcon fontSize="small" />
        </h5>
      </div>
      <div className="webcamImageContainer">
        <WebcamImage />
      </div>
      <div
        className="inputContainer"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <TextField
          label="Wallet Address"
          variant="outlined"
          className="inputField"
        />
        <TextField label="Name" variant="outlined" className="inputField" />
        <TextField label="Age" variant="outlined" className="inputField" />
        <TextField label="City" variant="outlined" className="inputField" />
        <TextField
          label="Adhar Number"
          variant="outlined"
          className="inputField"
        />
        <TextField label="PAN" variant="outlined" className="inputField" />
        <TextField label="Mail" variant="outlined" className="inputField" />
        <Link href="/documents">View Documents</Link>
      </div>

      
    </div>
  );
};
