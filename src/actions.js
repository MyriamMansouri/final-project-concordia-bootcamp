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
    export const addUserError = (error) => ({
    type: "ADD_USER_ERROR",
    error
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

export const addMarker = (marker) => ({
  type: "ADD_MARKER",
  marker
});

export const voteMarker = (marker) => ({
  type: "VOTE_MARKER",
  marker
});

