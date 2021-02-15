import React, {useState} from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import {Text, Button, Input} from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import Spacer from './Spacer';

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
    <>  
        <TouchableOpacity style={styles.homeButtonStyle}>
            <FontAwesome name="home" size={50} />
        </TouchableOpacity>
        <Spacer >
            <Text style={ {textAlign: 'center'} }  h3>{headerText}</Text>
        </Spacer>
            <Input
                label="Email"
                value={email} 
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Input
                secureTextEntry
                label="Password" 
                value={password} 
                onChangeText={setPassword}
                autoCorrect={false}
                autoCapitalize="none"
            />
        <Spacer>
            {errorMessage ? <Text style={styles.errMssg}>{errorMessage}</Text> : null }
            <Button title={submitButtonText}  onPress={() => onSubmit({email, password})}/>
        </Spacer>
    </>
    );
};

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginTop: 15
    },
    homeButtonStyle: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default AuthForm;