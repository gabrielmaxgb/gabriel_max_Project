import { Button, Typography } from "@mui/material";
import { NotFoundContainer } from "./NotFoundStyled";
import darkBg from "../../assets/images/darkbg.png";
import { useNavigate } from "react-router-dom";
import AnimatedPage from "../../components/layout/animations/AnimatedPage";

function NotFound() {
  const navigate = useNavigate();

  return (
    <AnimatedPage>
      <NotFoundContainer bgimage={`${darkBg}`}>
        <Typography className="message" color={"white"} variant="h1">
          Nothing here...
        </Typography>
        <Button onClick={() => navigate("/")} variant="contained">
          Get out
        </Button>
      </NotFoundContainer>
    </AnimatedPage>
  );
}

export default NotFound;
