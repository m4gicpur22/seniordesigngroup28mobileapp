import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


const plantListScreen = () => {
    return (
        <>
            <Text>This is the Plant List Screen!</Text>
        </>
    );
}

const styles = StyleSheet.create({

});

plantListScreen.navigationOptions = () => {
    return {
      headerShown: true,
    };
};

export default plantListScreen;