import React from 'react'
import {Text,View,StyleSheet} from 'react-native'
import {Icon, withBadge} from 'react-native-elements'
import {colors, parameters} from '../global/styles'


export default function HomeHeader({navigation}){
    const BadgeIcon = withBadge(0)(Icon)
    return(
        <View style={styles.header}>

             <View style={{alignItems:"center",justifyContent:"center",marginLeft:15}}>
                    <Icon
                        type='material-community'
                        name="menu"
                        color={colors.cardBackground}
                        size={40}
                        onPress={()=>{
                            navigation.toggleDrawer()
                        }}/>
            </View>

            <View style={{alignItems:"center",justifyContent:"center"}}>
                <Text style={{color:colors.cardBackground,
                        fontSize:40,fontWeight:'bold'}}>FOODie</Text>
            </View>  

            <View style={{marginRight:15,alignItems:"center",justifyContent:"center"}}>
                <BadgeIcon 
                type="material-community"
                name="cart"
                size = {40}
                color={colors.cardBackground}
                />
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        backgroundColor:colors.buttons,
        height:parameters.headerHeight,
        justifyContent:'space-between'
    }
})