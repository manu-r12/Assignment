import { createContext, use, useReducer } from "react";

export const UserContext = createContext()


export const USER_ACTION_TYPES = {
    ADD_NEW_PROFILE: 'ADD_NEW_PROFILE',
    OPEN_POPUP_BOX:'OPEN_POPUP_BOX',
    EDIT_PROFILE:'EDIT_PROFILE',
    SET_CURRENT_USER:'SET_CURRENT_USER',
  };
  
 const INITIAL_STATES = {
    details : null,
    isPopUpOpen: null,
    currentUser: null

 } 

 const userReducer = (state ,  action) =>{
    const {type , payload}  = action

    switch(type){
        case USER_ACTION_TYPES.ADD_NEW_PROFILE:
            return {
                details : payload
            }
            case USER_ACTION_TYPES.OPEN_POPUP_BOX:
            return {
                ...state,
                isPopUpOpen : payload.isOpen
            }
            case USER_ACTION_TYPES.EDIT_PROFILE:
            return {
                ...state,
                isPopUpOpen : payload.isOpen
            }
            case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser : payload.currentUser
            }
        default:
            throw console.error("erro");    
    }
 }


 export const UserProvider = ({children}) =>{
    
    const [value , dispatch] = useReducer(userReducer, INITIAL_STATES)


    return <UserContext.Provider value={{value, dispatch}}>{children}</UserContext.Provider>
 }