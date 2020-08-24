
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

  
export const requestMarkers = () => ({
  type: "REQUEST_MARKERS",
});

export const receiveMarkers = (markers) => ({
  type: "RECEIVE_MARKERS",
  markers,
});

export const receiveMarkersError = () => ({
  type: "RECEIVE_MARKERS_ERROR",
});