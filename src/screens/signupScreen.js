import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import { Context as authContext } from '../Context/authContext';
import AuthForm from '../Components/AuthForm';
import NavLink from '../Components/NavLink';
import { NavigationEvents } from 'react-navigation';


const signupScreen = ({navigation}) =>{
    const { state, signup, clearErrorMessage } = useContext(authContext);

    return (
        <View style={styles.container}> 
        <NavigationEvents onWillFocus={clearErrorMessage} />
            <AuthForm 
                headerText = "Sign up for App"
                errorMessage = {state.errorMessage}
                submitButtonText = "Sign up"
                onSubmit = {signup}
            /> 
            <NavLink 
                routeName="Signin"
                text="Already have an account? Sign in instead!"
            />
        </View>
    );

}

signupScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
  };

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center'
        // marginBottom: 250
    },
});

export default signupScreen;