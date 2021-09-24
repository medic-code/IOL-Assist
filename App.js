
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native'
import { ThemeProvider } from 'react-native-ios-kit';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Components/home'
import iol from './Components/iol';
import { Icon } from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50
  },
});
export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
  
          <Stack.Screen name="IOL Page" component={iol} options={{ 
          
          }} />

      </Stack.Navigator>
    </ThemeProvider>
    </NavigationContainer>
    
  );
}


