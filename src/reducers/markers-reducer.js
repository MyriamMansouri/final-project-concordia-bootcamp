const initialState = {
  currentMarkers: null,
  status: "idle",
};

const markersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REQUEST_MARKERS": {
      return { ...state, status: "loading" };
    }
    case "RECEIVE_MARKERS": {
      return {
        ...state,
        currentMarkers: action.markers,
        status: "idle",
      };
    }
    case "RECEIVE_MARKERS_ERROR": {
      return { ...state, status: "error" };
    }
    case "SEND_MARKER": {
      return { ...state, status: "loading" };
    }
    case "ADD_MARKER": {
      return {
        ...state,
        currentMarkers: {
          ...state.currentMarkers,
          [action.marker._id]: {
            ...action.marker,
          },
        },
        status: "idle",
      };
    }
    case "VOTE_MARKER": {
      return {
        ...state,
        currentMarkers: {
          ...state.currentMarkers,
          [action.marker._id]: {
            ...action.marker,
          },
        },
        status: "idle",
      };
    }
    default: {
      return state;
    }
  }
};

export default markersReducer;

export const getMarkers = (state) => {
  return state.markers.currentMarkers
    ? Object.values(state.markers.currentMarkers)
    : null;
};

export const sendMarkerStatus = (state) => {
  console.log(state.markers.status)
  return state.markers.status;
};