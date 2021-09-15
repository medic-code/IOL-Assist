import React from 'react'
import {View, Text, Dimensions} from 'react-native';

export const SLIDER_WIDTH = Dimensions.get('window').width - 100;

export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 1.2);
export const ITEM_HEIGHT = 400;

const CarouselCardItem = ({item,index}) => {
  
  return (
   
    <View key={index} style={{flex:1,
      backgroundColor:'white',
      alignItems:'center',justifyContent: 'space-between',
      backgroundColor:'rgba(22,122,121,0.3)', 
      borderRadius: '5',
      height: 80,
      padding: 10,
      margin:10 }}>
      <Text style={{fontSize: 13, fontWeight: "600", alignSelf: 'center', marginBottom: 1, color: 'rgb(54,69,79)'}} >{item[0]}</Text>
      <Text style={{fontSize: 16, fontWeight: "600", alignSelf: 'center', color: 'rgb(54,69,79)' }} >{item[1]}</Text>
      
    </View>
  )
}

export default CarouselCardItem