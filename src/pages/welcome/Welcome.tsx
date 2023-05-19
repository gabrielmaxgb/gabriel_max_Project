import { ImgContainer, WelcomeContainer } from "./WelcomeStyled";
import nightRivendelBg from "../../assets/images/nightRivendel.png";
import { useNavigate } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import ActionArea from "../../components/common/action-area/ActionArea";
import AnimatedPage from "../../components/layout/animations/AnimatedPage";

function Welcome() {
  const navigate = useNavigate();

  return (
    <AnimatedPage>
      <WelcomeContainer item container xs={12}>
        <ImgContainer bgimage={nightRivendelBg} item container xs={12}>
          <ActionArea>
            <div className="action-container">
              <Button
                className="button"
                variant="outlined"
                onClick={() => navigate(`/movies`)}
              >
                The Liblab of the Rings
              </Button>
              <Typography
                pt={"1rem"}
                display={"flex"}
                alignItems={"center"}
                variant="subtitle2"
              >
                <CodeIcon fontSize="small" />
                &nbsp;By Gabriel Max&nbsp;
                <CodeIcon fontSize="small" />
              </Typography>
            </div>
          </ActionArea>
        </ImgContainer>
      </WelcomeContainer>
    </AnimatedPage>
  );
}

export default Welcome;
