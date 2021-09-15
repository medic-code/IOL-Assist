import React,{useState} from 'react'
import {View, StyleSheet, Text, FlatList} from 'react-native';
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
          padding:25,
          width: '98%',
          alignSelf: 'center',
          justifyContent: 'center'
        }}>
       
        <FlatList
          data={results}
         
          renderItem={({ item }) => (
            <Text onPress={() => navigation.navigate('IOL Page',{data: item})} style={{ padding: 10 }}>{item.lens} </Text>
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
        <Text style={{marginLeft: 10, fontWeight: '600'}}>Tools</Text>
        <View style={styles.buttons}>
          <Button style={styles.button} inline rounded>Sulcus Change</Button>
        </View>
        <Title1 style={styles.title}>My Favourites</Title1>
        <View style={styles.titles}>
        <Icon name={'reader'} color={'blue'} size={30}/>
        <Text style={styles.text}>SN60WF</Text>
        </View>
       <View style={styles.titles}>
        <Icon name={'reader'} color={'blue'} size={30} /><Text style={styles.text}>SN6AT</Text>
       </View>
        <View style={styles.titles}>
        <Icon name={'reader'}  color={'blue'}size={30}/><Text style={styles.text}>STAAR</Text>
        </View>
      
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
   
  },container2: {
    marginTop: 20,
    flex: 0.4,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
},
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  title: {
    fontWeight: 'bold',
    paddingHorizontal: 15,
  },
  searchBar: {
    height: 40,
    width: 300,
    marginLeft:10,
    borderWidth:0.5,
    borderColor: 'rgb(142,142,147)',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1, 
  },
  header: { flex:1},
  buttons: {
   
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  
 searchButton: {
    backgroundColor: `rgb(255,149,0)`,
        paddingVertical: 10,
    paddingHorizontal: 10,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1, 
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