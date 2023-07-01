import { useEffect, useState } from "react";
import Web3 from "web3";
import FoxImage from "../images/fox.png";
import { Button, TextField } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { CopyToClipboard } from "react-copy-to-clipboard";
import DoneIcon from "@mui/icons-material/Done";

export const ConnectMmButton: React.FC = () => {
  const [msg, setMsg] = useState<string>("");
  const [web3, setWeb3] = useState<Web3 | null>(null);
  const [acnts, setAcnts] = useState<string[]>([]);
  const [copied, setCopied] = useState<boolean>(false);
  const [mmAcnt, setMmAcnt] = useState<boolean>(false);

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
        setCopied(false);
      });
    }
  }, [web3, acnts]);

  const mmHandle = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAcnts(accounts);
      if (web3 && accounts.length > 0) {
        setMmAcnt(true);
        setMsg(`${accounts[0]}`);
      } else {
        setMsg("Not connected to MetaMask");
      }
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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "100%",
        }}
      >
        {mmAcnt ? (
          <>
            Connected to:
            <TextField
              value={msg}
              sx={{ m: 1, width: "47ch" }}
              InputProps={{
                readOnly: true,
                endAdornment: (
                  <CopyToClipboard text={msg} onCopy={() => setCopied(true)}>
                    {copied ? (
                      <DoneIcon />
                    ) : (
                      <ContentCopyIcon style={{ cursor: "pointer" }} />
                    )}
                  </CopyToClipboard>
                ),
              }}
            />
          </>
        ) : (
          <>{msg}</>
        )}
      </div>
    </div>
  );
};
