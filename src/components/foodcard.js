import React, {useState} from 'react'
import {Text,View,StyleSheet, 
    TouchableOpacity,ScrollView,FlatList,
    Pressable,Image} from 'react-native'
import {Icon} from 'react-native-elements'

import HomeHeader from './homeHeader'
import {colors, parameters} from '../global/styles'


export default function FoodCard({
    onPressFoodCard,
    restaurantName,
    deliveryAvailable,
    discountAvailable,
    discountPercent,
    numberOfReview,
    businessAddress,
    farAway,
    averageReview,
    images,
    screenWidth
}){
    return(
        <TouchableOpacity>
            <View style={{...styles.cardView,width:screenWidth}}>
                <Image
                    style={{...styles.image,width:screenWidth}}
                    source = {{uri:images}}
                    />
                    
            <View>
                <View>
                    <Text style={styles.restaurantNameStyle}>{restaurantName} </Text>
                </View>

                <View styles={{flex:1,flexDirection:'row'}}>

                    <View style={styles.distanceStyle}>
                        <Icon 
                        name='place'
                        type='material'
                        color={colors.grey2}
                        size={20}
                        iconStyle={{
                            marginTop:3
                        }}
                            />
                            <Text style={styles.farAwayStyle}>
                                {farAway} Min
                            </Text>

                            <View style={{flex:9}}>
                        <Text style={styles.addressStyle}>
                            {businessAddress}
                        </Text>
                    </View>

                    </View>

                    
                </View>
            </View>
            </View>


            <View style={styles.reviewStyle}>
                <Text style={styles.reviewTextStyle}>{averageReview}</Text>
                <Text style={styles.numberOfReviewStyle}>{numberOfReview} reviews</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardView:{
      marginHorizontal:9,
      borderTopRightRadius:5,
      borderWidth:1,
      borderColor:colors.grey4,
      borderBottomLeftRadius:5,
      borderBottomRightRadius:5  
    },
    image:{
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        height:150
    },
    restaurantNameStyle:{
        fontSize:17,
        fontWeight:'bold',
        color:colors.grey1,
        marginTop:5,
        marginLeft:10
    },
    distanceStyle:{
        flex:4,
        flexDirection:'row',
        borderRightColor:colors.grey4,
        paddingHorizontal:5,
        borderRightWidth: 1
    },
    farAwayStyle:{
        fontSize: 12,
        fontWeight:'bold',
        paddingTop:5,
        color:colors.grey2
    },
    addressStyle:{
        fontSize:13,
        paddingTop:5,
        color:colors.grey2,
        paddingHorizontal:10
    },
    reviewStyle:{
       position:'absolute',
       top:0,
       right:10,
       backgroundColor:'transparent',
       padding: 2,
       alignItems:'center',
       borderTopRightRadius:5,
       borderBottomLeftRadius:12
    },
    reviewTextStyle:{
        color:'white',
        fontSize:25,
        fontWeight:'bold',
        marginTop:3
    },
    numberOfReviewStyle:{
        color:'white',
        fontSize:15,
        fontWeight: 'bold',
        marginRight:0,
        marginLeft:0
    }
})