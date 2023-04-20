import React, {useRef,useState} from 'react'

import {useNavigation} from '@react-navigation/native'

import {View, Text, StyleSheet, 
        TouchableWithoutFeedback,
        Modal, TextInput,FlatList, 
        TouchableOpacity,
         Keyboard} from 'react-native'

import * as Animatable from 'react-native-animatable'

import {colors} from '../global/styles'

import {Icon} from 'react-native-elements'
import { filterData } from '../global/data'
import filter from 'lodash/filter'

export default function SearchScreenComponent(){

    const navigation = useNavigation()
    const [data, setData] = useState([...filterData])
    const [modalVisible, setModalVisible] = useState(false)
    const [textInputFocused, setTextInputFocused] = useState(true)

    const textInput = useRef(0)
    const contains = ({name},query)=>{
        if(name.includes(query)){
            return true
        }
        return false
    }

    const handleSearch =text =>{
        const dataS = filter(filterData,user=>{
            return contains(user,text)
        })
        setData([...dataS])
    }
    return(
        <View style={{alignItems:'center'}}>
        <TouchableWithoutFeedback
            onPress={()=>{
                setModalVisible(true)
            }}
        >
            <View style={styles.searchArea}>
                <Icon 
                    type='material'
                    name='search'
                    style={styles.searchIcon}
                    iconStyle = {{marginLeft:5}}
                    size={20}
                />
                <Text style={{fontSize:20, marginLeft:25}}>Search</Text>
            </View>
        </TouchableWithoutFeedback>

        <Modal
        animationType='fade'
        transparent={false}
        visible={modalVisible}
        >
            <View style={styles.modal}>
                <View style={styles.view2}>
                    <View style={styles.textInput}>
                        <Animatable.View
                            animation={textInputFocused? "fadeInRight" : "fadeInLeft"}
                            duration = {400}
                        >
                            <Icon
                                name={textInputFocused ? "arrow-back" : "search"}
                                onPress={()=>{
                                    if(textInputFocused)
                                    setModalVisible(false)
                                    setTextInputFocused(true)
                                }}
                                style={styles.icon2}
                                type="material"
                                iconStyle={{marginRight:5}}
                            />
                        </Animatable.View>
                        <TextInput 
                            style={styles.textInputStyle}
                            placeholder = ""
                            autoFocus={false}
                            ref = {textInput}

                            onFocus={()=>{
                                setTextInputFocused(true)
                            }}
                            onBlur={()=>{
                                setTextInputFocused(false)
                            }}
                            onChangeText={handleSearch}
                        />

                        <Animatable.View
                            animation={textInputFocused? "fadeInLeft" : "fadeInRight"}
                            duration = {400}
                        >
                            <Icon name={textInputFocused ? 'cancel': null}
                                iconStyle={{color:colors.grey3}}
                                type='material'
                                style={{marginRight: -10}}
                                onPress={()=>{
                                  textInput.current.clear()  
                                  //handleSearch()
                                }}
                            />
                        </Animatable.View>
                    </View>
                </View>

                <FlatList
                    data={data}
                    renderItem={({item})=>(
                        <TouchableOpacity
                            onPress={()=>{
                                Keyboard.dismiss
                                navigation.navigate('SearchResultScreens',{item:item.name})
                                setModalVisible(false)
                                setTextInputFocused(true)
                            }}>
                                <View style={styles.view2}>
                                    <Text style={{color:colors.grey2,fontSize:15}}>{item.name}</Text>
                                </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item=>item.id}
                />
            </View>

        </Modal>

        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1
    },
    text1:{

    },
    textInput:{
        borderWidth:1,
        marginHorizontal:0,
        borderRadius:12,
        borderColor:"#86939e",
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignContent:'center',
        alignItems:'center',
        paddingLeft:10,
        paddingRight:10
    },
    searchArea:{
        marginTop:10,
        width:"94%",
        height:50,
        backgroundColor:colors.grey5,
        borderRadius:15,
        borderWidth:1,
        borderColor:colors.grey4,
        flexDirection:'row',
        alignItems:'center'
    },
    searchIcon:{
        fontSize:24,
        padding:5,
        color:colors.grey2
    },
    view1:{
        height:20,
        justifyContent:'center',
        paddingHorizontal:10
    },
    view2:{
        flexDirection:'row',
        padding:15,
        alignItems:'center'
    },
    icon2:{
        fontSize:24,
        padding:5,
        color:colors.grey2
    },
    modal:{
        flex:1
    },
    textInputStyle:{
        width:"94%",
        height:50,
        borderRadius:20
    }
})