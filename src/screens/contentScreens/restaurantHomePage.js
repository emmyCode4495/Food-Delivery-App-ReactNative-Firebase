import { StyleSheet, Text, View, ScrollView,Dimensions } from 'react-native'
import React,{useState} from 'react'
import RestaurantHeader from '../../components/RestaurantHeader'

import { Icon } from 'react-native-elements'
import { colors,fonts } from '../../global/styles'
import {TabView, TabBar} from 'react-native-tab-view'
import { restaurantData } from '../../global/data'

const SCREEN_WIDTH = Dimensions.get('window').width
const initialLayout = SCREEN_WIDTH;

const RestaurantHomePage = ({navigation,route}) => {

  const {id, restaurant} = route.params
  const renderTabBar = props =>(
    <TabBar 
      {...props}
      indicatorStyle={{backgroundColor:colors.cardBackground}}
      tabStyle = {styles.tabStyle}
      scrollEnabled = {true}
      style = {styles.tab}
      labelStyle = {styles.tabLabel}
      contentContainerStyle = {styles.tabContainer}
    />
  )

  const [routes] = useState([
    {key:'first', title:'MENU'},
    {key:'second', title:'INFO'},
    {key:'third', title:'REVIEWS'},
    {key:'fourth', title:'GALLERY'}
  ])

  const [index, setIndex] = useState(0)

  const updateRoute1 =()=>{
    return(
      <View>
      </View>
    )
  }


  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <RestaurantHeader id={id} navigation={navigation}/>
          { restaurantData[id].discount &&
          <View style={styles.view1}>
              <Text style={styles.text1}>GET {restaurantData[id].discount}% OFF ON FOOD TOTAL</Text>
          </View>
          }
          <View style={styles.view2}>
            <View style={styles.view3}>
                <Text style={styles.text2}>{restaurantData[id].restaurantName}</Text>
                <Text style={styles.text3}>{restaurantData[id].foodType}</Text>

                <View style={styles.view4}>
                  <Icon 
                    name='star'
                    type='material'
                    color={colors.grey3}
                    size={15}
                  />
                  <Text style={styles.text4}>{restaurantData[id].averageReview}</Text>
                  <Text style={styles.text5}>({restaurantData[id].numberOfReview})</Text>
                  <Icon 
                    name='map-marker'
                    type='material-community'
                    color={colors.grey3}
                    size={15}
                  />
                  <Text style={styles.text6}>{restaurantData[id].farAway} km away</Text>
                </View>
            </View>

            <View style={styles.view5}>
                <Text style={styles.text6}>Self Pickup</Text>
                <View style={styles.view7}>
                  <Text style={styles.text7}>{restaurantData[id].collectTime}</Text>
                  <Text style={styles.text8}>min</Text>
                </View>
            </View>

            <View style={styles.view8}>
                <Text style={styles.text6}>On Delivery</Text>
                <View style={styles.view9}>
                  <Text style={styles.text9}>{restaurantData[id].deliveyTime}</Text>
                  <Text style={styles.text11}>min</Text>
                </View>
            </View>
          </View>
        </View>

        <View style={styles.view10}>
            <TabView 
              navigationState={{index,routes}}
              renderScene={updateRoute1}
              onIndexChange={setIndex}
              initialLayout={initialLayout}
              renderTabBar={renderTabBar}
              tabBarPosition='top'
            />
        </View>
      </ScrollView>
    </View>
  )
}

export default RestaurantHomePage

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:18
  },
  view1:{
    width:"100%",
    padding:3,
    alignItems:"center",
    justifyContent:"center"
  },
  text1:{
    color:"green",
    fontSize:14,
    fontWeight:"bold"
  },
  view2:{
    flexDirection: "row",
    flex:1,
    marginBottom:5,
    marginHorizontal:10,
    justifyContent:"space-between"
  },
  view3:{
    flex:8
  },
  view4:{
    flexDirection:"row",
    alignItems:"center",
    marginTop:5
  },
  text3:{
    fontSize:15,
    color:colors.grey3,
  },
  text2:{
    fontSize:18,
    color:colors.black,
  },
  text4:{
    fontFamily:fonts.android.bold,
    fontSize:13,
    color:colors.grey3,
    marginLeft:2,
  },
  text5:{
    fontFamily:fonts.android.bold,
    fontSize:13,
    color:colors.grey3,
    marginLeft:2,
    marginRight:5
  },
  text6:{
    fontWeight:"bold",
    fontSize:13,
    color:colors.black,
    marginLeft:0
},
view5:{
  flex:3,
  alignItems:"center"
},
text9:{
  fontSize:13,
  fontWeight:"bold",
  color:'white',
  marginRight:0
},
view7:{
  width:40,
  height:40,
  alignItems:"center",
  borderRadius:20,
  justifyContent:"space-around"
},
text7:{
  fontSize:16,
  color:colors.black,
  marginTop:5
},
text8:{
  fontSize: 13,
  color:colors.black,
  marginBottom:5
},
view9:{
  width:40,
  height:40,
  borderRadius:18,
  backgroundColor:colors.buttons,
  alignItems:"center",
  justifyContent:"space-around"
},
view8:{
  flex:3,
  alignItems:'center'
},
text10:{
  fontSize:16,
  fontWeight:"bold",
  color:colors.buttons,
  marginTop:5
},
text11:{
  fontSize:13,
  color:'white',
  marginBottom:5
},
view10:{
  elevation:10,
  backgroundColor:"white"
},
view11:{
  backgroundColor:colors.buttons,
  height:50,
  alignContent:"center",
  marginBottom:0
},
view12:{
  flexDirection:"row",
  justifyContent:"space-between",
  alignItems:"center",
},
text12:{
  padding:10,
  fontWeight:"bold",
  fontSize:18,
  color:colors.cardBackground
},
view13:{
  borderWidth:1,
  marginRight:10,
  borderColor:colors.cardBackground,
  borderRadius:6,
  paddingBottom:2
},
text13:{
  paddingHorizontal:3,
  fontWeight:"bold",
  fontSize:18,
  color:colors.cardBackground
},
tab:{
  paddingTop:0,
  backgroundColor:colors.buttons,
  justifyContent:"space-between",
  alignItems:"center"
},
tabContainer:{
  alignItems:"center",
  justifyContent:"center",  
},
tabLabel:{
  fontWeight:"bold",
  color:colors.cardBackground
},
tabStyle:{
  width:SCREEN_WIDTH/4,
  maxHeight:45
}
})