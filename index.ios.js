/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import  React from  'react'

import  {AppRegistry}from  'react-native';

import  MainScreen from './MainScreen';

export  default  class  meituandemo extends  React.Component {
    render(){
        return (<MainScreen/>);
    }
}

AppRegistry.registerComponent('meituandemo', () => meituandemo);
