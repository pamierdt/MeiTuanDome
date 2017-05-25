/**
 * SpaceView
 * meituandemo
 *
 * Created by peng on 2017/5/24 14:23.
 * @WebStorm
 */

import React from 'react';

import  {View, StyleSheet,} from 'react-native';

export default class SpaceView extends React.Component {
    render() {
        return (
            <View style={styles.lineStyle}>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    lineStyle: {
        height: 14,
        backgroundColor: '#e8e8e8'
    },
})