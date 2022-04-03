import "./App.css";
import React from "react";
import { Route } from "react-router-dom";

import { history } from "../redux/configureStore";
import { ConnectedRouter } from "connected-react-router";

import Header from "../components/Header";
import PostList from "../pages/PostList";
import Signup from "../pages/Signup";
import Login from "../pages/Login";

import { Grid } from "../elements/index";

function App() {
  return (
    <React.Fragment>
      <Grid>
        <ConnectedRouter history={history}>   {/* 이렇게 해줘야지 연결해줘야지 history를 리덕스에서 쓸수 있다. */}
          <Header></Header>
          <Route path="/" exact component={PostList} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/login" exact component={Login} />
        </ConnectedRouter>
      </Grid>
    </React.Fragment>
  );
}

export default App;
