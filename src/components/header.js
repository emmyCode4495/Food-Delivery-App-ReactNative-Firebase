import {StyleSheet,View,Text,Dimensions} from 'react-native'
import {colors, parameters} from '../global/styles'
import React from 'react'

import { Icon } from '@rneui/base'

export default function Header({title,type,navigation}){

    return(
        <View style = {styles.header}>
            <View style = {styles.IconStyle}>
                <Icon 
                    type='material-community'
                    name={type}
                    color={colors.headerText}
                    size= {28}
                    onPress={()=>{navigation.goBack()}}/>
            </View>
            <View>
                <Text style = {styles.headerText}>{title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        flexDirection: 'row',
        height: parameters.headerHeight,
        paddingTop: parameters.paddingTop,
        backgroundColor:colors.buttons,
        marginBottom: 10
    },
    headerText:{
        color: colors.headerText,
        fontSize:  28,
        fontWeight: 'bold',
        marginLeft: 30
    },
    IconStyle:{
        marginLeft: 20,
    }
})