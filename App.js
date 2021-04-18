import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import SplashScreen from './src/screens/SplashScreen';
import accountScreen from './src/screens/accountScreen';
import signinScreen from './src/screens/signinScreen';
import signupScreen from './src/screens/signupScreen';

//import plantCreateScreen from './src/screens/plantCreateScreen';
import plantDetailScreen from './src/screens/plantDetailScreen';
import plantListScreen from './src/screens/plantListScreen';

import CameraView from './src/screens/CameraView';

import { Provider as AuthProvider } from "./src/Context/authContext";

import { setNavigator } from './src/navigationRef';

import ResolveAuthScreen from './src/screens/ResolveAuthScreen';

import { FontAwesome } from '@expo/vector-icons';


const plantlistflow = createStackNavigator({
  plantList: plantListScreen,
  plantDetail: plantDetailScreen
});

plantlistflow.navigationOptions = {
  title: 'Plants',
  tabBarIcon: <FontAwesome name="th-list" size={20} />
};

const switchNavigator = createSwitchNavigator({
  Splash : SplashScreen, //auto load this screen first
  ResolveAuthScreen: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    Signup : signupScreen,
    Signin : signinScreen
  }),
  mainFlow: createBottomTabNavigator({
    plantListFlow: plantlistflow,
    camera: CameraView,
    Account: accountScreen
  })
},
  {
    initialRouteName: 'Splash'
  }
);

const App = createAppContainer(switchNavigator);

export default () => {
  return (
        <AuthProvider>
          <App ref = { (navigator) => {setNavigator(navigator)} }/>
        </AuthProvider>
  );
}