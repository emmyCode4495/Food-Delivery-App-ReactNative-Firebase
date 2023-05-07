import {StyleSheet,
    View,
    Text,
    Dimensions,
     TextInput, TouchableOpacity, Alert} from 'react-native';
import {colors, parameters, title} from '../../global/styles';
import {ReactComponentElement, useState,useRef,useContext} from 'react';

import auth from '@react-native-firebase/auth'
import { SignInContext } from '../../context/authContext';

import Header from '../../components/header';
import * as Animatable from 'react-native-animatable'



import { Icon, SocialIcon,Button } from 'react-native-elements'
import {Formik, formik} from 'formik'

export default function SignInScreen({navigation}){

    const {dispatchSignedIn} = useContext(SignInContext)

    const [textInput2Focus,setTextInput2Focus] = useState(false)
    const [textInput1Focus,setTextInput1Focus] = useState(false)

    const textInput1 = useRef(1)
    const textInput2 = useRef(2)

    async function signIn(data){
        try{
        const {email,password} = data
        const user = await auth().signInWithEmailAndPassword(email,password)
        if(user){
            console.log("User Signed in successfully")
            dispatchSignedIn({type:"UPDATE_SIGN_IN",payload:{userToken:"signed-in"}})
        }
    }
        catch(error){
            Alert.alert(
                error.name,
                error.message
            )
        }
    }

    return(
        <View style = {styles.container}>

            <Header title="MY ACCOUNT" 
            type="arrow-left" navigation={navigation}/>
            <View style = {styles.titleTexttMargin}>
                <Text style = {styles.signInText}>SIGN-IN</Text>
            </View>

            <View style = {styles.headerText}>
                <Text style={styles.text1}>Please enter the email and password</Text>
                <Text style={styles.text1}>registered with your account</Text>
            </View>


            <Formik 
            
                initialValues={{email:'',password:''}}
                onSubmit={(values)=>{
                    signIn(values)
                }}
            >
                { (props) =>
                <View>
                <View style={{marginTop:20}}>
                <View style={styles.textInput1}> 
                    <Animatable.View animation={textInput1Focus?"":"fadeInLeft"}
                    duration={400}>
                        <Icon
                            style={styles.email}
                            name='email'
                            type='material'
                            iconStyle={{color:colors.grey3}}/>
                    </Animatable.View>                                                           
                    
                    <TextInput 
                    style ={{width:"90%"}} 
                    placeholder="Email"
                    onChangeText={props.handleChange('email')}
                    value={props.values.email}
                    ref = {textInput1}
                    onFocus = {()=>{
                        setTextInput1Focus(false)
                    }}
                    onBlur = {()=>{
                        setTextInput1Focus(true)
                    }}/>

                </View>

                <View style={styles.textInput2}>
                <Animatable.View animation={textInput2Focus?"":"fadeInLeft"} 
                duration = {400}>
                    <Icon 
                    name='lock'
                    iconStyle={{color:colors.grey3}}
                    type = "material"
                    />
                </Animatable.View>

                <TextInput 
                style={{width:"80%"}}
                    placeholder="password"
                    ref={textInput2}
                    onFocus = {()=>{
                        setTextInput2Focus(false)
                    }}
                    onChangeText={props.handleChange('password')}
                    value={props.values.password}
                    onBlur = {()=>{
                        setTextInput2Focus(true)
                    }}/>

                <Animatable.View animation={textInput2Focus?"":"fadeInRight"}
                duration={400}>
                <Icon 
                    name='visibility'
                    iconStyle={{color:colors.grey3}}
                    type = "material"
                    style={{marginRight: 10}}/>
                </Animatable.View>
                </View>
            </View>

                <View style={{marginHorizontal:20,marginVertical:20}}>
                <Button
                title="SIGN IN"
                 buttonStyle={parameters.styledButton}
                 titleStyle={parameters.buttonTitle}
                 onPress ={props.handleSubmit}
                  />
            </View>

                </View>
            }
            </Formik>
            

            <View style={{alignItems:"center",
                            marginTop:20}}>
                <Text style={{...styles.text1, 
                                textDecorationLine:"underline",
                                }}>Forgot Password?</Text>
            </View>

            <View style={{alignItems:"center",
                            marginTop:30}}>
                <Text style={{fontSize: 25,
                                fontWeight: 'bold'}}>OR</Text>
            </View>

            
                <View style={{marginHorizontal:10,marginTop:10}}>
                    <SocialIcon 
                    title='sign in with Facebook'
                    type='facebook'
                    
                    button
                    style={styles.socialIcon}/>
                </View>

                <View style={{marginHorizontal:10,marginTop:10}}>
                    <SocialIcon 
                    title='sign in with Google'
                    type='google'
                    button
                    style={styles.socialIcon}/>
                </View>

            <View style={{alignItems:"center",
                            marginTop:30}}>
                <Text style={{...styles.text2, 
                                }}>New on FOODie?</Text>
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
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titleTexttMargin:{
    marginLeft: 20,
    marginTop:10,
    },

    text1:{
        color:colors.grey3,
        fontSize:18,  
        fontWeight: 'bold'
    },
    text2:{
        color:'#ff8c52',
        fontSize:18,  
        fontWeight: 'bold'
    },
    textInput1:{
        borderWidth: 1,
        borderColor: '#86939e',
        marginHorizontal: 20,
        borderRadius: 12,
        marginBottom: 20,
        padding: 10,
        flexDirection:'row',
        justifyContent: "space-between",
        alignContent: 'center',
        alignItems: 'center'
    },
    textInput2:{
        borderWidth:1,
        borderRadius: 12,
        marginHorizontal: 20,
        padding: 10,
        borderColor: '#86939e',
        flexDirection:'row',
        justifyContent: "space-between",
        alignContent: 'center',
        alignItems: 'center'
    },
    headerText:{
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 15,
    },
   buttonText:{
        color:'white',
        fontWeight:'bold',
        justifyContent:'center'
        
   },
   buttonText1:{
    color:'#ff8c52',
    fontWeight:'bold',
    justifyContent:'center'
    
}

})