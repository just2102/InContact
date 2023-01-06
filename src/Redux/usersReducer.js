import { usersAPI } from "../API/api"
import saniaAvatar from "../img/sania.png"
import kostiaAvatar from "../img/kostia.png"
import vasiaAvatar from "../img/vasia.png"
import masiaAvatar from "../img/masia.png"
import kirillAvatar from "../img/kirill.png"
import leninAvatar from "../img/lenin.png"
const FOLLOW           = 'FOLLOW';
const UNFOLLOW         = 'UNFOLLOW';
const SET_USERS        = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS  = 'SET_TOTAL_USERS'
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const TOGGLE_FOLLOWING_IN_PROGRESS = "TOGGLE_FOLLOWING_IN_PROGRESS"

let initialState = {
    usersData: [
        // {id:1,followed: true, name:'Sania', status:'Some status...', location:{city:'Vladivostok',country:'Russia'}, avatar:saniaAvatar},
        // {id:2,followed: true, name:'Kostia',status:'Some status...', location:{city:'Moscow',country:'Russia'}, avatar:kostiaAvatar},
        // {id:3,followed: true, name:'Vasia', status:'Some status...', location:{city:'Kyiv',country:'Ukraine'}, avatar:vasiaAvatar},
        // {id:4,followed: false, name:'Masia', status:'Some status...', location:{city:'Dalnegorsk',country:'Russia'}, avatar:masiaAvatar},
        // {id:5,followed: false, name:'Kirill',status:'Some status...', location:{city:'Tokyo',country:'Japan'}, avatar:kirillAvatar},
        // {id:6,followed: false, name:'Lenin', status:'Some status...', location:{city:'Toronto',country:'Canada'}, avatar:leninAvatar}
    ],
    totalUsers: 0,
    numOfUsersOnPage: 30,
    currentPage: 1,
    isFetching: false,
    followingInProgress: {
        isFollowing: false,
        userId: null
    }
}

const followSuccess = (userId)        =>      ({type:FOLLOW, userId: userId})
const unfollowSuccess = (userId)      =>      ({type:UNFOLLOW, userId: userId})
const setUsersSuccess = (users)       =>      ({type:SET_USERS, users: users})
const setTotalUsers = (number) =>      ({type:SET_TOTAL_USERS, number: number})
export const setCurrentPage = (page)  =>      ({type:SET_CURRENT_PAGE, page: page})
export const toggleIsFetching = (isFetching) =>    ({type:TOGGLE_IS_FETCHING, isFetching: isFetching})
export const toggleFollowingInProgress = (isFollowing, userId) =>    ({type:TOGGLE_FOLLOWING_IN_PROGRESS, isFollowing, userId})

export function getUsers (numOfUsersOnPage, currentPage) {
    return function(dispatch) {
        dispatch(toggleIsFetching(true));

        usersAPI.getUsers(numOfUsersOnPage,currentPage).then(data => {
            dispatch(setUsersSuccess(data.items));
            dispatch(setTotalUsers(data.totalCount));
    
            dispatch(toggleIsFetching(false));
          });
    
    }
}
export function follow (userId) {
    return function(dispatch) {
        dispatch(toggleFollowingInProgress(true, userId));

        usersAPI.followUser(userId).then(data=> {
            if (data.resultCode === 0) {
                dispatch(followSuccess(userId))
            } dispatch(toggleFollowingInProgress(false,null))
        })
    }
}
export function unfollow (userId) {
    return function(dispatch) {
        dispatch(toggleFollowingInProgress(true, userId));

        usersAPI.unfollowUser(userId).then(data=> {
            if (data.resultCode === 0) {
                dispatch(unfollowSuccess(userId))
            } dispatch(toggleFollowingInProgress(false,null))
        })
    }
}

function usersReducer (state = initialState, action) {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(user=> {
                    if (user.id === action.userId) {
                        return {...user, followed:true};
                    }
                    return user
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                usersData: state.usersData.map (user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        case SET_USERS:
            return {
                ...state,
                usersData: action.users
            }
        case SET_TOTAL_USERS:
            return {
                ...state,
                totalUsers: action.number
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: {
                    ...state.followingInProgress,
                    isFollowing: action.isFollowing,
                    userId:      action.userId
                }
            }
        default:
            return state
    }
}


export default usersReducer