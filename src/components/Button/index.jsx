import { ButtonPurple, ButtonTransparent } from "./styles";

function ButtonHeader({ children, purple, onClick, ...rest }) {
  return (
    <>
      {purple ? (
        <ButtonPurple onClick={onClick} $purple {...rest}>
          {" "}
          {children}
        </ButtonPurple>
      ) : (
        <ButtonTransparent onClick={onClick} {...rest}>
          {children}
        </ButtonTransparent>
      )}
    </>
  );
}

export default ButtonHeader;
