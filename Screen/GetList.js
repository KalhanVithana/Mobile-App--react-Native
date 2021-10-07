import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, ScrollView,Image,TouchableOpacity,Icon } from 'react-native'

export default function GetList(props) {
    const [user, getuser] = useState([]);



    useEffect(async () => {

        await axios.get('http://10.0.2.2:4000/user/get').then(res => {

            console.log("data is" + JSON.stringify(res.data))
            getuser(res.data)
        })

    }, [])


    

    return (
        <View style={styles.container}>



            <ScrollView>
                <FlatList
                    data={user}
                    renderItem={({ item }) => (
                        <View style={styles.items}>
                         
                                <Text style={{ fontSize: 20 }}>{item.name}</Text>
                                <Text>{item.email}</Text>

                           

                            <Text>Delete</Text>
                        
                        </View>
                    )} />


            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({

    container: {

        flex: 1,
        backgroundColor: "#fff",
        justifyContent: 'flex-start',
        alignItems: 'center'


    },

    items: {

        padding: 20,
        margin: 30,
        backgroundColor: 'pink',
        marginHorizontal: 30,
        fontSize: 30,
        paddingHorizontal: 100





    }
})