import React, { useState,useEffect } from 'react';
import{
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button
} from 'react-native';
import {Dropdown } from 'react-native-material-dropdown';
import { LogBox } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {CheckBox} from 'react-native-elements';
import {useSelector,useDispatch} from 'react-redux';
import {setName,setCountry,setDOB,setEmail,setPassword} from '../Redux/actions'


function Signup({navigation})
{
    LogBox.ignoreAllLogs();

    useEffect(() => {
        LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
    }, [])

    const{name,email,country,dob,password}=useSelector(state=>state.userValue);
    const dispatch=useDispatch();

    // const[country,setCountry]=useState('');
    const data=[
        {value:'INDIA'},
        {value:'AMERICA'},
        {value:'NEPAL'},
        {value:'BHUTAN'},
        {value:'CHINA'},
        {value:'JAPAN'}
    ]


    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        dispatch(setDOB(date.toString().substr(4,12)))
        hideDatePicker();
    };


    const[psd,setPsd]=useState('');
    const[confirmPsd,setConfirmPsd]=useState('');


    const[checkBoxValue,setCheckBoxValue]=useState(false);

    const validationCheck = () => {
        if(checkBoxValue===true&&(psd===confirmPsd))
        {
            dispatch(setPassword(psd));
            navigation.navigate('Login');
        }
        else if(psd!==confirmPsd)
        {
            alert("Password didn't match!!! Please verify");
        }
        else
        {
            alert('Your Age Is Less Than 18 Years');
        }
    }

    return(
        <View style={styles.mainContainer}>
            <Text style={styles.welcomeText}>Welcome to Family!!!</Text>
            <View>
                <TextInput
                    style={styles.input}
                    placeholder='Name'
                    placeholderTextColor='#808e9b'
                    textContentType='name'
                    onChangeText={(value)=>dispatch(setName(value))}
                />
            </View>
            <View >
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    placeholderTextColor='#808e9b'
                    textContentType='emailAddress'
                    onChangeText={(value)=>dispatch(setEmail(value))}
                />
            </View>
            <View style={styles.input}>
                <Dropdown
                    style={styles.dropDown}
                    label='Country'
                    data={data}
                    onChangeText={(value)=>dispatch(setCountry(value))}
                    baseColor="rgba(255, 255, 255, 1)"
                />
            </View>
            <View style={styles.inputButton}>
                <Button title="Date of Birth" onPress={showDatePicker} />
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                />
                <Text style={styles.textinput}>{dob}</Text>
            </View>
            <View>
                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    placeholderTextColor='#808e9b'
                    textContentType='password'
                    secureTextEntry={true}
                    onChangeText={(value)=>(setPsd(value))}
                />
            </View>
            <View>
                <TextInput
                    style={styles.input}
                    placeholder='Confirm Password'
                    placeholderTextColor='#808e9b'
                    textContentType='password'
                    secureTextEntry={true}
                    onChangeText={(value)=>(setConfirmPsd(value))}
                />
            </View>
            <View style={styles.checkBox}>
                <CheckBox
                title={'Above 18+'}
                checked={checkBoxValue}
                onPress={()=>{setCheckBoxValue(!checkBoxValue)}}
                />
            </View>
            <TouchableOpacity style={styles.signupButton} onPress={()=>{validationCheck()}}>
            <Text style={styles.signupButtonText}>SignUp</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Signup;

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
    textinput:{
        color:'white'
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#333',
        borderRadius: 6,
        marginTop: 10,
        paddingHorizontal: 10,
        fontSize: 16,
        color: '#808e9b',
    },
    inputButton: {
        width: '100%',
        height: 50,
        borderRadius: 6,
        marginTop: 15,
        paddingHorizontal: 10,
        fontSize: 16,
        color: '#808e9b',
    },
    dropDown:{
        color:'#808e9b'
    },
    checkBox:{
        marginTop:30
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