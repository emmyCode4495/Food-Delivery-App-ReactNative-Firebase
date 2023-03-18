import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import SignInWelcomeScreen from '../screens/authScreens/signInWelcomeScreen';
import SignInScreen from '../screens/authScreens/SigninScreen';
import CreateAccountScreen from '../screens/authScreens/createAccountScreen';
import HomeScreen from '../screens/contentScreens/homeScreen';
import RootClientTabs from './ClientTab';
import DrawerNavigator from './DrawerNavigator';
import MapScreen from '../screens/contentScreens/mapScreen';

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
           name = "DrawerNavigator"
           component = {DrawerNavigator}
           options ={{
                headerShown: false,
           }}
            />

             <Auth.Screen
           name = "mapScreen"
           component = {MapScreen}
           options ={{
                headerShown: false,
           }}
            />
        </Auth.Navigator>
    )
}