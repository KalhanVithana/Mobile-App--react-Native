import axios from 'axios';
import React, { useState } from 'react'
import { View, StatusBar, StyleSheet, Text, TextInput, Button, TouchableHighlight } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'



export default function Login(props) {

    const [name, setname] = useState();
    const [email, setemail] = useState();
    const [mobile, setmobile] = useState();
    const [password, setpassword] = useState();



    const Register = async () => {
        try {

            const formdata = {
                name, email, password, mobile
            }

            const data = await axios.post('http://localhost:4000/user/add', formdata);

            console.log(data)

            this.props.navigation.navigate('signUp')

        } catch (e) {

            console.log(e)
        }

    }


    return (
        <View style={styles.container} >

            <Text style={styles.text1} Color="#808080">Login</Text>

            <TextInput style={styles.Text} placeholder="name" onChangeText={(text) => setname(text)} placeholderTextColor="black"></TextInput>
            <TextInput style={styles.Text} placeholder="email" onChangeText={(text) => { setemail(Text) }} keyboardType="email-address" placeholderTextColor="black"></TextInput>
            <TextInput style={styles.Text} placeholder="mobile" onChangeText={(text) => {
                setmobile(text)
            }} keyboardType="number-pad" placeholderTextColor="black"></TextInput>
            <TextInput style={styles.Text} placeholder="password" onChangeText={(text) => {
                setpassword(Text)
            }} keyboardType="number-pad" placeholderTextColor="black"></TextInput>

            <TouchableHighlight style={{ top: 60, margin: 20 }}>
                <Button title="Sign up" color="#f194ff" onPress={Register}></Button>

            </TouchableHighlight>

        </View>

    )
}


const styles = StyleSheet.create({
    container: {

        flex: 1,
        padding: 24,
        backgroundColor: "#eaeaea"



    },


    text1: {

        top: 40,
        color: 'white', // <-- The magic
        textAlign: 'center', // <-- The magic
        fontWeight: 'bold',
        fontSize: 50,
        backgroundColor: 'purple',
        fontStyle: 'italic',



    },
    Text: {
        top: 50,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "blue",
        margin: 10,
        paddingLeft: 10,
        backgroundColor: "white"

    },

    button: {

        top: 60
    }

})
