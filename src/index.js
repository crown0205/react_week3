import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./shared/App";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux"; // 리덕스 쓸려면 연결해줘야됨
import store from "./redux/configureStore"; // 리덕스 쓸려면 연결해줘야됨

ReactDOM.render(
  <Provider store={store}>  {/* 이렇게 해서 스토어를 연결해줘야 됨. */}
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
