import { IChildren } from "../types";
import { StyledContainer } from "./ContainerStyled";

function Container({ children }: IChildren) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default Container;
