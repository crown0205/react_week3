import React from "react";
import { Grid, Text, Button } from "../elements/index";

const Header = props => {
  return (
    <React.Fragment>
      <Grid is_flex padding="4px 16px">
        <Grid>
          <Text bold size="24px">
            Hello
          </Text>
        </Grid>

        <Grid is_flex>
          <Button margin="0px 10px 0px">
            Signup
          </Button>
          <Button>Login</Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Header.defaultProps = {};

export default Header;