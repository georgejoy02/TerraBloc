import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SmartContractContext } from "../utils/SmartContractContext";
import axios from "axios";

interface LandData {
  id: number;
  area: number;
  landAddress: string;
  landPrice: number;
  allLatitudeLongitude: string;
  propertyPID: number;
  physicalSurveyNumber: string;
  document: string;
  isforSell: boolean;
  ownerAddress: string;
  landVerified: boolean;
}

interface LandComponentProps {
  item: LandData;
  setIsForSell?: React.Dispatch<React.SetStateAction<boolean>>;
  request?: boolean;
  setCheckReq?: React.Dispatch<React.SetStateAction<boolean>>;
  checkReq?: boolean;
}

const Lcard: React.FC<LandComponentProps> = ({
  item,
  setIsForSell = () => {},
  request = false,
  setCheckReq = () => {},
  checkReq,
}) => {
  const { landContract } = useContext(SmartContractContext);

  const [landArr, setLandArr] = useState<number[]>([]);
  const [owner, setOwner] = useState<string>();

  useEffect(() => {
    const fetchrequest = async () => {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = accounts[0];
      console.log(account);
      setOwner(account);
      const res = await axios.post("http://localhost:4000/mysentrequest", {
        key: account,
      });

      if (Array.isArray(res.data)) {
        console.log(typeof res.data);
        setLandArr(res.data);
        console.log("item Id: ", res.data[1], item.id);
      }
    };
    fetchrequest();
  });

  const handleforsell = async (id: number) => {
    try {
      if (landContract) {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const account = accounts[0];
        const test = await landContract.methods
          .makeItforSell(id)
          .send({ from: account });
        console.log(JSON.stringify(test));
        setIsForSell(true);
      } else {
        console.log("contract instance not found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleRequestBuy = async (id: number) => {
    try {
      if (landContract) {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const account = accounts[0];
        const test = await landContract.methods
          .requestforBuy(id)
          .send({ from: account });
        console.log(JSON.stringify(test));
        setCheckReq(!checkReq);
      } else {
        console.log("contract instance not found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Card key={item.id} sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="150"
            image="https://mangomap.com/images/thumnails/681a8282-e0f6-11e5-8246-22000bb3a3a1_big.png" //{item.img}
            alt="cardImage"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.landAddress}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Area:{item.area} sq.ft
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Price:₹{item.landPrice}.0
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Survey No:{item.physicalSurveyNumber}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <Link to={`${item.id}`} state={{ item: item }}>
              View Details
            </Link>
          </Button>
          {item.isforSell ? (
            <Button size="small" color="primary" variant="contained" disabled>
              land for sell
            </Button>
          ) : (
            item.landVerified && (
              <Button
                size="small"
                color="primary"
                variant="contained"
                onClick={() => handleforsell(item.id)}
              >
                make for sell
              </Button>
            )
          )}
          {request &&
            (item.ownerAddress.toLowerCase() === owner ||
            landArr.includes(item.id) ? (
              <Button size="small" color="primary" variant="contained" disabled>
                request sent
              </Button>
            ) : (
              <Button
                size="small"
                color="primary"
                variant="contained"
                onClick={() => handleRequestBuy(item.id)}
              >
                request buy
              </Button>
            ))}
        </CardActions>
      </Card>
    </div>
  );
};
export default Lcard;
