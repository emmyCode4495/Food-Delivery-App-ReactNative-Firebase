import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import {menuCardData, productData } from '../../global/data'
import { colors } from '../../global/styles'
import MenuCard from '../../components/MenuCard'


export function Route1(){
    return(
        <View style={{flex:1}}>
            <View style={styles.view2}>
                <FlatList 
                    style={{backgroundColor:'white'}}
                    data = {menuCardData}
                    keyExtractor={(item,index)=>index.toString()}
                    renderItem={({item,index})=>{
                        return(
                        <TouchableOpacity>
                            <MenuCard 
                                productName={item.meal}
                                image={item.image}
                                price={item.price}
                                productDetails = {item.details}
                            />
                        </TouchableOpacity>
                        )
                    }}
                    showsVerticalScrollIndicator = {false}
                />
            </View>
        </View>
    )
}

export const Route2 = ()=>(<View style = {styles.scene2}><Text>run</Text></View>)
export const Route3 = ()=>(<View style = {{...styles.scene,backgroundColor:colors.grey1}}></View>)
export const Route4 = ()=>(<View style = {styles.scene}></View>)
export const Route5 = ()=>(<View style = {styles.scene}></View>)
export const Route6 = ()=>(<View style = {styles.scene}></View>)
export const Route7 = ()=>(<View style = {styles.scene}></View>)
export const Route8 = ()=>(<View style = {styles.scene}></View>)

const styles = StyleSheet.create({
    scene:{
        flex:1
    },

    view2:{
        marginTop:5,
        paddingBottom:20
    },
    scene2:{
        flex:1,
        backgroundColor:colors.grey5
    }
})