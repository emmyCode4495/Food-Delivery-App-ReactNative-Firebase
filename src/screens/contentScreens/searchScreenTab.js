import React from 'react'

import {View, 
        Text, 
        StyleSheet, 
        FlatList, 
        TouchableWithoutFeedback, 
        ImageBackground,
         Dimensions} from 'react-native'

import SearchScreenComponent from '../../components/searchComponent'
import { filterData } from '../../global/data'
import { colors } from '../../global/styles'


const SCREENWIDTH = Dimensions.get('window').width;

export default function SearchScreen(){
    return(
        <View style={{flex:1,marginBottom:20}}>
        <SearchScreenComponent/>
        
        <View style={{marginTop:10}}>
        <View>
            <FlatList 
                data = {filterData}
                keyExtractor = {item=>item.id}
                renderItem = {({item})=>(
                   <TouchableWithoutFeedback>
                        <View style={styles.imageView}>
                            <ImageBackground
                                style={styles.imageStyle}
                                source={item.image}
                            >
                                <View style={styles.textView}>
                                    <Text style={{color:colors.cardBackground}}>
                                         {item.name}
                                    </Text>
                                </View>
                                
                            </ImageBackground>
                        </View>
                   </TouchableWithoutFeedback> 
                )}
                horizontal= {false}
                showsVerticalScrollIndicator={false}
                numColumns = {2}
                ListHeaderComponent = {<Text style={styles.ListHeader}>Top Categories</Text>}
                ListFooterComponent = {<Footer />}
            />
        </View>

        </View>

    </View>
    )
}

const Footer =()=>{
 return(
    <View style={{marginTop:10}}>
        <View style ={{marginBottom:20}}>
            <FlatList 
                data = {filterData}
                keyExtractor = {item=>item.id}
                renderItem = {({item})=>(
                   <TouchableWithoutFeedback>
                        <View style={styles.imageView}>
                            <ImageBackground
                                style={styles.imageStyle}
                                source={item.image}
                            >
                                <View style={styles.textView}>
                                    <Text style={{color:colors.cardBackground}}>
                                         {item.name}
                                    </Text>
                                </View>
                                
                            </ImageBackground>
                        </View>
                   </TouchableWithoutFeedback> 
                )}
                horizontal= {false}
                showsVerticalScrollIndicator={false}
                numColumns = {2}
                ListHeaderComponent = {<Text style={styles.ListHeader}>More Categories</Text>}
               
            />
        </View>

        </View>
 )
}

const styles = StyleSheet.create({
    imageView:{
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        width:SCREENWIDTH*0.4475,
        height: SCREENWIDTH*0.4475,
        marginLeft: SCREENWIDTH*0.035,
        marginBottom: SCREENWIDTH*0.035,
    },
    imageStyle:{
        width:SCREENWIDTH*0.4475,
        height: SCREENWIDTH*0.4475,
        borderRadius:15
    },
    ListHeader:{
        fontSize:16,
        color: colors.grey2,
        paddingBottom: 30,
        marginLeft: 12
    },
    textView:{
        width:SCREENWIDTH*0.4475,
        height: SCREENWIDTH*0.4475,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgba(52,52,52,0.3)'
    }
})