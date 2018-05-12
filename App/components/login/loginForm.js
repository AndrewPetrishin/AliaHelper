import React, { Component } from 'react';
import {  TextInput, View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class LoginForm extends Component {
    constructor(props){
        super(props);
    }

    login(login, psw){
        alert('Your choise ' + login.value + '   ' + psw.value);
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <TextInput 
                    placeholder='login' 
                    placeholderTextColor='rgba(255,255,255,0.8)' 
                    returnKeyType='next'
                    onSubmitEditing={() => this.passwordInput.focus()}
                    autoCapitalize = 'none'
                    autoCorrect={false}
                    style={styles.input}
                    ref = {(input) => this.loginInput = input}
                    />    
                <TextInput 
                    placeholder='password' 
                    placeholderTextColor='rgba(255,255,255,0.8)' 
                    secureTextEntry
                    returnKeyType='go'
                    ref = {(input) => this.passwordInput = input}
                    style={styles.input}
                    onSubmitEditing={() => this.login(this.loginInput, this.passwordInput)}/>  
                <TouchableOpacity style={styles.button} onPress ={() => this.login(this.loginInput, this.passwordInput)}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>    
        );
    }
}

const styles = StyleSheet.create({
    mainContainer:{
        padding: 20
    },
    input:{
        height : 40,
        marginBottom: 20,
        backgroundColor: 'rgba(255,255,255,0.2)',
        paddingHorizontal: 10,
        color:'#fff'
    },
    button:{
        alignItems: 'center',
        height : 40,
        justifyContent: 'center',
    },
    buttonText:{
        backgroundColor:'#0984e3',
        color: '#fff',
        textAlign : 'center',
        fontWeight: '700',
        padding: 10
    }
});