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
    hideIconButton?: boolean;
}) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div style={{position: 'fixed', top: 0, zIndex:2, width: '100%'}}>
      <AppBar
        position="static"
        style={{ background: "#fff", height: "70px" }}
      >
        <Toolbar>
        {!props.hideIconButton && (
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
          )}
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
              color="primary"
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
