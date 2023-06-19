import { ERROR, GETUSER, LOGOUTUSER, SUCCESSUSER } from "./actionTypes.login";

const initialState = {
  isLoading: false,
  isError: false,
  user: null,
  token: null,
};

export const loginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ERROR: {
      return { ...state, isLoading: false, isError: true };
    }
    case GETUSER: {
      return { ...state, isLoading: true };
    }
    case LOGOUTUSER: {
      return { ...state, user: null, token: null };
    }
    case SUCCESSUSER: {
      return {
        ...state,
        isLoading: false,
        token: payload.token,
        user: payload.user,
      };
    }
    default: {
      return state;
    }
  }
};
