import React,{useState} from 'react'
import {View, StyleSheet, Text, FlatList, TouchableHighlight} from 'react-native';
import {Title1, Button,withTheme, Icon } from 'react-native-ios-kit';
import { Searchbar } from 'react-native-paper';
import { StatusBar } from "expo-status-bar";


const Home = ({ navigation }) => {

  const [results, setResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  
  async function fetchData(text) {
    const res = await fetch(`https://limitless-brushlands-87925.herokuapp.com/api/iol?iol=${text}`);
    res
            .json()
            .then((res) => {
                setResults(res);
            })
            .catch((err) => console.log(err));
    }
  const renderSeperator = () => {
    return (
      <View>
        style={{
          height:1,
          width: '100%',
          backgroundColor: '#CED0CE',
        }}
      </View>
    )
  }
  const onChangeText = (text) => {

    if (text) {
      setTimeout(() => fetchData(text),300)
    } 
    setResults([])
}
  const renderHeader = () => {
    return(
      <Searchbar
        onChangeText={onChangeText}
       
      />
    )
  }

  return (
    <View style={styles.container}>
      <Button title="IOL Page" onPress={() => navigation.navigate('IOL Page')} />
      <View style={styles.header}>
        <Title1 style={styles.title}>IOL Assist</Title1>
          <View style={{
            flex:1,
            padding:10,
            width: '98%',
            alignSelf: 'center',
            justifyContent: 'center'
          }}>
        
        <FlatList
          data={results}
         
          renderItem={({ item }) => (
            <TouchableHighlight 
             onPress={() => navigation.navigate('IOL Page',{data: item})}
             >
            <View style={{backgroundColor: 'white'}}>
            <Text  style={{ margin:10, padding:10 }}>{item.lens} </Text>
            </View>
            </TouchableHighlight>
          )}
          ItemSeperatorComponent={renderSeperator()}
          ListHeaderComponent={renderHeader()}
          />
   
        <StatusBar style="auto" />
      </View>
      <Text style={{marginLeft: 10, fontWeight: '600'}}>Search By</Text>
        <View style={styles.buttons}>
      
          <Button style={styles.button} inline rounded>Company</Button>
          <Button style={styles.button}inline rounded>Type</Button>
        </View>
        <View style={{flex:4}}>
          <Text style={{marginLeft: 10, fontWeight: '600'}}>Tools</Text>
          <View style={styles.buttons}>
            <Button style={styles.button} inline rounded>Sulcus Change</Button>
          </View>
        </View>
       
        {/* <Title1 style={styles.title}>My Favourites</Title1>
        <View style={styles.titles}>
        <Icon name={'reader'} color={'blue'} size={30}/>
        <Text style={styles.text}>SN60WF</Text>
        </View>
       <View style={styles.titles}>
        <Icon name={'reader'} color={'blue'} size={30} /><Text style={styles.text}>SN6AT</Text>
       </View>
        <View style={styles.titles}>
        <Icon name={'reader'}  color={'blue'}size={30}/><Text style={styles.text}>STAAR</Text>
        </View> */}
      
      </View>
      
    </View>
  )
}

export default withTheme(Home);

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: 16,
    backgroundColor: 'white',
    flexDirection: 'column'
   
  },
  title: {
    fontWeight: 'bold',
    paddingHorizontal: 15,
  },
  header: { flex:1, marginTop: 30},
  buttons: {
    flex:0.7,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  button: {
    height: 80,
    width: 160,
  },
  titles: {
    flexDirection: 'row',
    marginLeft:10,
    marginBottom: 10,
    justifyContent: 'flex-start'
  },
  text: {
    marginLeft: 10,
    paddingVertical: 10
  }
});