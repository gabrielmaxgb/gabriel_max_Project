import { ActionAreaContainer } from "./ActionAreaStyled";
import { IActionAreaProps } from "./types";

function ActionArea(props: IActionAreaProps) {
  const { children, linearGradientColor } = props;
  return (
    <ActionAreaContainer linearGradientColor={linearGradientColor}>
      <div className="action-area">{children}</div>
    </ActionAreaContainer>
  );
}

export default ActionArea;
