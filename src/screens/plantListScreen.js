import React, {useContext, useState, useEffect} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button, FlatList } from 'react-native';
import {Context} from '../Context/plantContext';
import trackerApi from '../Api/tracker';

const plantListScreen = () => {
    const [sensorData, setSensorData] = useState({});
    //const { sensorinfo } = useContext(Context);

    useEffect( () => {
        const IntervalID = setInterval( async() => {
            try {
                const res = await trackerApi.get('getSensorInfo');
                setSensorData(res.data.sensor);
                console.log(sensorData);
            }
            catch(err){
                console.log("Error getting back data from sensors");
            }
        }, 5000) //change every 5 seconds

        return () => {
            clearInterval(IntervalID);
        }

    }, [sensorData]);

    return (
        <View style={styles.plantContainer}>
            <Text> Sensor Data displayed below</Text>
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
        justifyContent: 'center',
        alignItems:'center'
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