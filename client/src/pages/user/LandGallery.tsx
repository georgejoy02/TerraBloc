import React, { useState } from "react";
import { Button, Menu, MenuItem, Grid } from "@mui/material";
import { IData, initialData } from "../../components/DummyData";
import Lcard from "../../components/Lcard";
import { Appbar } from "../../components/Appbar";

const LandGallery = () => {
  const [filteredData, setFilteredData] = useState<IData[]>(initialData);
  const [filterAnchorEl, setFilterAnchorEl] = useState<null | HTMLElement>(
    null
  );
  const [filterId, setFilterId] = useState<number | null>(null);

  const handleFilterClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setFilterAnchorEl(event.currentTarget);
  };

  const handleFilterClose = () => {
    setFilterAnchorEl(null);
  };

  const handleFilter = (id: number | null) => {
    setFilterId(id);
    const newData = initialData.filter((i) => i.id === id || id === null);
    setFilteredData(newData);
    handleFilterClose();
  };

  return (
    <>
      <Appbar title="Land Gallery" />
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
        {filteredData.map((i) => (
          <Grid item xs={3} key={i.id}>
            <Lcard item={i} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default LandGallery;
