import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../Components/AuthForm';
import NavLink from '../Components/NavLink';
import {Context} from '../Context/authContext';

const signinScreen = () =>{
    const { state, signin, clearErrorMessage} = useContext(Context);

    return (
        <View style={styles.container}>
            <NavigationEvents onWillFocus={clearErrorMessage} />
            <AuthForm 
                headerText="Sign in to your Account"
                errorMessage={state.errorMessage}
                onSubmit={signin}
                submitButtonText="Sign in"
            />
            <NavLink 
                text="Don't have an account? Sign up instead"
                routeName="Signup"
            />
        </View>
    );

}

signinScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
});

export default signinScreen;