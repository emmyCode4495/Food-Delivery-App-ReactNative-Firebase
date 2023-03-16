import {StyleSheet,
    View,
    Text,
     Image,TouchableOpacity} from 'react-native';
     
import {Button } from 'react-native-elements'
import {colors, parameters, title} from '../../global/styles';
import {ReactComponentElement, useState,useRef} from 'react';
import Header from '../../components/header';
import * as Animatable from 'react-native-animatable'


import Swiper from 'react-native-swiper'

export default function SignInWelcomeScreen({navigation}){
    return(

        <View style={{flex:1}}>

            <View style={{flex:3,
                        justifyContent:'flex-start',
                        alignItems:'center',
                        paddingTop:parameters.paddingTop}}>
            <Text style={{fontSize:26,color:colors.background2,fontWeight:'bold'}}>
                DISCOVER RESTAURANTS
            </Text>
            <Text style={{fontSize:26,color:colors.background2,fontWeight:'bold'}}>
                IN YOUR AREA
            </Text>
            </View>
            
            <View style={{flex:4,justifyContent:'center'}}>
                <Swiper autoplay={true} showsButtons={false}>
                    <View style={StyleSheet.slider1}>
                        <Image 
                        source={{uri:'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'}}
                        style={{height:'100%', width:'100%'}}/>
                    </View>

                    <View style={StyleSheet.slider2}>
                        <Image 
                        source={{uri:'https://images.unsplash.com/photo-1557142046-c704a3adf364?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'}}
                        style={{height:'100%', width:'100%'}}/>
                    </View>

                    <View style={StyleSheet.slider3}>
                        <Image 
                        source={{uri:'https://images.unsplash.com/photo-1589227365533-cee630bd59bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'}}
                        style={{height:'100%', width:'100%'}}/>
                    </View>

                    <View style={StyleSheet.slider4}>
                        <Image 
                        source={{uri:'https://images.unsplash.com/photo-1569058242252-623df46b5025?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'}}
                        style={{height:'100%', width:'100%'}}/>
                    </View>

                    <View style={StyleSheet.slider5}>
                        <Image 
                        source={{uri:'https://images.unsplash.com/photo-1542574271-7f3b92e6c821?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'}}
                        style={{height:'100%', width:'100%'}}/>
                    </View>
                </Swiper>
            </View>

            <View style={{flex:4, marginTop: 20}}>
                <View style={{marginHorizontal:20,marginVertical:20}}>
                <Button
                    title="SIGN IN"
                    buttonStyle={parameters.styledButton}
                    titleStyle={parameters.buttonTitle}
                    onPress = {()=>{
                        navigation.navigate("SignInScreen")
                    }}
                    />
                </View>

                <View style={{marginHorizontal:20,marginVertical:20}}>
                    <Button
                    title="CREATE AN ACCOUNT"
                    buttonStyle={parameters.styledButton1}
                    titleStyle={parameters.buttonTitle1}
                    onPress = {()=>{
                        navigation.navigate("CreateAccountScreen")
                    }}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    slide1:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#9DD6EB'
    },
    slide2:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#97CAE5'
    },
    slide3:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#92BBD9'
    },
    slide4:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#92BBD9'
    },
    slide5:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#92BBD9'
    },
    opacityView:{
        marginLeft: 10,
        marginRight: 5,
        marginTop: 20,
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center"
    },
    buttonText:{
        color:'white',
        fontWeight:'bold',
        justifyContent:'center',
        fontSize:23
   },
   buttonText1:{
    color:'#ff8c52',
    fontWeight:'bold',
    justifyContent:'center',
    fontSize:23 
}
})