import { Typography, useTheme } from "@mui/material";
import { HeaderContainer } from "./HeaderStyled";
import LiblabLogo from "../../../assets/images/liblab.svg";
import tlotrLogo from "../../../assets/images/tlotrLogo.svg";

function Header() {
  const theme = useTheme();
  return (
    <HeaderContainer
      bgcolor={theme.extraColors.black}
      bgimageonhover={LiblabLogo}
    >
      <Typography
        className="liblab-text"
        pr={"2rem"}
        variant="h2"
        color={theme.extraColors.liblab}
      >
        Liblab +
      </Typography>
      <img src={tlotrLogo} width={200} alt="liblab-logo" />
    </HeaderContainer>
  );
}

export default Header;
