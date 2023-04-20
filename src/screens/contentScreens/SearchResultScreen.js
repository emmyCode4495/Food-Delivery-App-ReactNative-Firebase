import React from 'react'
import { StyleSheet,
        Text, 
        View,
        Dimensions,
        FlatList } from 'react-native'
import SearcResultCard from '../../components/SearcResultCard'
import { restaurantData } from '../../global/data';
import { colors } from '../../global/styles';

import { productData } from '../../global/data';
import ProductCard from '../../components/productsCard';

const SCREEN_WIDTH = Dimensions.get('window').width;

const SearchResultScreens = ({navigation,route}) => {
    return (
        <View style={styles.container}>

            
        <View>
            <FlatList 
                 style={{backgroundColor:"white"}}
                 data = {restaurantData}
                 keyExtractor={(item,index)=>index.toString()}
                 renderItem={({item,index})=>(

                    <SearcResultCard 
                    screenWidth = {SCREEN_WIDTH}
                    images={item.images}
                    averageReview={item.averageReview}
                    numberOfReview={item.numberOfReview}
                    restaurantName={item.restaurantName}
                    farAway={item.farAway}
                    businessAddress={item.businessAddress}
                    restaurantProductData={item.ProductCard}
                />
                 )}

                 ListHeaderComponent={
                    <View>
                        <Text style={styles.listHeader}>{restaurantData.length} result for {route.params.item}</Text>
                    </View>
                 }
                 showsVerticalScrollIndicator = {false}
                 />  
        </View>
            
        </View>
    )
}

export default SearchResultScreens

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop:20
    },
    listHeader:{
        color:colors.grey1,
        fontSize:22,
        paddingHorizontal:10,
        paddingVertical:10,
        fontWeight:"bold"
        
    }
})
