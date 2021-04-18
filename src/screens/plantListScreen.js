import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button, FlatList, Dimensions } from 'react-native';
import trackerApi from '../Api/tracker';
import { WebView } from 'react-native-webview';
import Spacer from '../Components/Spacer';

const listTab = [
    {
        status: 'Temperature'
    },
    {
        status: 'Humidity'
    },
    {
        status: 'Light'
    }
]

const TemperatureChart = () => {
    return (
        <WebView 
            style={{ height: 375, width: 390, backgroundColor: '#21313C', borderRadius: 2}}
            source={ {uri: 'https://charts.mongodb.com/charts-project-0-ckrfc/embed/charts?id=c7244776-4325-44b5-9d52-e5dc0221424f&autoRefresh=300&theme=dark'} }>
        </WebView>
    )
};

const HumidityChart = () => {
    return ( 
        <WebView 
            style={{ height: 640, width: 390, backgroundColor: '#21313C', borderRadius: 2}}
            source={ {uri: 'https://charts.mongodb.com/charts-project-0-ckrfc/embed/charts?id=aad43bef-24bd-477c-86fe-bc45d9be99bd&autoRefresh=300&theme=dark'} }>
        </WebView>
    )
};

const LightChart = () => {
    return (
        <WebView 
            style={{ height: 640, width: 390, backgroundColor: '#21313C', borderRadius: 2}}
            source={ {uri: 'https://charts.mongodb.com/charts-project-0-ckrfc/embed/charts?id=7c6ceb95-ef51-44d5-a8a6-65e05e6d9582&autoRefresh=300&theme=dark'} }>
        </WebView>
    )
};

const plantListScreen = () => {
    const [sensorData, setSensorData] = useState([]);

    useEffect( () => {
        const IntervalID = setInterval( async() => {
            try {
                const res = await trackerApi.get('getSensorInfo');
                setSensorData(res.data.sensor[0]);
                console.log(res.data.sensor[0]);
            }
            catch(err){
                console.log("Error getting back data from sensors");
            }
        }, 5000) //change every 5 seconds

        return () => {
            clearInterval(IntervalID);
        }

    }, [sensorData]);

    const [chartType, setChartType] = useState(TemperatureChart);

    const [status, setStatus] = useState('Temperature');
    const setStatusFilter = (status) => {
        if(status === 'Temperature'){
            setChartType(TemperatureChart);
        }
        else if(status === 'Humidity'){
            setChartType(HumidityChart);
        }
        else if(status === 'Light'){
            setChartType(LightChart);
        }
        setStatus(status);
    }

    return (
        <View style={styles.plantContainer}>
             <View style={styles.listStyle}>
                <Text>Temperature: {sensorData.Celsius + " C | " + sensorData.Fahrenheit + " F"}</Text>
                <Text>Humidity: {sensorData.humidityLevel + "%"}</Text>
                <Text>Light Level: {sensorData.lightLevel + " lux"}</Text>
                <Text>CPU Temperature: {sensorData.CPUTemperature + " C"}</Text>
                <Text>Last Updated: {sensorData.DateTimeString}</Text>
                <Spacer></Spacer>
                <Text>{sensorData.CoolingSystemState === 1 ? "Cooling System ON" : "Cooling System OFF"}</Text>
                <Text>{sensorData.IrrigationMSP === 1 ?  "Irrigation System ON" : "Irrigation System OFF"}</Text>
            </View>
            <View style={styles.listTab}>
                {listTab.map( (e) => (
                    <TouchableOpacity
                        style={[styles.btnTab, status === e.status && styles.btnTabActive]}
                        onPress={ ()=> {
                            setStatusFilter(e.status);
                        }}
                    >
                        <Text styles={styles.textStyle, status === e.status && styles.textTabActive}>{e.status} </Text>
                    </TouchableOpacity>
                ))
                }
            </View>
            <View style={styles.chartStyle}>
                {
                    chartType
                }
            </View>
        </View> 
    );
}

const styles = StyleSheet.create({
    plantContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#32a852',
        color: '#ffffff'
    },
    listStyle:{
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 13
    },
    listTab : {
        flexDirection: 'row',
        alignSelf: 'center',
        marginBottom: 20,
        padding: 10
    },
    btnTab : {
        flexDirection: 'row',
        borderWidth: 0.5,
        borderColor: '#EBEBEB',
        padding: 10,
        justifyContent: 'center'
    },
    btnTabActive : {
        backgroundColor: '#E6838D'
    },
    textTabActive: {
        color: '#fff'
    },
    chartStyle: {
        height: 375,
        width: 390
    }
});

plantListScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
};

export default plantListScreen;