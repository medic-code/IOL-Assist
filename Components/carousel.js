import React from 'react'
import {View, Text, Dimensions} from 'react-native';

export const SLIDER_WIDTH = Dimensions.get('window').width - 200;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);

const CarouselCardItem = ({item,index}) => {
  
  return (
   
    <View key={index} style={{flex:1,
      backgroundColor:'white',
alignItems:'center',justifyContent: 'space-between',
borderRightWidth: 2,
    
      height: 80,
      padding: 10,
      margin:10 }}>
      <Text style={{fontSize: 13, fontWeight: "600", alignSelf: 'center', marginBottom: 10}} >{item[0]}</Text>
      {<Text style={{fontSize: 16, fontWeight: "600", alignSelf: 'center' }} >{item[1]}</Text>
    }
      
    </View>
  )
}

export default CarouselCardItem