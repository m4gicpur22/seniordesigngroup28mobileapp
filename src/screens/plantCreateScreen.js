import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


const plantCreateScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text>This is the Plant Create Screen!</Text>
        </View>
    );
}

plantCreateScreen.navigationOptions = {
    title: 'Plant Create',
    tabBarIcon: <FontAwesome name="leaf" size={20} />
}

const styles = StyleSheet.create({
    viewStyle:{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    }
});

export default plantCreateScreen;