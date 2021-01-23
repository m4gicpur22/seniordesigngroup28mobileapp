import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const SplashScreen = ({navigation}) => {

    return (
        <View style={styles.backgroundStyle}>
            <Text style={{textAlign:'center'}}>Greenhouse lite</Text>
            <Button onPress={() => navigation.navigate('Signup')} title='Sign up'></Button>
            <Button onPress={() => navigation.navigate('Signin')} title='Sign in'></Button>
        </View>
    );
}

SplashScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: 'green',
        flex: 1
    }
});

export default SplashScreen;