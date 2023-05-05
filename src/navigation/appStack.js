import React from 'react'
import DrawerNavigator from './DrawerNavigator';
import MapScreen from '../screens/contentScreens/mapScreen';

import { createStackNavigator } from '@react-navigation/stack'


const App = createStackNavigator();

export default function AppStack(){
    return(
        <App.Navigator>
                <App.Screen
            name = "App"
            component = {DrawerNavigator}
            options ={{
                headerShown: false,
            }}
            />

            <App.Screen
            name = "mapScreen"
            component = {MapScreen}
            options ={{
                headerShown: false,
            }}
            />
        </App.Navigator>
 )
}