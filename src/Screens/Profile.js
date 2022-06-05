import React, { useState} from 'react';
import{
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  LogBox
} from 'react-native';
import {Dropdown } from 'react-native-material-dropdown'; //Used for Selecting Country
import DateTimePickerModal from "react-native-modal-datetime-picker"; //Used for Date of Birth
import {useSelector,useDispatch} from 'react-redux'; //useSelector is for retriving values and use Dispatch is used for sending actions
import {setName,setCountry,setDOB,setEmail, setPassword} from '../Redux/actions' //Used to Set the value


function Profile({navigation})
{
    LogBox.ignoreAllLogs();

    const{name,email,country,dob,password}=useSelector(state=>state.userValue);
    const dispatch=useDispatch();

    //Contains Country Name 
    const data=[
        {value:'INDIA'},
        {value:'AMERICA'},
        {value:'NEPAL'},
        {value:'BHUTAN'},
        {value:'CHINA'},
        {value:'JAPAN'}
    ]

    //Line 35-49 is Used to Handle Date of Birth
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        dispatch(setDOB(date.toString().substr(4,12))) //Fetching Date 
        hideDatePicker(); 
    };

    const[psd,setPsd]=useState('');
    const[confirmPsd,setConfirmPsd]=useState('');

    const validationCheck = () =>{
        if(psd===confirmPsd)
        {
            dispatch(setPassword(psd));
            alert('Updation Successfull!!');
        }
        else
        {
            alert('Please Verify Your Password');
        }
    }

    return(
        <View style={styles.mainContainer}>
            <Text style={styles.welcomeText}>Update Your Profile</Text>
            <View>
                <TextInput
                    style={styles.input}
                    placeholder='Name'
                    placeholderTextColor='#808e9b'
                    textContentType='name'
                    onChangeText={(value)=>dispatch(setName(value))}
                />
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
            <TouchableOpacity style={styles.signupButton} onPress={()=>{validationCheck()}}>
            <Text style={styles.signupButtonText}>Update</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Profile;

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