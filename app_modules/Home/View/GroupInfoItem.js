/**
 * GroupInfoItem
 * meituandemo
 *
 * Created by peng on 2017/5/26 15:34.
 * @WebStorm
 */


import React from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import StarsView from './StarsView'

import Screen from '../../Tools/Screen'
import PriceText from '../../Tools/PriceText'
// component
export default class GroupInfoItem extends React.Component {

    static propTypes = {
        info: React.PropTypes.Object,
        onPress: React.PropTypes.func,
    }
    constructor() {
        super();
    }

    render() {
        let groupInfo = this.props.info
        let imageUrl = groupInfo.imageUrl.replace('w.h', '160.0')
        return (
            <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
                <Image style={styles.icon} source={{uri: imageUrl}}/>
                <View style={{paddingRight:10,paddingLeft:20,flex:1} } >
                    <Text style={styles.title}>{groupInfo.title}</Text>
                    <Text style={styles.subtitle} numberOfLines={0}>{groupInfo.subtitle}</Text>
                    <View style={{marginTop: 10 ,flexDirection:'row'}}>
                        <PriceText price={groupInfo.price} isShowRMB={true} style={styles.price} afterPrice={'起'}/>
                        <StarsView score={groupInfo.rating} isBigStar={true}/>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

}
// styles
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        padding: 10,
        borderColor: '#e8e8e8',
        borderBottomWidth: 1/Screen.scale
    },
    icon: {
        width: 80,
        height: 80,
        borderRadius: 5,
    },
    title: {
        color: '#111111',
        fontSize: 15,
        fontWeight: 'bold',
        marginRight:-12
    },
    subtitle: {
        color: '#777777',
        fontSize: 13,
        marginTop: 10,
        justifyContent: 'space-between'
    },
    price: {
        color: 'green',
        fontSize: 16
    }
})