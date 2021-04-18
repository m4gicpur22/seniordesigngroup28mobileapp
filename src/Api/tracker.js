import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage'

//ngrok url link changes every 8 hours
//would be a good idea to add a script here that automates for closing, restarting, and bringing down the ulr link every 7-8 hours time-frame
const instance = axios.create({
    baseURL: 'http://3d74c708e74f.ngrok.io' //needs to be constantly replaced
});

instance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token');

        if(token){
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
)

export default instance;