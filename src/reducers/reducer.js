import { combineReducers } from "redux";

import user from "./user-reducer";
import markers from "./markers-reducer";

export default combineReducers({ user, markers });
