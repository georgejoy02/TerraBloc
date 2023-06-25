import React, { useEffect, useState } from "react";
import { Button, Menu, MenuItem, Grid } from "@mui/material";
// import { initialData } from "../../components/DummyData";
import Lcard from "../../components/Lcard";
import { Appbar } from "../../components/Appbar";
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

const LandGallery: React.FC = () => {

  // const [filteredData, setFilteredData] = useState<LandData[]>([]);
  const [filterAnchorEl, setFilterAnchorEl] = useState<null | HTMLElement>(null);
  const [filterId, setFilterId] = useState<number | null>(null);
  const [landArr, setLandArr] = useState<LandData[]>([]);
  const [checkReq, setCheckReq] = useState(false)

  useEffect(() => {
    const fetchLAndData = async () => {
      const res = await axios.get("http://localhost:4000/landlist")
      console.log(res.data)
      setLandArr(res.data)
    }
    fetchLAndData();
  }, [])

  useEffect(() => {
console.log("reloading ....")
  }, [checkReq])


  const handleFilterClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setFilterAnchorEl(event.currentTarget);
  };

  const handleFilterClose = () => {
    setFilterAnchorEl(null);
  };

  const handleFilter = (id: number | null) => {
    setFilterId(id);
    const newData = landArr.filter((i) => i.id === id || id === null);
    setLandArr(newData);
    handleFilterClose();
  };

  return (
    <>
      <Appbar title="Land Gallery" />
      <div style={{ marginLeft: "270px", marginRight: "10px" }}>
        <Button onClick={handleFilterClick}>Filter</Button>
        <Menu
          anchorEl={filterAnchorEl}
          open={Boolean(filterAnchorEl)}
          onClose={handleFilterClose}
        >
          <MenuItem onClick={() => handleFilter(null)}>All Cards</MenuItem>
          <MenuItem onClick={() => handleFilter(1)}>Card 1</MenuItem>
          <MenuItem onClick={() => handleFilter(2)}>Card 2</MenuItem>
        </Menu>
        <Grid container spacing={2}>
          {landArr.map((i) => (
            <Grid item xs={3} key={i.id}>
              <Lcard item={i} request={true} setCheckReq={setCheckReq} checkReq={checkReq} />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default LandGallery;
