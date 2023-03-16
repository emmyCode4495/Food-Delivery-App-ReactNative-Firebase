import React, {useState} from 'react'
import {Text,View,StyleSheet, 
    TouchableOpacity,ScrollView,FlatList,
    Pressable,Image, Dimensions} from 'react-native'

import {Icon} from 'react-native-elements'
import countdown from 'react-native-countdown-component'

import HomeHeader from '../../components/homeHeader'

import FoodCard from '../../components/foodcard'

import { filterData, restaurantData } from '../../global/data'
import {colors, parameters} from '../../global/styles'
import CountDown from 'react-native-countdown-component'

const SCREEN_WIDTH = Dimensions.get('window').width

export default function HomeScreen(){
    const [delivery, setDelivery] = useState(true)
    const [indexCheck, setIndexCheck] = useState('0')
    return(
        <View style={styles.container}>
            <HomeHeader/>
    <ScrollView
    stickyHeaderIndices={[0]}
    showsVerticalScrollIndicator= {true}>
        <View style={{backgroundColor:colors.cardBackground, paddingBottom:10}}>
            <View style={{marginTop:10,flexDirection:'row',justifyContent:'space-evenly'}}>
                    <TouchableOpacity
                    onPress={()=>{
                        setDelivery(true)
                    }}>
                        <View style={{...styles.deliveryButton,backgroundColor:delivery?colors.buttons:colors.grey5}}>
                            <Text style={styles.deliveryText}>Delivery</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress={()=>{
                        setDelivery(false)
                    }}>
                        <View style={{...styles.deliveryButton,backgroundColor:delivery?colors.grey5:colors.buttons}}>
                            <Text style={styles.deliveryText}>Pick up</Text>
                        </View>
                    </TouchableOpacity>
            </View>
        </View>

        <View style={styles.filter}>

            <View style={styles.deliVeryView}>

                <View style={{flexDirection:'row', alignItems: "center", paddingLeft:10}}>
                    <Icon 
                     type='material-community'
                     name="map-marker"
                     color={colors.grey1}
                     size={26}/>
                     <Text style={{marginLeft:5}}>17 Musaha Lane</Text>
                </View>

                <View style={styles.clockView}>
                    <Icon 
                     type='material-community'
                     name="clock-time-four"
                     color={colors.grey1}
                     size={26}/>
                     <Text style={{marginLeft:5}}>NOW</Text>
                </View>

            </View>
                <View style={{marginTop:2}}>
                <Icon 
                     type='material-community'
                     name="tune"
                     color={colors.grey1}
                     size={26}/>

                </View>
        </View>
        <View style={styles.categoryView}>
            <Text style={styles.categoryText}>Categories</Text>
        </View>

        <View>
            <FlatList 
            
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data = {filterData}
            keyExtractor = {(item)=>item.id}
            extraData = {indexCheck}
            renderItem = {({item,index})=>(
                <Pressable
                onPress={()=>{
                    setIndexCheck(item.id)
                }}>
                    <View style={indexCheck == item.id?{...styles.pressableViewselected}:{...styles.pressableView}}>
                        <Image
                        style={{height:60,width:60,borderRadius:30}}
                        source = {item.image}/>
                        <View style={{alignItems:'center'}}>
                            <Text style={indexCheck === item.id ?{...styles.smallCategoryTextSelected}:{...styles.smallCategoryText}}>{item.name}</Text>
                        </View>
                    </View>
                    
                </Pressable>
            )}
            />
        </View>

        <View style={styles.categoryView}>
            <Text style={styles.categoryText}>Free delivery now</Text>
        </View>

        <View style={{flexDirection:'row',alignItems:'center'}}> 
            <Text style={styles.promoTextStyle}>Promo valid for</Text>
            <CountDown
                until={3600}
                size={14}
                digitStyle={{backgroundColor:colors.lightgreen}}
                digitTxtStyle={{color:colors.headerText}}
                timeToShow={['M','S']}
                timeLabels={{m:'Min',s:'Sec'}}
                timeLabelStyle={{fontWeight:'bold',color:colors.grey1}}
                />
        </View>

        <View>
            <FlatList
                style={{marginTop:10, marginBottom:10}}
                horizontal={true}
                data={restaurantData}
                keyExtractor = {(item,index)=>index.toString()}

                renderItem = {({item})=>(
                    <View style={{marginLeft:5}}>
                        <FoodCard
                         screenWidth={SCREEN_WIDTH * 0.8}
                         images = {item.images}
                         restaurantName = {item.restaurantName}
                         farAway={item.farAway} 
                         businessAddress={item.businessAddress}
                         averageReview = {item.averageReview}
                         numberOfReview = {item.numberOfReview} />
                    </View>
                )}
                />
        </View>

        <View style={styles.categoryView}>
            <Text style={styles.categoryText}>Promotions Available</Text>
        </View>

        <View>
            <FlatList
                style={{marginTop:10, marginBottom:10}}
                horizontal={true}
                data={restaurantData}
                keyExtractor = {(item,index)=>index.toString()}

                renderItem = {({item})=>(
                    <View style={{marginLeft:5}}>
                        <FoodCard
                         screenWidth={SCREEN_WIDTH * 0.8}
                         images = {item.images}
                         restaurantName = {item.restaurantName}
                         farAway={item.farAway} 
                         businessAddress={item.businessAddress}
                         averageReview = {item.averageReview}
                         numberOfReview = {item.numberOfReview} />
                    </View>
                )}
                />
        </View>

        <View style={styles.categoryView}>
            <Text style={styles.categoryText}>Restaurants in your Area</Text>
        </View>

        <View style={{width:SCREEN_WIDTH,paddingTop:10}}>
            {
                restaurantData.map(item=>(
                    <View key={item.id} style={{paddingBottom:20}}>
                        <FoodCard
                         screenWidth={SCREEN_WIDTH * 0.95}
                         images = {item.images}
                         restaurantName = {item.restaurantName}
                         farAway={item.farAway} 
                         businessAddress={item.businessAddress}
                         averageReview = {item.averageReview}
                         numberOfReview = {item.numberOfReview} />
                    </View>
                ))
            }
        </View>

    </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    deliveryButton:{
        paddingHorizontal:28,
        borderRadius:15,
        paddingVertical: 5
    },
    deliveryText:{
        marginLeft:3,
        fontSize:16
    },
    filter:{
        flexDirection:'row',
        alignItems:'center',
        marginHorizontal:15,
        marginVertical:10,
        justifyContent:'space-evenly'
    },
    deliVeryView:{
        flexDirection:'row',
            backgroundColor:colors.grey5,
            borderRadius:15,
            paddingVertical:3,
            marginTop:2,
            justifyContent:'space-between',
            paddingHorizontal:25
    },
    clockView:{
        flexDirection:'row', 
        alignItems: "center",
         marginLeft:20,
         backgroundColor:colors.cardBackground,
         borderRadius:20,
         paddingHorizontal:5,
         marginRight:20
    },
    categoryView:{
        paddingVertical:5,
        paddingHorizontal:25,
        backgroundColor:colors.grey5,
        borderRadius: 20,
        justifyContent:'center',
        marginHorizontal: 10,
        marginTop:15
    },
    categoryText:{
        fontSize: 26,
        fontWeight:'bold'
    },
    pressableView:{
        borderRadius:30,
        backgroundColor:colors.grey5,
        justifyContent:'center',
        padding:5,
        width: 80,
        margin: 10,
        height: 100
    },
    pressableViewselected:{
        borderRadius:30,
        backgroundColor:colors.buttons,
        justifyContent:'center',
        padding:5,
        width: 80,
        margin: 10,
        height: 100
    },
    smallCategoryText:{
        fontWeight:'bold',
        color:colors.buttons,
    },
    smallCategoryTextSelected:{
        fontWeight:'bold',
        color:colors.grey2,
    },
    promoTextStyle:{
        marginLeft:30,
        marginRight:5,
        fontSize:20,
        marginTop:10,
        fontWeight:'bold'
    }
})