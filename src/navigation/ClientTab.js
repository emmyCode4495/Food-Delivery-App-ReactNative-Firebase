import React from 'react'

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import {Icon} from 'react-native-elements'

import HomeScreen from '../screens/contentScreens/homeScreen';
import SearchScreen from '../screens/contentScreens/searchScreenTab'
import {colors} from '../global/styles'
import MyOrderScreen from '../screens/contentScreens/myOrdersScreen';
import MyAccountScreen from '../screens/contentScreens/myAccountScreen';
import { ClientStackNavigation } from './clientStack';

const clientTabsNavigation = createBottomTabNavigator();

export default function RootClientTabs(){
    return(
        <clientTabsNavigation.Navigator
            screenOptions= {{
                activeTintColor:colors.buttons
            }}
        >
            <clientTabsNavigation.Screen
                name="HomeScreen"
                component={HomeScreen}
                options = {{
                    tabBarLabel : "Home",
                    headerShown:false,
                    tabBarIcon:({color,size})=>(
                        <Icon
                            name="home"
                            type="material"
                            color={color}
                            size={size}
                        />
                    )
                }}
            />

<clientTabsNavigation.Screen
                name="searchScreen"
                component={ClientStackNavigation}
                options = {{
                    tabBarLabel : "Search",
                    headerShown:false,
                    tabBarIcon:({color,size})=>(
                        <Icon
                            name="search"
                            type="material"
                            color={color}
                            size={size}
                        />
                    )
                }}
            />

<clientTabsNavigation.Screen
                name="myOrdersScreen"
                component={MyOrderScreen}
                options = {{
                    tabBarLabel : "Orders",
                    headerShown:false,
                    tabBarIcon:({color,size})=>(
                        <Icon
                            name="view-list"
                            type="material"
                            color={color}
                            size={size}
                        />
                    )
                }}
            />

<clientTabsNavigation.Screen
                name="myAccountScreen"
                component={MyAccountScreen}
                options = {{
                    tabBarLabel : "Profile",
                    headerShown:false,
                    tabBarIcon:({color,size})=>(
                        <Icon
                            name="person"
                            type="material"
                            color={color}
                            size={size}
                        />
                    )
                }}
            />
        </clientTabsNavigation.Navigator>
    )
}