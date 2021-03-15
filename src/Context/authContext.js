import createDataContext from './createDatacontext';
import trackerApi from '../Api/tracker';
import AsyncStorage from '@react-native-community/async-storage'

import { navigate } from '../navigationRef';


const authReducer = (state, action) => {
    switch(action.type){
        case 'add_error':
            return {...state, errorMessage: action.payload};
        case 'sign_in':
            return { errorMessage: '', token: action.payload };
        case 'clear_error_message':
            return { ...state, errorMessage: ''};
        case 'sign_out':
            return { token: null, errorMessage: ''};
        default:
            return state;
    }
};

const signup = (dispatch) => async ({ email, password }) => {
    try {
        const res = await trackerApi.post('/signup', { email, password });
        await AsyncStorage.setItem('token', res.data.token);
        dispatch({ type: 'sign_in', payload: res.data.token});

        navigate('plantList');

        console.log(response.data);
    } catch (err) {
        dispatch({ type: 'add_error', payload: 'Error with signup'})
    }
};

const signin = (dispatch) => async ({email, password}) => {
    try {
        const res = await trackerApi.post('/signin', { email, password });
        await AsyncStorage.setItem('token', res.data.token);
        dispatch({type: 'sign_in', payload: res.data.token});

        navigate('plantList');

    }
    catch(err){
        dispatch({ type: 'add_error', payload: 'Error with signin'})
    }
};

const tryLocalSignin = (dispatch) => async () => {
    const token = await AsyncStorage.getItem('token');
    if(token){
        dispatch({ type: 'sign_in', payload: token});
        navigate('plantList');
    }
    else {
        navigate('Signup');
    }
}

const signout = (dispatch) => async () => {
    await AsyncStorage.removeItem('token');
    dispatch({ type: 'sign_out'});
    navigate('loginFlow');
};

const clearErrorMessage = (dispatch) => () => {
    dispatch({ type: 'clear_error_message'});
};

export const { Provider, Context } = createDataContext(
    authReducer,
    {signup, signin, signup, clearErrorMessage, tryLocalSignin, signout},
    { token: null, errorMessage: ''}
);