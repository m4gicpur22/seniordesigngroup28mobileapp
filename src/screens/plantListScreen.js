import React, {useContext, useState} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button, FlatList } from 'react-native';
import {Context} from '../Context/plantContext';
import trackerApi from '../Api/tracker';

const plantListScreen = () => {
    const [sensorData, setSensorData] = useState({});
    //const { sensorinfo } = useContext(Context);

    return (
        <View style={styles.plantContainer}>
            <Text style={styles.listStyle}> Sensor Data displayed below</Text>
            <Button onPress={async() => {
                const res = await trackerApi.get('getSensorInfo');
                setSensorData(res.data.sensor);
                console.log(sensorData);
            }}
                title="getSensorInfo"
            >
            </Button>
            <View style={styles.listStyle}>
                <Text>Humidity: {sensorData.humidityLevel}</Text>
                <Text>Lux: {sensorData.lightLevel}</Text>
                <Text>Soilmoisture: {sensorData.soilmoistureLevel}</Text>
                <Text>Temperature: {sensorData.temperatureLevel}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    plantContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    listStyle:{
        alignItems: 'center',
        justifyContent: 'center'
    },
});

plantListScreen.navigationOptions = () => {
    return {
      headerShown: true,
    };
};

export default plantListScreen;