import React,{useLayoutEffect} from 'react'
import { StyleSheet,Text, View } from 'react-native'
import { createStackNavigator, TransitionPresets} from '@react-navigation/stack'
import SearchResultScreens from '../screens/contentScreens/SearchResultScreen'
import SearchScreen from '../screens/contentScreens/searchScreenTab'
import RestaurantHomePage from '../screens/contentScreens/restaurantHomePage'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'
import MenuProductScreen from '../screens/contentScreens/MenuProductScreen'


const ClientSearch = createStackNavigator()

export function ClientStackNavigation({navigation, route}){

    useLayoutEffect(()=>{
        const routeName = getFocusedRouteNameFromRoute(route);
        if(routeName === "RestaurantHomePage" || "MenuProductScreen"){
            navigation.setOptions({tabBarStyle: { display: 'none' }})
        }
    }, [navigation,route])

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

    
<ClientSearch.Screen 
                name = "RestaurantHomePage"
                component = {RestaurantHomePage}
                options = {
                    () => ({
                        headerShown: false,
                        
                    })
                }
            />

<ClientSearch.Screen 
                name = "MenuProductScreen"
                component = {MenuProductScreen}
                options = {
                    () => ({
                        headerShown: false,
                        
                    })
                }
            />
    </ClientSearch.Navigator>

        
    )
}
