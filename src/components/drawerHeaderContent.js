import React from 'react'

import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem

} from '@react-navigation/drawer'

import {
    View,
    Text,
    Linking,
    Pressable,
    Alert,
    Switch,
    StyleSheet
} from 'react-native'

import {
    Avatar,
    Button,
    Icon
} from 'react-native-elements'

import {colors} from '../global/styles'
export default function DrawerHeaderContent(props){
        return(
            <View style={styles.container}>
                <DrawerContentScrollView {...props}>
                   <View style={{backgroundColor:colors.buttons, paddingBottom:15}}> 
                        <View style={styles.drawerHeaderStyle}>
                            <Avatar 
                                rounded
                                avatarStyle={styles.avatarIconStyle}
                                source ={{uri:'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png'}}
                                size={75}

                            />

                            <View style={{marginLeft:10,}}>
                                <Text style={{fontWeight:'bold',color:colors.cardBackground,fontSize:18}}>Emmanuel Pius</Text>
                                <Text style={{color:colors.cardBackground,fontSize:14}}>Enyaemmanue33@gmail.com</Text>
                            </View>
                        </View>

                        <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>        

                            <View style={{flexDirection:'row',justifyContent:'center'}}>
                                <View style={{marginLeft:10,alignItems:'center',justifyContent:'center'}}>
                                    <Text style={{fontWeight:'bold',color:colors.cardBackground,fontSize:18}}>1</Text>
                                    <Text style={{color:colors.cardBackground,fontSize:14}}>My favourites</Text>
                                </View>
                            </View>

                            <View style={{flexDirection:'row',marginTop:0,justifyContent:'center',paddingRight:10}}>
                                <View style={{marginLeft:10,alignItems:'center',justifyContent:'center'}}>
                                    <Text style={{fontWeight:'bold',color:colors.cardBackground,fontSize:18}}>0</Text>
                                    <Text style={{color:colors.cardBackground,fontSize:14}}>Items in Cart</Text>
                                </View>
                            </View>

                        </View>
                </View>

                
                <DrawerItemList {...props} />
                <DrawerItem
                label="Payment"
                icon={({color,size})=>(
                    <Icon
                        type="material-community"
                        name='credit-card-outline'
                        color={color}
                        size={size}
                    />
                )}
                />
                <DrawerItem
                label="Promotions"
                icon={({color,size})=>(
                    <Icon
                        type="material-community"
                        name='tag-heart'
                        color={color}
                        size={size}
                    />
                )}
                />

                <DrawerItem
                label="Settings"
                icon={({color,size})=>(
                    <Icon
                        type="material-community"
                        name='cog-outline'
                        color={color}
                        size={size}
                    />
                )}
                />

                <DrawerItem
                label="Help"
                icon={({color,size})=>(
                    <Icon
                        type="material-community"
                        name='lifebuoy'
                        color={color}
                        size={size}
                    />
                )}
                />

                <View style={{borderTopWidth:1, borderTopColor:colors.grey5}}>
                    <Text style={styles.preferenceStyle}>Preferences</Text>

                    <View style={styles.switchStyle}>
                        <Text style={styles.DarkThemeTextStyle}>Dark Theme</Text>
                        <View style={{paddingRight:10}}>
                               <Switch 
                                   trackColor={{false: '#767577',true: '#81b0ff'}}
                                   thumbColor= {'#f4f3f4'}
                               />   
                        </View>
                    </View>
                </View>

                
                </DrawerContentScrollView>
                <DrawerItem
                label="Sign Out"
                icon={({color,size})=>(
                    <Icon
                        type="material-community"
                        name='logout-variant'
                        color={color}
                        size={size}
                    />
                )}
               
                />
            </View>
        )
}


const styles = StyleSheet.create({
    container:{
        flex:1
    },
    avatarIconStyle:{
        borderWidth: 4,
        borderColor:colors.cardBackground   
    },
    drawerHeaderStyle:{
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:20,
        paddingVertical:10
    },
    preferenceStyle:{
      fontSize:20,
      color:colors.grey3,
      paddingTop:10,
      paddingLeft:20  
    },
    switchStyle:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingLeft:20,
        paddingVertical:15,
        paddingRight:20
    },
    DarkThemeTextStyle:{
        fontSize:18,
        fontWeight:'bold',
        color:colors.grey2,
        paddingTop:10,
        paddingLeft:0
    }
})