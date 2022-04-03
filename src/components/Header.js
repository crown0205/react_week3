import React from "react";
import { Grid, Text, Button } from "../elements/index";

import { useHistory } from "react-router-dom";
import { getCookie, deleteCookie } from "../shared/Cookie";

const Header = props => {
  const history = useHistory();
  const [is_login, setIsLogin] = React.useState(false); // 기본값으로 false인 경우 쿠키가 없다고 조건을 걸어준다.

  console.log("1 : ", is_login);

  React.useEffect(() => {
    // 페이지가 로딩되면서 꼭 1번은 실행된다.
    let cookie = getCookie("user_id");
    console.log(cookie);

    if (cookie) {
      // 쿠키가 있는지 없는지 확인을 하여 있으면 "true" , 없으면 "false" 를 반환한다.
      setIsLogin(true);
      console.log("true");
    } else {
      setIsLogin(false);
      console.log("false");
    }

    console.log("2 : ", is_login);
  }, []);

  console.log("3 : ", is_login);

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
