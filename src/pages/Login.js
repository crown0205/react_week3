import React from "react";
import { Text, Grid, Button, Input } from "../elements/index";


const Login = props => {

  return (
    <React.Fragment>
      <Grid padding="16px">
      <Text size="32px" bold>
          로그인
        </Text>
        <Grid>
        <Input
            label="아이디"
            placeholder="아이디를 입력해주세요."
            height="40px"
            _onChange={e => {
              // setId(e.target.value);
            }}
          />
        </Grid>
        <Grid>
        <Input
            label="패스워드"
            type="password"
            placeholder="패스워드 입력해주세요."
            height="40px"
            _onChange={e => {
              // setPwd(e.target.value);
            }}
          />
        </Grid>
        <Button text="로그인하기"
          margin="50px 0px"
          _onClick={() => {
            console.log("로그인 버튼 누름");
            // login();
          }}/>
      </Grid>
    </React.Fragment>
  )
}

export default Login