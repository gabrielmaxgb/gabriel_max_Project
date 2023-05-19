import { useTheme } from "@mui/material";
import { HeaderContainer } from "./HeaderStyled";
import LiblabLogo from "../../../assets/images/liblab.svg";
import tlotrLogo from "../../../assets/images/tlotrLogo.svg";

function Header() {
  const theme = useTheme();
  return (
    <HeaderContainer
      bgColor={theme.extraColors.black}
      bgimageonhover={LiblabLogo}
    >
      <img src={tlotrLogo} width={200} alt="liblab-logo" />
    </HeaderContainer>
  );
}

export default Header;
