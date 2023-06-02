import { AppBar, Toolbar, IconButton, Typography, Box } from "@mui/material";
import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

export const Appbar = (props: {
  title:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <AppBar
        position="static"
        style={{ background: "#ffffff", height: "70px" }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="primary"
            aria-label="back"
            onClick={handleGoBack}
            size="large"
            sx={{ mr: 2 }}
          >
            <ArrowBackIcon fontSize="large" />
          </IconButton>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100%"
            flex="1"
          >
            <Typography
              variant="h4"
              component="div"
              color="primary.dark"
              style={{
                fontWeight: "bold",
                textAlign: "center",
                width: "100%",
                marginRight: "100px",
              }}
            >
              {props.title}
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};
