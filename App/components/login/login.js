import React, { Component } from 'react';
import { View, StyleSheet, Image, Text , KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard} from 'react-native';
import LoginForm from './loginForm.js';

export default class Login extends Component {
    constructor(props){
        super(props);
        var logoImg = require('../../media/login/lgo.png');
        this.state = {username:'', psw:'', logoSizeMax : true, logoImg : logoImg};
    }
    
    render() {
        var logoStyle = this.state.logoSizeMax? styles.logoImage : styles.logoImageMin;
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.mainContainer} >
                <View style={styles.logoContainer}>
                    <Image source = {this.state.logoImg} style={logoStyle}/>
                    <Text style={styles.logoText}>Help to immigrant</Text>
                </View>
                <View style={styles.loginFormContainer}>
                    <TextInput 
                        underlineColorAndroid='rgba(255,255,255,0)' 
                        placeholder='login' 
                        placeholderTextColor='rgba(255,255,255,0.8)' 
                        returnKeyType='next'
                        onFocus = {() => this.setState({logoSizeMax : false})}
                        onSubmitEditing={() => this.passwordInput.focus()}
                        autoCapitalize = 'none'
                        style={styles.input}                       
                        onChangeText={(text) => this.setState({username:text})}                   
                    />    
                    <TextInput 
                        underlineColorAndroid='rgba(255,255,255,0)' 
                        placeholder='password'     
                        placeholderTextColor='rgba(255,255,255,0.8)' 
                        onFocus = {() => this.setState({logoSizeMax : false})}
                        onBlur = {() => this.setState({logoSizeMax : true})}                        
                        onSubmitEditing={() => this.login()}
                        secureTextEntry
                        returnKeyType='go'
                        ref = {(input) => this.passwordInput = input}
                        style={styles.input}
                        onChangeText={(text) => this.setState({psw:text})} 
                    />  
                    <TouchableOpacity style={styles.button} onPress ={() => this.login()}  onFocus={Keyboard.dismiss}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </View>    
            </KeyboardAvoidingView>
            );
  }

  minimizeLogo(){
      this.setState({logoSizeMax : false});
  }

  login(){
    Keyboard.dismiss();
    alert('Your choise: username = ' + this.state.username + ' and password =' + this.state.psw);
    }
}


const styles = StyleSheet.create({
    mainContainer:{
        flex : 1,
        backgroundColor : '#74b9ff',
    },
    logoContainer:{
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoImage:{
        width:200,
        height:200
    },
    logoImageMin :{
        width: 100,
        height: 100
    },
    logoText:{
        color : '#2d3436',
    },
    loginFormContainer:{
        padding: 20
    },
    input:{
        height : 40,
        marginBottom: 20,
        backgroundColor: 'rgba(255,255,255,0.2)',
        paddingHorizontal: 10,
        color:'#2d3436'        
    },
    button:{
        alignItems: 'center',
        height : 40,
        justifyContent: 'center',
        backgroundColor:'#0984e3',
    },
    buttonText:{
        color: '#2d3436',
        textAlign : 'center',
        fontWeight: '700',
        padding: 10
    }
})