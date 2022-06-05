import React from 'react';
import{
    View,
    Text,
    StyleSheet,
    LogBox,
    TouchableOpacity
} from 'react-native';

function Logout({navigation}){

    LogBox.ignoreAllLogs(); //Ignoring warning on the screen

    const logoutMessage = () =>{
        alert('See U Again');
        navigation.navigate('Login')
    }
    return(
        <View style={styles.mainContainer}>
            <Text style={styles.welcomeText}>Do You Want To Logout</Text>
            <TouchableOpacity style={styles.signupButton} onPress={()=>{logoutMessage()}}>
            <Text style={styles.signupButtonText}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signupButton} onPress={()=>{navigation.navigate('Home')}}>
            <Text style={styles.signupButtonText}>No</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Logout;

const styles=StyleSheet.create({
    mainContainer:{
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 20,
        backgroundColor:'black'
    },
    welcomeText: {
        fontSize: 30,
        paddingBottom:10,
        fontWeight: '900',
        color: '#fff',
        alignSelf: 'center',
    },
    signupButton: {
        backgroundColor: '#833471',
        paddingVertical: 12,
        borderRadius: 6,
        marginTop: 20,
        width:'100%'
    },
    signupButtonText: {
        fontSize: 20,
        fontWeight: '500',
        color: '#fafafa',
        alignSelf: 'center',
    },
})