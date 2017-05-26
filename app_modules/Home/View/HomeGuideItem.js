/**
 * HomeGuideItem
 * meituandemo
 *
 * Created by peng on 2017/5/25 15:34.
 * @WebStorm
 */


import React from 'react'

import {View, Image, StyleSheet, Text, Button, TouchableOpacity} from 'react-native';

import Screen from '../../Tools/Screen';

// component
export default class HomeGuideItem extends React.Component {
    constructor() {
        super();
    }

    render() {
        let guideInfo = this.props.info
        let title = guideInfo.title
        let color = guideInfo.typeface_color
        let subTitle = guideInfo.deputytitle
        let imageUrl = guideInfo.imageurl.replace('w.h', '120.0')
        return (
            <TouchableOpacity >
                <View style={styles.container}>
                    <View>
                        <Text style={{fontSize: 15, fontWeight: 'bold', color: color, marginBottom: 10,}}>
                            {title}
                        </Text>
                        <Text style={styles.subtitle}>
                            {subTitle}
                        </Text>
                    </View>
                    <Image style={styles.icon} source={{uri: imageUrl}}/>
                </View>
            </TouchableOpacity>
        )
    }
}
// styles
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: Screen.screenWidth / 2 - 1 / Screen.scale,
        height: Screen.screenWidth / 4,
        backgroundColor: 'white',
        borderBottomWidth: 1 / Screen.scale,
        borderRightWidth: 1 / Screen.scale,
        borderColor: '#e8e8e8'
    },
    icon: {
        width: Screen.screenWidth / 5,
        height: Screen.screenWidth / 5,
    },
    subtitle: {
        fontSize: 14,
        color: '#222222'
    }
})