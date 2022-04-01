import "./App.css";
import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import PostList from "../pages/PostList";
import Header from "../components/Header";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header></Header>
        <Route path="/" exact component={PostList} />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
