import { Box, Typography, Link, IconButton } from "@mui/material";
import { Facebook, Twitter, LinkedIn } from "@mui/icons-material";
import React from "react";

export const Footer: React.FC = () => {
  return (
    <Box sx={{ bgcolor: "#dae6f0", p: 1 }} component="footer">
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        <IconButton color="primary">
          <Facebook />
        </IconButton>
        <IconButton color="primary">
          <Twitter />
        </IconButton>
        <IconButton color="primary">
          <LinkedIn />
        </IconButton>
        <br />
        © 2023 TerraBloc.
        <br />
        <Link color="inherit" href="">
          www.terrabloc.com
        </Link>
      </Typography>
    </Box>
  );
};
