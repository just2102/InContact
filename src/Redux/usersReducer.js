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
    numOfUsersOnPage: 80,
    currentPage: 1
}

export const followCreator = (userId)        =>      ({type:FOLLOW, userId: userId})
export const unfollowCreator = (userId)      =>      ({type:UNFOLLOW, userId: userId})
export const setUsersCreator = (users)       =>      ({type:SET_USERS, users: users})
export const setTotalUsersCreator = (number) =>      ({type:SET_TOTAL_USERS, number: number})
export const setCurrentPageCreator = (page)  =>      ({type:SET_CURRENT_PAGE, page: page})


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
        default:
            return state
    }
}


export default usersReducer