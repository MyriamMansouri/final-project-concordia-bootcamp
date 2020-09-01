import { combineReducers } from "redux";

import user from "./user-reducer";
import markers from "./markers-reducer";
import map from "./map-reducer";

export default combineReducers({ user, markers, map });
