import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import SignInWelcomeScreen from '../screens/authScreens/signInWelcomeScreen';
import SignInScreen from '../screens/authScreens/SigninScreen';
import CreateAccountScreen from '../screens/authScreens/createAccountScreen';
import HomeScreen from '../screens/contentScreens/homeScreen';

const Auth = createStackNavigator();

export default function AuthStack(){
    return(
        <Auth.Navigator>
           <Auth.Screen
           name = "SignInWelcomeScreen"
           component = {SignInWelcomeScreen}
           options ={{
                headerShown: false,
                
           }}
            />
            <Auth.Screen
           name = "SignInScreen"
           component = {SignInScreen}
           options ={{
                headerShown: false,
               
           }}
            />
            <Auth.Screen
           name = "CreateAccountScreen"
           component = {CreateAccountScreen}
           options ={{
                headerShown: false,
                
           }}
            />
            <Auth.Screen
           name = "HomeScreen"
           component = {HomeScreen}
           options ={{
                headerShown: false,
           }}
            />
        </Auth.Navigator>
    )
}