import { produce } from "immer";
import { createAction, handleActions } from "redux-actions";
import { deleteCookie, setCookie } from "../../shared/Cookie";

import firebase from "firebase/app";
import { auth } from "../../shared/firebase";

//actions type
const SET_USER = "SET_USER";
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";

// action creators
const logOut = createAction(LOG_OUT, user => ({ user }));
const setUser = createAction(SET_USER, user => ({ user }));
const getUser = createAction(GET_USER, user => ({ user }));

// initialState
const initialState = {
  user: null,
  is_login: false,
};

//middleware actions
const loginFB = (id, pwd) => {
  return function (dispatch, getState, { history }) {
    auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then(res => {
      auth
        .signInWithEmailAndPassword(id, pwd)
        .then(user => {
          console.log("loginFB : ", user);

          dispatch(
            setUser({
              user_name: user.user.displayName,
              id: id,
              user_profile: "",
              uid: user.user.uid,
            })
          );

          history.push("/");
        })
        .catch(error => {
          var errorCode = error.code;
          var errorMessage = error.message;

          console.log(errorCode, errorMessage);
        });
    });
  };
};

const signupFB = (id, pwd, user_name) => {
  return function (dispatch, getState, { history }) {
    auth
      .createUserWithEmailAndPassword(id, pwd)
      .then(user => {
        console.log("signupFB : ", user);
        auth.currentUser
          .updateProfile({
            displayName: user_name,
          })

          .then(() => {
            dispatch(
              setUser({
                user_name: user_name,
                id: id,
                user_profile: "",
                uid: user.user.uid,
              })
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

const loginCheckFB = () => {
  return function (dispatch, getState, { history }) {
    auth.onAuthStateChanged(user => {
      console.log("loginCheckFB : ", user);
      if (user) {
        dispatch(
          setUser({
            user_name: user.displayName,
            user_profile: "",
            id: user.email,
            uid: user.uid,
          })
        );
      } else {
        dispatch(logOut());
      }
    });
  };
};

const logOutFB = () => {
  return function (dispatch, getState, { history }) {
    auth.signOut().then(() => {
      // 세션 스토리지에서 firebase key를 삭제 한다.
      dispatch(logOut());
      history.push("/");
    });
  };
};

// reducer
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, draft => {
        setCookie("is_login", "success");

        draft.user = action.payload.user;
        draft.is_login = true;
      }),

    [LOG_OUT]: (state, action) =>
      produce(state, draft => {
        deleteCookie("is_login"); // 쿠키를 삭제 해주는데, 값만 삭제해주고, 이름은 그대로 남아있는듯 하다.

        draft.user = null;
        draft.is_login = false;
      }),
    [GET_USER]: (state, action) => produce(state, draft => {}),
  },
  initialState
);

//action creator export
const actionCreators = {
  loginCheckFB,
  loginFB,
  signupFB,
  logOut,
  logOutFB,
  getUser,
};

export { actionCreators };
