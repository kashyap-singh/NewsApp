import React, { useState } from 'react';
import {
    FlatList,
    StyleSheet,
    View,
    Text,
} from 'react-native';
import {LogBox} from 'react-native';

function Favourites()
{
    LogBox.ignoreAllLogs(); //Used to ignore all the warnings on the device screen

    //Storing Flatlist elements 
    const [items,setItems]=useState([
        {name:'CRICKET'},
        {name:'SOCCER'},
        {name:'TENNIS'},
        {name:'BASEBALL'},
        {name:'GOLF'},
        {name:'RUNNING'},
        {name:'VOLLEYBALL'},
        {name:'BADMINTON'},
        {name:'TABLE TENNIS'},
        {name:'FOOTBALL'}
    ])

    return(
        <View style={styles.container}>
            <Text style={styles.textInput}>Favourite Section ❤️</Text>
            <FlatList
                keyExtractor={(item,index)=>index.toString()} //it automatically creates the key value using indexing
                data={items} //Assigning items value to data
                
                //It acts like a map 
                renderItem={({item})=>(
                    <View>
                        <Text style={styles.item}>{item.name}</Text>
                    </View>
                )}
            />
        </View>
    )
}

export default Favourites;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 40,
      paddingHorizontal: 20,
      backgroundColor: 'black',
    },
    item: {
      flex: 1,
      marginHorizontal: 10,
      marginTop: 24,
      padding: 30,
      backgroundColor: '#3895D3',
      fontSize: 24,
    },
    textInput:{
        color:'white',
        fontSize:20,
    }
});