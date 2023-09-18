import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import WebcamImage from "./WebcamImage";
import "./profile.css";
import VerifiedIcon from "@mui/icons-material/Verified";
import { TextField, Link } from "@mui/material";
import axios from "axios";

interface User {
  id: string;
  name: string;
  age: number | null;
  city: string;
  aadharNumber: number | null;
  panNumber: number | null;
  document: string;
  email: string;
  userVerified: boolean;
}
interface props {
  title: string;
  Address: string;
  setImg: Dispatch<SetStateAction<string | null>>;
  img: string | null;
}

export const Profile: React.FC<props> = ({ title, Address, setImg, img }) => {
  const [userdata, setUserdata] = useState<User>({
    id: "",
    name: "",
    age: null,
    city: "",
    aadharNumber: null,
    panNumber: null,
    document: "",
    email: "",
    userVerified: false,
  });

  useEffect(() => {
    const test = async () => {
      try {
        const res = await axios.post("http://localhost:4000/getuserdata", {
          key: Address,
        });
        console.log("getuserdata Axios: ", res.data);
        setUserdata({
          id: res.data.id,
          name: res.data.name,
          age: res.data.age,
          city: res.data.city,
          aadharNumber: res.data.aadharNumber,
          panNumber: res.data.panNumber,
          document: res.data.document,
          email: res.data.email,
          userVerified: res.data.userVerified,
        });
      } catch (error) {
        console.log(error);
      }
    };
    test();
  }, []);

  return (
    <div className="box">
      <h3>{title}</h3>
      <div>
        <h5>
          {userdata.userVerified ? (
            <>
              {" "}
              verified
              <VerifiedIcon fontSize="small" />
            </>
          ) : (
            <>
              {" "}
              not verified
              <VerifiedIcon fontSize="small" />
            </>
          )}
        </h5>
      </div>
      <div className="webcamImageContainer">
        <WebcamImage setImg={setImg} img={img} />
      </div>
      <div
        className="inputContainer"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <TextField
          label="Wallet Address"
          variant="outlined"
          className="inputField"
          value={userdata.id}
          disabled
        />
        <TextField
          label="Name"
          variant="outlined"
          className="inputField"
          value={userdata.name}
          disabled
        />
        <TextField
          label="Age"
          type="text"
          variant="outlined"
          className="inputField"
          value={userdata.age}
          disabled
        />
        <TextField
          label="City"
          variant="outlined"
          className="inputField"
          value={userdata.city}
          disabled
        />
        <TextField
          label="Adhar Number"
          variant="outlined"
          className="inputField"
          value={userdata.aadharNumber}
          disabled
        />
        <TextField
          label="PAN"
          variant="outlined"
          className="inputField"
          value={userdata.panNumber}
          disabled
        />
        <TextField
          label="Mail"
          variant="outlined"
          className="inputField"
          value={userdata.email}
          disabled
        />
        <Link href={userdata.document}>View Documents</Link>
      </div>
    </div>
  );
};
