const initialState = {
    mapCenter: null,
    userPosition:null
  };

  const mapReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_CENTER": {
        return { ...state, mapCenter : {...action.center} };
      }
      case "SET_USER_POSITION": {
        return { ...state, userPosition : {...action.userPosition} };
      }
      default: {
        return state;
      }
    }
  };
  
  export default mapReducer;

  export const getCenter= (state) => {
    return state.map.mapCenter;
  };

  export const getUserPosition= (state) => {
    return state.map.userPosition;
  };
  
  