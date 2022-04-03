import "./App.css";
import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import Header from "../components/Header";
import PostList from "../pages/PostList";
import Signup from "../pages/Signup";
import Login from "../pages/Login";


function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header></Header>
        <Route path="/" exact component={PostList} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/login" exact component={Login} />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
