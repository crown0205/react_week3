import React from "react";
import styled from "styled-components";

import { Text, Grid } from "./index";

const Input = props => {
  const {type, label, placeholder, _onChange, height} = props

  const styles = {
    height
  }
  return (
    <Grid>
        <Label>{label}</Label>
        <InputBox
          type={type}
          placeholder={placeholder}
          onChange={_onChange}
          {...styles}
        ></InputBox>
      </Grid>
  )
}

Input.defaultProps = {
  children: null,
  type: "text",
  _onChange: () => {},
  height: "45px",
  margin: false,
};

const Label = styled.label`

`
const InputBox = styled.input`
  display: inline-block;
  width: 100%;
  margin: auto;
  height: ${props => props.height};
  font-size: 16px;
`;


export default Input;
