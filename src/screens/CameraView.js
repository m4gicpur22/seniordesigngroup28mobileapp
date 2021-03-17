import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


const CameraView = () => {

    return (
        <View style={styles.viewStyle}>
            <Text>This is the camera view branch!</Text>
        </View>
    );
}

CameraView.navigationOptions = {
    title: 'Camera',
    tabBarIcon: <FontAwesome name="camera" size={20} />
}

const styles = StyleSheet.create({
    viewStyle:{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
});

export default CameraView;