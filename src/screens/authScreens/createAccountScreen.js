import React, { useState } from 'react';
import {Text,Alert,View,StyleSheet, ScrollView, TextInput} from 'react-native'
import Header from '../../components/header';
import { colors } from '../../global/styles';
import { Formik } from 'formik';
import { Icon, Button } from 'react-native-elements';
import * as Animatable from 'react-native-animatable'

import auth from '@react-native-firebase/auth'

const initialValues = {name:'',family_name:'',phone_number:'',email:'',password:''}
const CreateAccountScreen = ({navigation})=>{

    const[passwordFocused, setPasswordFocused] = useState(false)
    const[passwordBlurred,setPasswordBlurred] = useState(false)

    async function signUp(values){
        const{email,password} = values

        try{
            await auth().createUserWithEmailAndPassword(email,password)
            console.log("User Created Successfully")
        }catch(error){
            if(error.code === 'auth/email-already-in-use'){
                Alert.alert(
                    'Email already in use!'
                )
            }
            if(error.code === 'auth/invalid-email'){
                Alert.alert(
                    'Invalid Email Address'
                )
            }
            else{
                Alert.alert(error.code)
            }
        }
    }
    return(
        <View style={styles.container}>
            <Header title="MY ACCOUNT" 
            type="arrow-left" navigation={navigation}/>
           <ScrollView keyboardShouldPersistTaps='always'>
                <View style={styles.view1}>
                    <Text style={styles.text1}>Sign-up</Text>
                </View>

                <Formik 
                    initialValues={initialValues}
                    onSubmit={(values)=>{signUp(values)}}
                >
                    {(props)=>(
                        <View style={styles.view2}>
                            <View>
                                <Text style={styles.text2}>Welcome to Foodie</Text>
                            </View>

                                <View style={styles.view6}>
                                    <TextInput 
                                        placeholder='First name'
                                        style={styles.input1}
                                        autoFocus = {true}
                                        onChangeText={props.handleChange('name')}
                                        value={props.values.name}
                                    />
                                </View>
                                <View style={styles.view6}>
                                    <TextInput 
                                        placeholder='Last name'
                                        style={styles.input1}
                                        autoFocus = {false}
                                        onChangeText={props.handleChange('family_name')}
                                        value={props.values.family_name}
                                    />
                                </View>
                                <View style={styles.view6}>
                                    <TextInput 
                                        placeholder='Mobile Number'
                                        style={styles.input1}
                                        keyboardType='number-pad'
                                        autoFocus = {false}
                                        onChangeText={props.handleChange('phone_number')}
                                        value={props.values.phone_number}
                                    />
                                </View>

                                <View style={styles.view10}>

                                    <View>
                                        <Icon 
                                            name='email'
                                            style={styles.email}
                                            color={colors.grey3}
                                            type='material'
                                        /> 
                                    </View>

                                    <View style={styles.view11}>
                                        <TextInput 
                                            placeholder='Email'
                                            style={styles.input4}
                                            autoFocus = {false}
                                            onChangeText={props.handleChange('email')}
                                            value={props.values.email}
                                        />
                                    </View>
                                </View>

                                <View style={styles.view14}>
                                    <Animatable.View 
                                        animation={passwordFocused? "fadeInRight": "fadeInLeft"}
                                        duration={400} >
                                        <Icon 
                                            name='lock'
                                            color={colors.grey3}
                                            type='material'
                    
                                        />
                                    </Animatable.View>

                                    <TextInput 
                                            placeholder='password'
                                            style={{flex:1}}
                                            autoFocus = {false}
                                            onChangeText={props.handleChange('password')}
                                            value={props.values.password}
                                            onFocus={()=>{setPasswordFocused(true)}}
                                            onBlur={()=>{setPasswordBlurred(true)}}
                                        />
                                         <Animatable.View animation={passwordBlurred?"fadeInLeft":"fadeInRight"} duration={400}>
                                        <Icon 
                                            name='visibility-off'
                                            color={colors.grey3}
                                            type='material'
                                            style={{marginRight:10}}
                                        />
                                    </Animatable.View>
                                </View>

                                <View style={styles.view15}>
                                    <Text style={styles.text3}>
                                        By creating an account on Foodie, we believe
                                    </Text>
                                    <View style={styles.view16}>
                                        <Text style={styles.text3}>you have read and agreed with our</Text>
                                        <Text style={styles.text4}>Terms & Conditions </Text>
                                        <Text style={styles.text3}>and</Text>
                                    </View>
                                    <Text style={styles.text4}>Privacy Statement</Text>
                                </View>
                                <View style={styles.view17}>
                                    <Button 
                                        title="CREATE ACCOUNT"
                                        buttonStyle={styles.button1}
                                        titleStyle={styles.title1}
                                        onPress={props.handleSubmit}
                                    />
                                </View>
                            </View>
                    )}
                </Formik>
                <View style={styles.view18}>
                        <Text style={styles.text5}>OR</Text>
                </View>

                <View style={styles.view19}>
                       <View style={styles.view20}>
                            <Text style={styles.text6}>already have an account?</Text>
                        </View>
                        <View style={styles.view17}>
                        <Button 
                            title="SIGN IN"
                            buttonStyle={styles.button2}
                            titleStyle={styles.title2}
                            onPress={()=>{navigation.navigate('SignInScreen')}}
                        />
                        </View> 
                </View>
           </ScrollView>
        </View>
    )
}

