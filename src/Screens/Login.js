import React, { useState } from 'react';
import{
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  LogBox
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux'; //Used to retrive value from redux store

function Login({navigation})
{
    LogBox.ignoreAllLogs();

    const[loginEmail,setLoginEmail]=useState(''); //Taking user email
    const[loginPassword,setLoginPassword]=useState(''); //Taking user Password
    const{name,email,country,dob,password}=useSelector(state=>state.userValue); //Retriving values from store
    const[isValid,setIsValid]=useState(false); //Checks if the given email and password is correct or incorrect


    //Checking user credentialas
    const checkcredentials = (loginEmail,loginPassword) =>{
      if(loginEmail===email&&loginPassword===password)
      {
        setIsValid(!isValid);
        navigation.navigate('Home')
      }
      else
      {
        alert('Incorrect Email or Password')
      }
    }
    return(
        <View style={styles.container}>
            <Text style={styles.welcomeText}>Welcome Back!</Text>
            <Text style={styles.loginText}>Login</Text>
            <TextInput
              placeholder='Email'
              placeholderTextColor='#808e9b'
              style={styles.input}
              textContentType='emailAddress'
              onChangeText={(value)=>setLoginEmail(value)}
            />
            <TextInput
              placeholder='Password'
              placeholderTextColor='#808e9b'
              style={styles.input}
              secureTextEntry={true}
              textContentType='password'
              onChangeText={(value)=>setLoginPassword(value)}
            />
            <TouchableOpacity>
            <Text style={styles.fpText}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginButton} onPress={()=>{checkcredentials(loginEmail,loginPassword)}}>
            <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
            <View style={styles.loginWithBar}>
            <TouchableOpacity style={styles.iconButton}>
                <Icon name='google' type='font-awesome' size={30} color='#808e9b' />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
                <Icon name='facebook-square' type='font-awesome' size={30} color='#808e9b'/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
                <Icon name='apple' type='font-awesome' size={30} color='#808e9b' />
            </TouchableOpacity>
            </View>
            <View style={styles.signUpTextView}>
              <Text style={styles.signUpText}>Don't have an account?</Text>
              <TouchableOpacity onPress={()=>{navigation.navigate('Signup')}}>
                <Text style={[styles.signUpText, { color: '#B53471' }]}>{' Sign Up'}</Text>
              </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor:'black'
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: '900',
    color: '#fff',
    alignSelf: 'center',
  },
  loginText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
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
  fpText: {
    alignSelf: 'flex-end',
    color: '#B33771',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
  },
  loginButton: {
    backgroundColor: '#833471',
    paddingVertical: 12,
    borderRadius: 6,
    marginTop: 20,
  },
  loginButtonText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#fafafa',
    alignSelf: 'center',
  },
  loginWithBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
  },
  iconButton: {
    backgroundColor: '#333',
    padding: 14,
    marginHorizontal: 10,
    borderRadius: 100,
  },
  signUpTextView: {
    marginTop: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signUpText: {
    color: '#808e9b',
    fontSize: 20,
    fontWeight: '500',
  },
});
export default Login;