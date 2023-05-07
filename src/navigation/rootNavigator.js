import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'

import AppStack from './appStack'
import { SignInContext } from '../context/authContext'
import AuthStack from './authNavigation'

export default function RootNavigator(){

    const {signedIn} = useContext(SignInContext)
    return(
        <NavigationContainer>
            {
                signedIn.userToken === null ? <AuthStack /> : <AppStack />
            }
        </NavigationContainer>
    )
}