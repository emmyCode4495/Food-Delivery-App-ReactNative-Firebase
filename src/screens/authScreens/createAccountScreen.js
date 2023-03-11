import React from 'react';
import {Text,View,StyleSheet} from 'react-native'


export default function CreateAccountScreen(){
    return(
        <View>
            <Text style={styles.minorStyling}>
                This is the Create Account Screen
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    minorStyling:{
        color:"red",
        fontWeight:"bold",
        fontSize: 35
    }
})