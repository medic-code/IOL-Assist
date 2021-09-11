import React from 'react'
import {View, StyleSheet, Text, Button, SafeAreaView, Dimensions,Linking} from 'react-native';
import {Title1, Icon } from 'react-native-ios-kit';
import Carousel from 'react-native-snap-carousel';
import CarouselCardItem, {SLIDER_WIDTH, ITEM_WIDTH} from './carousel';
import {Card } from 'react-native-paper';
import { iOSColors } from 'react-native-typography'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'white',

  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20
  },
  title: {
    fontWeight: 'bold',
    flex: 1,
    flexWrap: 'wrap',
  }

});

const Iol = ({route,navigation, }) => {
  const isCarousel = React.useRef(null);
  const {data}  = route.params
 
  const lenSpec = ['hapmaterial', 'opmaterial','design','range','steps','opticdia','length','haptic']
  let lensArr = Object.entries(data).filter(elem => lenSpec.includes(elem[0])).map(elem => elem[1])
  const lensName = ['Haptic Material', 'Optic Material', 'Design', 'Range','Steps','Optical Diameter','Overall Length', 'Haptic Angle']
  let object = {}
  lensName.forEach((elem,index) => {
    object[elem] = lensArr[index];
  })
  const constantsArr = ['nominal','haigis0','haigis1','haigis2','hoffer','holl1','srk2','srkt'];
  let constantVal = Object.entries(data).filter(elem => constantsArr.includes(elem[0])).map(elem => elem[1]);
  const constants = ['Nominal','Haigis0','Haigis1','Haigis2','Hoffer Q','Holl.1','SRK/T','SRK II'];
  let object2 = {}
  constants.forEach((elem,index) => {
    object2[elem] = constantVal[index];
  })

return (
  <View style={styles.container}> 
    <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
  <View style={{flex:0.7, flexDirection: 'row',flexWrap: 'wrap' }}>
    <Icon name={'reader'} color={'blue'} size={60}/>
    <View style={{flex:1, flexDirection: 'column', marginLeft: 30, }}>
    <Title1 style={styles.title}>{data.lens}</Title1> 
    
    </View>
   
  </View>
  <Title1 style={{marginLeft: 10,color: iOSColors.gray,marginBottom:-20}}>Lens Specification</Title1>
    <SafeAreaView style={{flex: 0.8, backgroundColor:'white',marginTop: 30,marginLeft: 10}}>
    
    <View style={{
      backgroundColor: '#A2A2A2',
      height: 1,
      width: Dimensions.width
    }}></View>
      <View style={{ flex: 1, flexDirection:'row'}}>

        <Carousel
          layout="default"
          layoutCardOffset={3}
          ref={isCarousel}
          data={Object.entries(object)}
          renderItem={CarouselCardItem}
          sliderWidth={SLIDER_WIDTH}
       
          itemWidth={ITEM_WIDTH}
          inactiveSlideShift={0}
          useScrollView={true}
        />
      </View>
    </SafeAreaView>
    <SafeAreaView style={{flex: 1.3, backgroundColor:'white'}}>
    <View style={{
      backgroundColor: '#A2A2A2',
      height: 1,
      width: Dimensions.width,
      
    }}></View>

<Title1 style={{marginTop:10,marginLeft: 10,color: iOSColors.gray }}>Optimized IOL Constants</Title1>
      <View style={{ flex: 0.8, flexDirection:'row', justifyContent: 'center', marginLeft: 10}}>
        <Carousel
          layout="default"
          layoutCardOffset={7}
          ref={isCarousel}
          data={Object.entries(object2)}
          renderItem={CarouselCardItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          inactiveSlideShift={0}
          useScrollView={true}
        />
      </View>
    </SafeAreaView>
    <View style={styles.container}>
      <Card>
      <Title1 style={{marginLeft: 5,marginBottom: 10,color: iOSColors.gray }}>Product Information</Title1>
      <Text style={{fontSize: 16, marginLeft: 10}}>Name: {data.lens}</Text>
      <Text style={{fontSize: 16, marginLeft: 10}}>Haptic Material: {data.hapmaterial}</Text>
      <Text style={{fontSize: 16, marginLeft: 10}}>Optic Material: {data.opmaterial}</Text>
      <Text style={{fontSize: 16, marginLeft: 10}}>Dimensions:</Text>
      <Text style={{fontSize: 16, marginLeft: 50}}>HAPTIC {data.haptic} </Text>
      <Text style={{fontSize: 16,marginLeft: 50,marginBottom: 10}}>OPTIC: {data.opticdia} </Text>
      </Card>
    </View>
    <View style={{flex:0.5,marginLeft: 20, marginTop: -45}}>
      
      
    </View>
    <SafeAreaView style={{flex: 0.8, backgroundColor:'white'}}>
    
        <Card>
        <Title1 style={{marginLeft:10, color: iOSColors.gray }}>Additional Information</Title1>
          <Text onPress={() => Linking.openURL(`${data.link}`)}style={{fontSize: 17, marginTop: 10, marginLeft:20, marginBottom: 10,fontWeight: 'bold'}}>Lens Product Information</Text>
        </Card>
    </SafeAreaView>
  </View>
)
}

export default Iol;