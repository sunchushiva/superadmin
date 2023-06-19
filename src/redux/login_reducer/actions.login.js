import axios from "axios";
import {
  ERROR,
  GETUSER,
  LOGINURL,
  SUCCESSUSER,
  LOGOUTUSER,
} from "./actionTypes.login";

const ERRORFUNCTION = () => {
  return { type: ERROR };
};

const GETUSERFUNCTION = () => {
  return { type: GETUSER };
};

const USERSUCCESSFUNCTION = (payload) => {
  return { type: SUCCESSUSER, payload };
};

const LOGOUTUSERFUNCTION = () => {
  return { type: LOGOUTUSER };
};

export const USERCALLFUNCTION = async (dispatch, data) => {
  dispatch(GETUSERFUNCTION());
  try {
    const request = await axios.post(LOGINURL, data);
    const response = await request.data;
    dispatch(USERSUCCESSFUNCTION(response));
    return response;
  } catch (err) {
    dispatch(ERRORFUNCTION());
  }
};

export const LOGOUTUSERCALL = (dispatch) => {
  dispatch(LOGOUTUSERFUNCTION());
};
