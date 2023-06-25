import { useEffect, useState } from "react";
import Web3 from "web3";
import FoxImage from "../images/fox.png";
import { Button } from "@mui/material";

export const ConnectMmButton: React.FC = () => {
  const [msg, setMsg] = useState<string | undefined>();
  const [web3, setWeb3] = useState<Web3 | null>(null);
  const [acnts, setAcnts] = useState<string[]>([]);

  useEffect(() => {
    try {
      const web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    if (web3) {
      window.ethereum.on("accountsChanged", async (accounts: string[]) => {
        setAcnts(accounts);
      });
    }
  }, [web3, acnts]);

  const mmHandle = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAcnts(accounts);
      web3 && accounts.length > 0
        ? setMsg(`Connected to MetaMask with account: ${accounts[0]}`)
        : setMsg("Not connected to MetaMask");
    } catch (error) {
      console.log(error);
      setMsg(`Error connecting to MetaMask`);
    }
  };

  return (
    <div>
      <Button
        variant="contained"
        color="warning"
        sx={{
          height: "60px",
          width: "300px",
          textTransform: "none",
          fontSize: "20px",
        }}
        onClick={mmHandle}
      >
        <img
          src={FoxImage}
          alt="Fox icon"
          style={{ height: "60px", width: "60px" }}
        />
        M E T A M A S K
      </Button>
      <br />
      {msg}
    </div>
  );
};
