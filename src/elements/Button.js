import React from "react";
import styled from "styled-components";

const Button = props => {
  const { children, width, height, margin, fontW } =
    props;

  const styles = {
    width: width,
    height: height,
    margin: margin,
    fontW: fontW,
  };

  return <ButtonBox {...styles}>{children}</ButtonBox>;
};

Button.defaultProps = {
  children: null,
  width: "40%",
  height: "30px",
};

const ButtonBox = styled.button`
  color: ${props => props.color};
  width: ${props => props.width};
  height: ${props => props.height};
  font-weight: ${props => props.fontW};
  ${props => (props.margin ? `margin: ${props.margin};` : "")}
`;

export default Button;
