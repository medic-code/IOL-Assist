import React from 'react'
import {View, StyleSheet, Text, Button, SafeAreaView, Dimensions,Linking, ScrollView} from 'react-native';
import {Title1, Icon } from 'react-native-ios-kit';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import CarouselCardItem, {SLIDER_WIDTH, ITEM_WIDTH} from './carousel';
import {Card } from 'react-native-paper';
import { iOSColors } from 'react-native-typography'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

    backgroundColor: 'white'

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
    color: '#1C4A7A',
    opacity: 1
  }

});

const Iol = ({route,navigation, }) => {
  const isCarousel = React.useRef(null);

  const [index, setIndex] = React.useState(0)
  const [index2, setIndex2] = React.useState(0)
  const {data}  = route.params
 
  const lenSpec = ['hapmaterial', 'opmaterial','design','range','steps','opticdia','length','haptic']
  let lensArr = Object.entries(data).filter(elem => lenSpec.includes(elem[0])).map(elem => elem[1])
  const lensName = ['Haptic Material', 'Optic Material', 'Design', 'Range','Steps','Optical Diameter','Overall Length', 'Haptic Angle']
  let object = {}
  lensName.forEach((elem,index) => {
    object[elem] = lensArr[index];
  })
  const constantsArr = ['nominal','haigis0','haigis1','haigis2','hoffer','holladay','srk2','srkt', 'barret','rnfb'];
  let constantVal = Object.entries(data).filter(elem => constantsArr.includes(elem[0])).map(elem => elem[1]);
  const constants = ['Nominal','Haigis0','Haigis1','Haigis2','Hoffer Q','Holladay 1','SRK/T','SRK II','Barret','RNFB'];
  let object2 = {}
  constants.forEach((elem,index) => {
    object2[elem] = constantVal[index];
  })

return (
  <ScrollView>
  <View style={styles.container}> 
    {/* <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      /> */}
  <View style={{flex:1, padding:10, flexDirection: 'row',flexWrap: 'wrap', backgroundColor:'rgba(99, 142, 187, 0.5)' }}>
    <Icon name={'reader'} color={'blue'} size={40}/>
    <View style={{flex:1, flexDirection: 'column', marginLeft: 30, }}>
    <Title1 style={styles.title}>{data.lens}</Title1> 
    
    </View>
   
  </View>
  <View style={{flex: 1,
    justifyContent: 'center',
    padding: 10, backgroundColor: 'rgba(99, 142, 187, 0.2)'}}>
      <Title1 style={{marginLeft: 5,marginBottom: 10,color: '#1C4A7A', fontSize: 17, fontWeight: '600'}}>Product Information</Title1>
      <Text style={{fontSize: 16, marginLeft: 10, color: 'rgb(54,69,79)'}}><Text style={{fontWeight:'bold'}}>Name:</Text> {data.lens}</Text>
      <Text style={{fontSize: 16, marginLeft: 10,color: 'rgb(54,69,79)'}}><Text style={{fontWeight:'bold'}}>Haptic Material:</Text> {data.hapmaterial}</Text>
      <Text style={{fontSize: 16, marginLeft: 10,color: 'rgb(54,69,79)'}}><Text style={{fontWeight:'bold'}}>Optic Material: </Text>{data.opmaterial}</Text>
      <Text style={{fontSize: 16, marginLeft: 10,fontWeight:'bold',color: 'rgb(54,69,79)'}}>Dimensions:</Text>
      <Text style={{fontSize: 16, marginLeft: 50,color: 'rgb(54,69,79)'}}>HAPTIC: {data.haptic} </Text>
      <Text style={{fontSize: 16,marginLeft: 50,marginBottom: 10,color: 'rgb(54,69,79)'}}>OPTIC:  {data.opticdia} </Text>

    </View>
    <View style={{flex:0.5,marginLeft:20, marginTop: 5}}>
      
      
    </View>
  <Title1 style={{marginLeft: 10,color: '#1C4A7A',marginBottom:-20,fontSize: 17, fontWeight: '600'}}>Lens Specification</Title1>
    <SafeAreaView style={{flex: 0.8, backgroundColor:'white',marginTop: 30,marginLeft: 20}}>
    
   
      <View style={{ flex: 1, flexDirection:'row'}}>

        <Carousel
          layout="default"
          layoutCardOffset={9}
          ref={isCarousel}
          data={Object.entries(object)}
          renderItem={CarouselCardItem}
          sliderWidth={SLIDER_WIDTH}
          onSnapToItem={(index) => setIndex(index)}
          itemWidth={ITEM_WIDTH}
          inactiveSlideShift={0}
          useScrollView={true}
        />
         
      </View>
      
    </SafeAreaView>
    
    <SafeAreaView style={{flex: 1.3, backgroundColor:'white'}}>
   
<Pagination
        dotsLength={lenSpec.length - 1}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: 'rgba(22,122,121,0.3)'
        }}
         onSnapToItem={(index) => setIndex(index)}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
<Title1 style={{marginTop:10,marginLeft: 10,color: '#1C4A7A',fontSize: 17, fontWeight: '600' }}>Optimized IOL Constants</Title1>
      <View style={{ flex: 0.8, flexDirection:'row', justifyContent: 'center', marginLeft: 20}}>
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
          onSnapToItem={(index) => setIndex2(index)}
        />
      </View>
    </SafeAreaView>
    <Pagination
        dotsLength={constantsArr.length - 1}
        activeDotIndex={index2}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: 'rgba(22,122,121,0.3)'
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    
    <View style={{flex: 1,
    justifyContent: 'center',
    padding: 10, backgroundColor: 'rgba(99, 142, 187, 0.2)'}}>
    
    
        <Title1 style={{marginLeft:10, color: '#1C4A7A',fontSize: 17, fontWeight: '600' }}>Additional Information</Title1>
          <Text onPress={() => Linking.openURL(`${data.link}`)}style={{fontSize: 15, marginTop: 10, marginLeft:20, marginBottom: 10,fontWeight: 'bold', color: 'rgb(54,69,79)',textDecorationLine: 'underline'}}>Lens Product Information</Text>
          <Text onPress={() => Linking.openURL(`http://ocusoft.de/ulib/c1.htm`)} style={{fontSize: 15, marginTop: 10, marginLeft:20, marginBottom: 10,fontWeight: 'bold', color: 'rgb(54,69,79)',textDecorationLine: 'underline'}}>User Group for Laser Interference Biometry</Text>
    </View>
  </View>
  </ScrollView>
)
}

export default Iol;