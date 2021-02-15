import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, ImageBackground, TouchableOpacity} from 'react-native';

const SplashScreen = ({navigation}) => {
    const [image, setImage] = useState(image);

    useEffect( ()=> {
        setImage(require('../../Photos/greenhouse-691704_960_720.jpg')); //loading image faster, want to to load only once
    }, []);

    return (
        <ImageBackground source={image} style={styles.backgroundStyle}>
            <View style={styles.ViewStyle}>
                    <Text style={styles.TextStyle}>Welcome to the Smart GreenHouse</Text>
                    <TouchableOpacity style={styles.Buttonstyle} onPress={() => navigation.navigate('Signup')} title='Sign up'>
                            <Text style={{color: 'white'}}>Sign up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Buttonstyle} onPress={() => navigation.navigate('Signin')} title='Sign in'>
                            <Text style={{color: 'white'}}>Sign in</Text>
                    </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

SplashScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
};

const styles = StyleSheet.create({
    ViewStyle: {
        alignItems: 'center',
        position: 'absolute',
        bottom: 25
    },
    backgroundStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Buttonstyle: {
        backgroundColor: 'green',
        padding: 16,
        width: 300,
        borderRadius: 24,
        alignItems: 'center',
        margin: 10
    },
    TextStyle: {
        textAlign: 'center',
        color: 'white',
        fontSize: 25,
        margin: 50
    }
});

export default SplashScreen;