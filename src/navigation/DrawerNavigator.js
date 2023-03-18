import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import RootClientTabs from './ClientTab'

import {Icon} from 'react-native-elements'
import {colors} from '../global/styles'
import BusinessConsoleScreen from '../screens/contentScreens/businessConsoleScreen'
import DrawerHeaderContent from '../components/drawerHeaderContent'

const Drawer = createDrawerNavigator()

export default function DrawerNavigator(){
    return(
        <Drawer.Navigator useLegacyImplementation={true}
            drawerContent ={props=><DrawerHeaderContent{...props} />}
        >
            
            <Drawer.Screen
                name="RootClientTabs"
                component={RootClientTabs}

                options={{
                    title:"Client",
                    headerShown:false,
                    drawerIcon:({focused,size})=>(
                        <Icon
                            type='material-community'
                            name='home'
                            color={focused ? '#7cc' : colors.grey2 }
                            size={size}
                        />
                    )
                }}
            />

        <Drawer.Screen
                        name="BusinessConsoleScreen"
                        component={BusinessConsoleScreen}

                        options={{
                            title:"Business console",
                            headerShown:false,
                            drawerIcon:({focused,size})=>(
                                <Icon
                                    type='material'
                                    name='business'
                                    color={focused ? '#7cc' : colors.grey2 }
                                    size={size}
                                />
                            )
                        }}
                    />
        </Drawer.Navigator>
    )
}