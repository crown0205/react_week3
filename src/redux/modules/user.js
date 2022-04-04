import { produce } from "immer";
import { createAction, handleActions } from "redux-actions";
import { deleteCookie, setCookie } from "../../shared/Cookie";

import { auth } from "../../shared/firebase";

//actions type
const SET_USER = "SET_USER";
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";

// action creators // 액션함수를 "redux-actions"이 패키지로 받아 편하게 바꿔준거다.
const logOut = createAction(LOG_OUT, user => ({ user }));
const setUser = createAction(SET_USER, user => ({ user }));
const getUser = createAction(GET_USER, user => ({ user }));

// initialState
const initialState = {
  user: null,
  is_login: false,
};

//middleware actions
const loginAction = user => {
  return function (dispatch, getState, { history }) {
    dispatch(setUser(user));
    history.push("/");
  };
};

const signupFB = (id, pwd, user_name) => {
  return function (dispatch, getState, { history }) {
    auth
      .createUserWithEmailAndPassword(id, pwd) // firebase에 id,pwd를 생성.
      .then(user => {
        auth.currentUser
          .updateProfile({  // 닉네임을 새로 업데이트 시켜줌.
            displayName: user_name,
          })

          .then(() => {  // 리덕스에 setUser 유저 생성데이터를 넣어줌.
            dispatch(
              setUser({ user_name: user_name, id: id, user_profile: "" })
            );

            history.push("/");
          })
          .catch(error => {
            console.log(error);
          });
      })
      .catch(error => {
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(errorCode, errorMessage);
      });
  };
};

// reducer
export default handleActions(
  {
    [SET_USER]: (
      state,
      action // LOG_IN 기능은 이제 미들웨어에서 사용하여, SET_USER로 변경
    ) =>
      produce(state, draft => {
        setCookie("is_login", "success");

        draft.user = action.payload.user;
        draft.is_login = true;
      }),

    [LOG_OUT]: (state, action) =>
      produce(state, draft => {
        deleteCookie("is_login");

        draft.user = null;
        draft.is_login = false;
      }),
    [GET_USER]: (state, action) => produce(state, draft => {}),
  },
  initialState
);

//action creator export 액션생성함수를 export해줘야 다른곳에서 가져다 쓸수 있어서 해주는거다.
const actionCreators = {
  signupFB,
  logOut,
  getUser,
  loginAction,
};

export { actionCreators };
