/**
 * NearbyScreen
 * meituandemo
 * Created by peng on 2017/5/23 13:30.
 * @WebStorm
 */

import React from  'react'
import {
    View,
    Text,
    Button,
} from 'react-native'
export default class NearbyScreen extends React.Component {
    static navigationOptions = ((navigation) => ({
        headerStyle:{backgroundColor:'2cc0ae'}
    }))
    render() {
        return (
            <View>
                <Text>MineScreen</Text>
            </View>

        )
    }
}