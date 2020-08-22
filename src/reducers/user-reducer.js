const initialState = {
  currentUser: null,
  status: "idle",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REQUEST_USER": {
      return { ...state, status: "loading" };
    }
    case "RECEIVE_USER": {
      return {
        ...state,
        currentUser: action.user,
        status: "idle",
      };
    }
    case "RECEIVE_USER_ERROR": {
      return { ...state, status: "error" };
    }
    case "RESET_USER": {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export default userReducer;

// true if user logged in
export const checkIfLoggedIn = (state) => {
  return state.user.currentUser ? true : false;
};
