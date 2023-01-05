import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import authReducer from "./authReducer";
import friendsReducer from "./friendsReducer";
import messengerReducer from "./messengerReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    profilePage:profileReducer,
    messengerPage:messengerReducer,
    friendsPage:friendsReducer,
    usersPage: usersReducer,
    
    auth:authReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store
export default store;