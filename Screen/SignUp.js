import axios from 'axios';
import React,{useState} from 'react'
import { View,StatusBar,StyleSheet, Text, TextInput, Button, TouchableHighlight, Alert } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { useDispatch } from 'react-redux';
import { signUpUser } from '../action/SignupAction';

export default function Signup(props) {

    const [name, setname] = useState();
    const [email, setemail] = useState();
    const [mobile, setmobile] = useState();
    const [password, setpassword] = useState();


    const dispatch = useDispatch();

    const Register =  () => {
    

        dispatch(signUpUser(name,email,mobile,password))
        
    props.navigation.navigate('get')

        

    }
    return (
        <View style={styles.container} >

        <Text style={styles.text1} Color="#808080">Signup</Text>

        <TextInput style={styles.Text} value={name} placeholder="name" onChangeText={(text) => setname(text)} placeholderTextColor="black"></TextInput>
        <TextInput style={styles.Text} value={email} placeholder="email" onChangeText={(text) => { setemail(text) }} keyboardType="email-address" placeholderTextColor="black"></TextInput>
        <TextInput style={styles.Text} value={mobile} placeholder="mobile" onChangeText={(text) => {
            setmobile(text)
        }} keyboardType="number-pad" placeholderTextColor="black"></TextInput>
        <TextInput style={styles.Text} value={password} placeholder="password" onChangeText={(text) => {
            setpassword(text)
        }} keyboardType="number-pad" placeholderTextColor="black"></TextInput>

        <TouchableHighlight style={{ top: 60, margin: 20 }}>
            <Button title="Sign up" color="#f194ff" onPress={Register}></Button>

        </TouchableHighlight>

    </View>


          
    )
}


const styles =  StyleSheet.create({
    container: {
   
        flex: 1,
        padding: 24,
        backgroundColor: "#eaeaea"

          

  },
    

    text1:{
        
        top:40,
        color: 'white', // <-- The magic
        textAlign: 'center', // <-- The magic
        fontWeight: 'bold',
        fontSize: 50,
        backgroundColor:'purple',
        fontStyle: 'italic',
      
        
       
    },
    Text:{
        top:50,
        borderWidth:1,
        borderRadius:10,
        borderColor:"blue",
        margin:10,
        paddingLeft:10,
        backgroundColor:"white"
        
    },  

    button:{

        top:60
    }
  
  })
