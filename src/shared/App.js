import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { history } from "../redux/configureStore";
import { ConnectedRouter } from "connected-react-router";
import { actionCreators as userActions } from "../redux/modules/user";
import { apiKey } from "./firebase";

import Header from "../components/Header";
import PostList from "../pages/PostList";
import Signup from "../pages/Signup";
import Login from "../pages/Login";

import Permit from "./Permit";
import { Grid, Button } from "../elements/index";

function App() {
  const dispatch = useDispatch();
  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_key);

  React.useEffect(() => {
    if (is_session) {
      console.log("발동!!!!");
      dispatch(userActions.loginCheckFB());
    }
  }, []);

  return (
    <React.Fragment>
      <Grid>
        <ConnectedRouter history={history}>
          <Header></Header>
          <Route path="/" exact component={PostList} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/login" exact component={Login} />
        </ConnectedRouter>
      </Grid>
      <Permit>
        <Button is_float text="+"/>
      </Permit>
    </React.Fragment>
  );
}

export default App;
