import React from 'react'
import { View,Text,StatusBar,StyleSheet } from 'react-native'
import Login from './Screen/Login'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './Screen/SignUp';
import { Provider } from 'react-redux';
import store from './store';
import GetList from './Screen/GetList';
import GetProfile from './Screen/GetProfile';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    
  <Provider store={store}>
<NavigationContainer>
<Stack.Navigator>
<Stack.Screen name= "signUp" component= {Signup}/>
  <Stack.Screen name="Login" component={Login} />
  <Stack.Screen name="get"  component={GetList}/>
  <Stack.Screen name="profile"  component={GetProfile}/>
</Stack.Navigator>
</NavigationContainer>
</Provider>
  )
}



const styles =  StyleSheet.create({
  container: {
    backgroundColor:'#778899',
 
    flex:1,
    padding: 20,
    justifyContent:'center',
    alignItems:'center'
  },
  Sign:{
  
      justifyContent:'center',
      alignItems:'center',
      marginVertical:60,
      color:'#ffffff',
  }

})