import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SplashComponent from './SplashComponent'
import SignInComponent from './SignInComponent'
import SignUpComponent from './SignUpComponent'

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';

const StackNavigator = createStackNavigator({

  SplashScreen: {
      screen: SplashComponent,
      navigationOptions:{
        headerShown: false
      }
    },
    SignInScreen: {
      screen: SignInComponent,
      navigationOptions:{
        headerShown: false
      }
    },
    SignUpScreen: {
      screen: SignUpComponent ,
      navigationOptions:{
        headerShown: false
      }
    }
});

export default createAppContainer (StackNavigator);
