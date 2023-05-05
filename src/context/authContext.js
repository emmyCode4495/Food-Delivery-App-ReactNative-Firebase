import React, {createContext, useReducer} from 'react'
import { signInReducer } from '../reducers/authReducers'

export const SignInContext = createContext()


export const SignInContextProvider = (props)=>{
const[signedIn, dispatchSignedIn] = useReducer(signInReducer,{
    userToken:null,
})

return(
    <SignInContext.Provider value={{signedIn,dispatchSignedIn}}>
        {props.children}
    </SignInContext.Provider>
)
}