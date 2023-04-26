import { StyleSheet, 
        Text,
         View,
        ImageBackground,
        TouchableOpacity,
        FlatList } from 'react-native'
import React from 'react'
import {Icon} from 'react-native-elements'
import { colors} from '../global/styles'

import { productData } from '../global/data'

import ProductCard from './productsCard'


const SearcResultCard = ({
    onPressRestaurantCard,
    restaurantName,
    deliveryAvailable,
    discountAvailable,
    discountPercent,
    numberOfReview,
    businessAddress,
    farAway,
    averageReview,
    images,
    restaurantProductData,
}) => {

  return (
    <View>
    <TouchableOpacity
        onPress={onPressRestaurantCard}
        >
    <View style = {styles.view1}>
        <View style={{height:150}}>
            <ImageBackground
            style= {{height:160}}
            source={{uri:images}}
            imageStyle = {styles.imgStyle}
                />
                <View style={styles.image}>
                    <Text style={styles.text1}>{averageReview}</Text>
                    <Text style={styles.text2}>{numberOfReview }</Text>
                </View>
        </View>
     
    <View style={styles.view3}>
            <View style = {{paddingTop:5}}>
                <Text style = {styles.text5}>{restaurantName}</Text>
            </View>
        <View style={{flexDirection:"row"}}>
            <View style={styles.view4}>
                <Icon 
                    name = "place"
                    type = "material"
                    color = {colors.cardComment}
                    size = {18}
                    iconStyle={{marginTop:3}}  
                />
                <Text style={styles.view5}>{farAway} Mins</Text>
            </View>
            <View style={{flex:9}}>
                <Text style={styles.text6}>{businessAddress}</Text>
            </View>
        </View>
      </View>
    </View>
      </TouchableOpacity> 
      <View style={{marginTop:5,paddingBottom:20}}>
      <FlatList 
            horizontal={true}
            style={{backgroundColor:colors.cardBackground}}
            data = {productData}
            keyExtractor={(item,index)=>index.toString()}
            renderItem={({item,index})=>(
                 <ProductCard 
                image = {item.image}
                productName = {item.name}
                price = {item.price}
                />
            )}
            showsHorizontalScrollIndicator= {false}
        />
        </View>
      </View>
  )
}

export default SearcResultCard

const styles = StyleSheet.create({

    view1:{
        marginHorizontal:9,
        borderTopRightRadius:5,
        borderTopLeftRadius:5
    },
    image:{
        position:"absolute",
        top: 0,
        right: 0,
        backgroundColor: 'rgba(52,52,52,0.4)',
        padding:2,
        alignItems:"center",
        justifyContent:"center",
        borderTopRightRadius:5,
        borderBottomLeftRadius:12
    },
    imgStyle:{
        borderTopLeftRadius:5,
        borderTopRightRadius: 5
    },
    text1:{
        color:"white",
        fontSize:20,
        fontWeight:'bold',
        marginTop:-3
    },
    text2:{
        color:"white",
        fontSize:13,
        marginRight:0,
        marginLeft:-5
    },
    text3:{
        fontSize:10,
        fontWeight:'bold',
        color:colors.grey2
    },
    text4:{
        fontSize:10,
        fontWeight:'bold',
        color:colors.grey2
    },
    text5:{
        fontSize:17,
        fontWeight:'bold',
        color:colors.grey1
    },
    text6:{
        fontSize:12,
        paddingTop:5,
        color:colors.grey2,
        paddingHorizontal:10
    },
    view3:{
        flexDirection:"column",
        marginHorizontal:15,
        marginBottom:10,
        marginTop:10,
        marginLeft: 0
    },
    view4:{
        flex:4,
        flexDirection:"row",
        borderRightWidth:1,  
    },
    view5:{
        fontSize:12,
        fontWeight:'bold',
        paddingTop:5,
        color:colors.grey3
    },

})