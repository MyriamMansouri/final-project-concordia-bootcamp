
export const requestUser = () => ({
    type: "REQUEST_USER",
  });
  
  export const receiveUser = (user) => ({
    type: "RECEIVE_USER",
    user,
  });
  
  export const receiveUserError = () => ({
    type: "RECEIVE_USER_ERROR",
  });
  
  export const resetUser = () => ({
    type: "RESET_USER",
  });