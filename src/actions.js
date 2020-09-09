//---------------User actions-----------------
export const requestUser = () => ({
    type: "REQUEST_USER",
  });
  
  export const receiveUser = (user) => ({
    type: "RECEIVE_USER",
    user,
  });
  
  export const receiveUserError = (error) => ({
    type: "RECEIVE_USER_ERROR",
    error
  });
  
  export const addUser = (user) => ({
    type: "ADD_USER",
    user
  });
  export const updateUser = (user) => ({
    type: "UPDATE_USER",
    user
  });

  export const resetUser = () => ({
    type: "RESET_USER",
  });

//---------------Marker actions-----------------
export const requestMarkers = () => ({
  type: "REQUEST_MARKERS",
});

export const receiveMarkers = (markers) => ({
  type: "RECEIVE_MARKERS",
  markers,
});

export const receiveMarkersError = (error) => ({
  type: "RECEIVE_MARKERS_ERROR",
  error
});

export const sendMarker = () => ({
  type: "SEND_MARKER"
});

export const addMarker = (marker) => ({
  type: "ADD_MARKER",
  marker
});

export const voteMarker = (marker) => ({
  type: "VOTE_MARKER",
  marker
});

//---------------Map actions-----------------
export const setCenter = (center)=> ({
  type: "SET_CENTER",
  center
})

export const setUserPosition = (userPosition)=> ({
  type: "SET_USER_POSITION",
  userPosition
})