import React from "react";
import styled from "styled-components"    // 1)

const Text = props => {   // 2)

  const {children, bold, color, size} = props;    // 5)

  const styles = {    // 6)
    bold: bold,
    color: color,
    size: size,
  }

  return (
    <P {...styles}>{children}</P>     // 8)
  )
}

Text.defaultProps = {   // 3)
  children:null,
  bold: false,
  color: "#222831",
  size: "14px",
}

const P = styled.p`     // 7)
  color: ${props => props.color};
  font-size: ${props => props.size};
  font-weight: ${props => (props.bold ? "600" : "400")};
`


export default Text;