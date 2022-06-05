import React, { useState } from 'react';
import {
    FlatList,
    StyleSheet,
    View,
    Text,
    LogBox
} from 'react-native';

function Feed()
{
    LogBox.ignoreAllLogs(); //Used to ignore all the warnings on the device screen

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
            <Text style={styles.textInput}>Feed Section 📰</Text>
            <FlatList
                keyExtractor={(item,index)=>index.toString()}
                data={items}
                renderItem={({item})=>(
                    <View>
                        <Text style={styles.item}>{item.name}</Text>
                    </View>
                )}
            />
        </View>
    )
}

export default Feed;

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
      backgroundColor: '#81D8D0',
      fontSize: 24,
    },
    textInput:{
        color:'white',
        fontSize:20,
    }
});