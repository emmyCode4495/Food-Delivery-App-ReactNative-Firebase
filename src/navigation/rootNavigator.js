import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Auth from './authNavigation'

export default function RootNavigator(){
    return(
        <NavigationContainer>
            <Auth />
        </NavigationContainer>
    )
}