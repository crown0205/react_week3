import React from "react";
import { Grid, Text, Button } from "../elements/index";

import { useHistory } from "react-router-dom";

const Header = props => {
  const history = useHistory()

  return (
    <React.Fragment>
      <Grid is_flex padding="4px 16px">
        <Grid>
          <Text bold size="26px" _onClick={()=>{
            history.push("/")
          }}>
            Negro
          </Text>
        </Grid>

        <Grid is_flex>
          <Button margin="0px 10px 0px" _onClick={()=>{
            history.push("/signup")
          }}>
            Signup
          </Button>
          <Button _onClick={()=>{
            history.push("/login")
          }}>Login</Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Header.defaultProps = {};

export default Header;
