import React from 'react'
import { StyleSheet,Text, View } from 'react-native'
import { createStackNavigator, TransitionPresets} from '@react-navigation/stack'
import SearchResultScreens from '../screens/contentScreens/SearchResultScreen'
import SearchScreen from '../screens/contentScreens/searchScreenTab'


const ClientSearch = createStackNavigator()

export function ClientStackNavigation(){
    return (
        <ClientSearch.Navigator>

            <ClientSearch.Screen 
                name = "SearchScreen"
                component = {SearchScreen}
                options = {
                    () => ({
                        headerShown: false
                    })
                }
            /> 

<ClientSearch.Screen 
                name = "SearchResultScreens"
                component = {SearchResultScreens}
                options = {
                    () => ({
                        headerShown: false
                    })
                }
            /> 
        </ClientSearch.Navigator>
    )
}
