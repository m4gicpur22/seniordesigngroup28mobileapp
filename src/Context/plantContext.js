import createDataContext from './createDatacontext';
import trackerApi from '../Api/tracker';

const plantreducer = (state, action) =>{
    switch(action.type){
        case 'getSensordata':
            return action.payload
        // case 'SensorError':
        //     return {errorMessage: action.payload}
        default:
            return state;
    }
};

const sensorinfo = (dispatch) => async () => {
    try {
        const res = await trackerApi.get('getSensorInfo');
        dispatch({type: 'getSensordata', payload: res.data.sensor});
        console.log(res.data.sensor);
    }
    catch(err){
        console.log("Error getting back sensor data with err: " + err);
        //dispatch({type: 'SensorError', payload: 'Error getting back sensor data'})
    }
};

export const {Provider, Context} = createDataContext(
    plantreducer,
    {sensorinfo},
    []
);