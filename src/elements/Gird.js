import React from "react";
import styled from "styled-components"

const Grid = (props)  => {

  const {is_flex, width, padding, margin, bg, children} = props; // 2) 초기값을 받아와 구조 분해 형식으로 정의 해준다.

  const styles = {  // 3) props로 받아 온값을 이렇게 style에 미리 적용해준다. 
    is_flex: is_flex,
    width: width,
    margin: margin,
    padding: padding,
    bg: bg,
  }

  return (
    <React.Fragment>
      <GridBox {...styles}>{children}</GridBox>
    </React.Fragment>
  )
}

Grid.defaultProps = {  // 1) 이렇게 초기값을 미리 설정해두면 데이터가 없을시 나는 오류를 방지할수 있다.
  children: null,
  is_flex: false,
  width: "100%",
  padding: false,
  margin: false,
  bg: false,
}

const GridBox = styled.div` // 4) 상위에서 props값을 정해주면 그값이 먼저 적용됨.
  width: ${(props)=> (props.width)};
  height: 100%;
  box-sizing: border-box;
  ${(props)=>(props.padding ? `padding: ${props.padding};` : "")}
  ${(props)=>(props.margin ? `margin: ${props.margin};` : "")}
  ${(props)=>(props.bg ? `background-color: ${props.bg};` : "")}
  ${(props) => props.is_flex ? `display: flex; align-items: center; justify-content: space-between;` : ""}

`

export default Grid;