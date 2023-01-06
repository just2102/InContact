import { authAPI } from "../API/api"
import lenin from "../img/lenin.png"

const SET_CURRENT_USER          = "SET_CURRENT_USER"
const SET_CURRENT_USER_AVATAR   = "SET_CURRENT_USER_AVATAR"
const TOGGLE_IS_FETCHING        = "TOGGLE_IS_FETCHING"
const SET_USER_NOT_AUTHORIZED   = "SET_USER_NOT_AUTHORIZED"





let initialState = {
    currentUser: undefined,
    isFetching: false,
    isAuthorized: undefined,
}

const setCurrentUser                = (id, login, email)       =>  ({type:SET_CURRENT_USER,    currentUser:{id,login,email}})
export const setCurrentUserAvatar   = (avatar)                 =>  ({type:SET_CURRENT_USER_AVATAR, avatar})
const toggleIsFetching              = (status)                 =>  ({type:TOGGLE_IS_FETCHING,  status:status})
const setUserNotAuthorzied          = ()                       =>  ({type:SET_USER_NOT_AUTHORIZED})

export function getCurrentUserAuthData() {
    return function (dispatch) {
        dispatch(toggleIsFetching(true));

        //free account credentials to test from gh-pages: id:1079, login: free, email: free@samuraijs.com, password: free
        // dispatch(setCurrentUser(1079, 'free', 'free@samuraijs.com'))
        // dispatch(toggleIsFetching(false))
        authAPI.whoAmI().then(data=>{
            if (data.resultCode===0) {
                dispatch(setCurrentUser(data.data.id,data.data.login,data.data.email))
            } else dispatch(setUserNotAuthorzied())
            dispatch(toggleIsFetching(false))
        })
    }
}

const authReducer = (state= initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.currentUser,
                isAuthorized: true,
            }
        case SET_CURRENT_USER_AVATAR:
            if (action.avatar) {
                let stateCopy = {...state}
                stateCopy.currentUser = {...state.currentUser}
                stateCopy.currentUser.avatar = action.avatar
                return stateCopy
            } else {return state}
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.status
            }
        case SET_USER_NOT_AUTHORIZED:
            return {
                ...state,
                isAuthorized:false
            }
        default:
            return state
    }
}
export default authReducer