export default CreateAccountScreen
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    view1:{
        justifyContent:'center',
        alignItems:"flex-start",
        marginTop:10,
        marginBottom:10,
        paddingHorizontal:15
    },
    text1:{
        fontSize:25,
        color:colors.buttons,
        fontWeight:"bold"
    }, 
    view2:{
        justifyContent:"flex-start",
        backgroundColor:"white",
        paddingHorizontal:15
    },
    view3:{
        marginTop:5,
        marginBottom:10
    },
    text2:{
        fontSize:15,
        color:"grey"
    },
    view4:{
        flexDirection:"row",
        borderWidth:1,
        borderColor:"grey",
        borderRadius:12,
        paddingLeft:5
    },
    view5:{
        marginLeft:30,
        marginTop:20
    },
    input1:{
       fontSize:16,
       marginLeft:5
    },
    view6:{
        flexDirection:'row',
        borderWidth:1,
        borderColor:"grey",
        borderRadius:12,
        paddingLeft:5,
        marginTop:20,
        height:48
    },
    view7:{
        marginLeft:0,
        maxWidth:"65%"
    },
    input2:{
        fontSize:16,
        marginLeft:0,
        marginBottom:0
    },
    view8:{
        flexDirection:'row',
        borderWidth:1,
        borderColor:"grey",
        borderRadius:12,
        paddingLeft:5,
        marginTop:20,
        height:48
    },
    email:{
        fontSize:24,
        padding:0,
        marginBottom:0,
        marginTop:11,
        marginLeft:2
    },
    view10:{
        flexDirection:'row',
        borderWidth:1,
        borderColor:"grey",
        borderRadius:12,
        paddingLeft:5,
        marginTop:20,
        height:48
    },
    view11:{
        marginTop:9,
        marginLeft:30,
        maxWidth:"65%",
    },
    input4:{
        fontSize:16,
        marginLeft:-20,
        marginBottom:-10
    },
    view13:{
        flexDirection:'row',
        height:40
    },
    view14:{
        borderWidth:1,
        borderRadius:12,
        borderColor:"grey",
        flexDirection:'row',
        justifyContent:"space-between",
        alignContent:'center',
        alignItems:"center",
        paddingLeft:5,
        marginTop:20,
        height:48
    },
    view15:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:10
    },
    text3:{
        fontSize:13
    },
    view16:{
        flexDirection:"row"
    },
    text4:{
        textDecorationLine:'underline',
        color:'green',
        fontSize:13
    },
    button1:{
        backgroundColor:colors.buttons,
        alignContent:"center",
        justifyContent:"center",
        borderRadius:30,
        borderWidth:1,
        borderColor:"white",
        height:50,
        paddingHorizontal:20,
        width:'100%'
    },
    title1:{
        marginTop:-3,
        justifyContent:"center",
        alignItems:"center",
        fontWeight:"bold",
        fontSize:20,
        color:"white"

    },
    view17:{
        marginVertical:10,
        marginTop:30
    },
    view18:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center',
        paddingTop:15
    },
    text5:{
        fontSize:15,
        fontWeight:'bold'
    },
    text6:{
        fontSize:17,
        fontWeight:'bold'
    },
    view19:{
        backgroundColor:'white',
        paddingHorizontal:15
    },
    view20:{
        marginTop:5,
        alignItems:'center'
    },
    view21:{
        marginTop:5,
        alignItems:'flex-end'
    },
    button2:{
        backgroundColor:'white',
        alignContent:"center",
        borderRadius:30,
        justifyContent:"center",
        borderWidth:1,
        borderColor:colors.buttons,
        height:50,
        paddingHorizontal:20,
        // width:'100%'
    },
    title2:{
        color:colors.buttons,
        fontSize:18,
        fontWeight:"bold",
        alignItems:"center",
        justifyContent:"center",
        marginTop:-3
    }
})