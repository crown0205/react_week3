import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { createBrowserHistory } from "history";   // 1) 리덕스에서 history 쓸려면 이렇게 해줘야된다.
import { connectRouter } from "connected-react-router";  // 2) 리덕스에서 history 쓸려면 이렇게 해줘야된다.

import User from "./modules/user";

export const history =createBrowserHistory();

const rootReducer = combineReducers({
  // 리듀서 묶어 주는 역활.
  user: User,
  router: connectRouter(history),  // 3) 리덕스에서 history 쓸려면 이렇게 해줘야된다.
});

const middlewares = [thunk]; // 미들웨어 쓸거 정해주는거??

// 지금이 어느 환경인 지 알려줘요. (개발환경, 프로덕션(배포)환경 ...)
const env = process.env.NODE_ENV;

// 개발환경에서는 로거라는 거 쓸려면 이렇게 해줘야 되는듯..?
if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const composeEnhancers = 
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middlewares)); 

let store = initialStore => createStore(rootReducer, enhancer); // 스토어 생성.

export default store();
