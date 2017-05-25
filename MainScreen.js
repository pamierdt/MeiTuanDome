/**
 * MainScreen
 * meituandemo
 * Created by peng on 2017/5/23 13:30.
 * @WebStorm
 */

import React from 'react';
import  {AppRegistry, StatusBar, View, Image} from 'react-native';
import {
    StackNavigator,
    TabNavigator,
    TabBarBottom,
} from 'react-navigation';

import HomeScreen  from './app_modules/Home/Screen/HomeScreen';
import NearbyScreen from './app_modules/Nearby/Screen/NearbyScreen';
import OrderScreen from './app_modules/Order/Screen/OrderScreen';
import MineScreen from  './app_modules/Mine/Screen/MineScreen';
import WebScreen from './app_modules/Tools/WebScreen'

export default class MainScreen extends React.Component {
    constructor() {
        super();
        StatusBar.setBarStyle('light-content')
    }

    render() {
        return (
            <Navigator>
            </Navigator>
        );
    }
}


const Tab = TabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '首页',
                tabBarIcon: ({focused, tintColor}) => (
                    <Image
                        source={focused ? require('./app_modules/Image/Tabbar/pfb_tabbar_homepage_selected@2x.png') : require('./app_modules/Image/Tabbar/pfb_tabbar_homepage@2x.png')}
                        style={{tintColor: tintColor, width: 25, height: 25}}
                    />
                )
            })
        },
        Neaby: {
            screen: NearbyScreen,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '附近',
                tabBarIcon: ({focused, tintColor}) => (
                    <Image
                        source={focused ? require('./app_modules/Image/Tabbar/pfb_tabbar_merchant_selected@2x.png') : require('./app_modules/Image/Tabbar/pfb_tabbar_merchant@2x.png')}
                        style={{tintColor: tintColor, width: 25, height: 25}}
                    />
                )
            })
        },
        Order: {
            screen: OrderScreen,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '订单',
                tabBarIcon: ({focused, tintColor}) => (
                    <Image
                        source={focused ? require('./app_modules/Image/Tabbar/pfb_tabbar_order_selected@2x.png') : require('./app_modules/Image/Tabbar/pfb_tabbar_order@2x.png')}
                        style={{tintColor: tintColor, width: 25, height: 25}}
                    />
                )
            })
        },
        Mine: {
            screen: MineScreen,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '我的',
                tabBarIcon: ({focused, tintColor}) => (
                    <Image
                        source={focused ? require('./app_modules/Image/Tabbar/pfb_tabbar_mine_selected@2x.png') : require('./app_modules/Image/Tabbar/pfb_tabbar_mine@2x.png')}
                        style={{tintColor: tintColor, width: 25, height: 25}}
                    />
                )
            })
        }
    })

const Navigator = StackNavigator(
    {
        Tab: {screen: Tab},
        Web: {screen: WebScreen}
    },
    {
        navigationOptions: {
            headerBackTitle: null,
            headerTintColor: '#ffffff',
            showIcon: true,
        }
    }
)
