import React from "react";
import { Grid, Text, Button } from "../elements/index";

import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getCookie, deleteCookie } from "../shared/Cookie";

const Header = props => {
  const history = useHistory();
  const dispatch = useDispatch();
  const is_login = useSelector(state => state.user.is_login);

  if (is_login) {
    return (
      <Grid is_flex padding="4px 16px">
        <Grid>
          <Text
            bold
            size="24px"
            _onClick={() => {
              history.push("/");
            }}
          >
            Negro
          </Text>
        </Grid>

        <Grid is_flex>
          <Button fontW="600" text="내정보" _onClick={() => {}} />
          <Button
            margin="0px 10px"
            fontW="600"
            text="알림"
            _onClick={() => {}}
          />
          <Button
            fontW="600"
            text="로그아웃"
            _onClick={() => {
              deleteCookie("user_id");
              history.push("/login");
            }}
          />
        </Grid>
      </Grid>
    );
  }

  return (
    <React.Fragment>
      <Grid is_flex padding="4px 16px">
        <Grid>
          <Text
            bold
            size="26px"
            _onClick={() => {
              history.push("/");
            }}
          >
            Negro
          </Text>
        </Grid>

        <Grid is_flex>
          <Button
            text="Signup"
            margin="0px 10px 0px"
            _onClick={() => {
              history.push("/signup");
            }}
          />
          <Button
            text="Login"
            _onClick={() => {
              history.push("/login");
            }}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Header.defaultProps = {};

export default Header;
