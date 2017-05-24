import React from 'react';
import {
  StackNavigator ,
  TabNavigator ,
} from 'react-navigation';

import HomeScreen  from './app_modules/Home/Screen/HomeScreen'
import NearbyScreen from './app_modules/Nearby/Screen/NearbyScreen'
import OrderScreen from './app_modules/Order/Screen/OrderScreen'
import MineScreen from  './app_modules/Mine/Screen/MineScreen'

const MainScreenNavigator = TabNavigator ({
  Recent : { screen : RecentChatScreen},
  All : { screen : AllContactsScreen},
});
const meituandemo = StackNavigator ({
  首页 : { screen : HomeScreen},
  附近 : { screen : NearbyScreen},
  订单 : { screen : OrderScreen},
  我的 : { screen : MineScreen},
})
const appNavigator = StackNavigator()
AppRegistry.registerComponent('meituandemo', () => meituandemo);
