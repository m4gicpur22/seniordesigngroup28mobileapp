import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


const CameraView = () => {

    return (
        <View>
            <Text>This is the camera view branch!</Text>
        </View>
    );
}

const styles = StyleSheet.create({

});

CameraView.navigationOptions = {
    title: 'Camera',
    tabBarIcon: <FontAwesome name="camera" size={20} />
}

export default CameraView;