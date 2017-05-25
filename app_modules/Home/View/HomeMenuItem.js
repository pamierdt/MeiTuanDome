/**
 * HomeMenuItem
 * meituandemo
 * Created by peng on 2017/5/23 13:30.
 * @WebStorm
 */
import  React from 'react'

import {View,TouchableOpacity,Text,Image,StyleSheet} from  'react-native'
import Screen from '../../Tools/Screen'
export default class HomeMenuItem extends React.Component {
    constructor () {
        super();
    }
    render() {
       return (
          <TouchableOpacity style={styles.container}
              onPress={this.props.onPress}>
              <Image source={this.props.icon} resizeMode='contain' style={styles.icon}/>
              <Text>{this.props.title}</Text>
          </TouchableOpacity>
       )
    }
}
const  styles = StyleSheet.create({
    container:{
        justifyContent : 'center',
        alignItems : 'center',
        width : Screen.screenWidth/5,
        height : Screen.screenWidth/5,
    },
    icon :{
        width: Screen.screenWidth/9,
        height: Screen.screenWidth/9,
        margin : 5,
    }
});