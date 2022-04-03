import { produce } from "immer";
import { createAction, handleActions } from "redux-actions";
import { setCookie } from "../../shared/Cookie";

//actions type
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";

// action creators // 액션함수를 "redux-actions"이 패키지로 받아 편하게 바꿔준거다.
const logIn = createAction(LOG_IN, user => ({ user }));
const logOut = createAction(LOG_OUT, user => ({ user }));
const getUser = createAction(GET_USER, user => ({ user }));

// initialState
const initialState = {
  user: null,
  is_login: false,
};

//middleware actions
const loginAction = user => {
  
  console.log("loginAction")
  console.log("user : ", user )

  return function (dispatch, getState, { history }) {
    dispatch(logIn(user));
    history.push("/");
  };
};

// reducer
export default handleActions(
  {
    [LOG_IN]: (state, action) =>
      produce(state, draft => { // "draft"가 immer를 사용하여 불변성을 관리해주는 방법? 이다.

        console.log("action : ",action)
        console.log("LOG_IN 일어남!!");
        console.log("1. LOG_IN : ", { state, draft });

        console.log("5. draft.user  : ",  draft.user );
        console.log("6. is_login : ", draft.is_login );

        setCookie("is_login", "success");  // 원래는 토큰이 들어가야된다.
        draft.user = action.payload.user;
        draft.is_login = true;

        console.log("2. LOG_IN : ", { state, draft });
        console.log("3. draft.user  : ",  draft.user );
        console.log("4. is_login : ", draft.is_login );
      }),
    [LOG_OUT]: (state, action) => produce(state, draft => {}),
    [GET_USER]: (state, action) => produce(state, draft => {}),
  },
  initialState
);

//action creator export 액션생성함수를 export해줘야 다른곳에서 가져다 쓸수 있어서 해주는거다.
const actionCreators = {
  logIn,
  logOut,
  getUser,
  loginAction,
};

export { actionCreators };
