/**
 * PriceText
 * meituandemo
 *
 * Created by peng on 2017/5/26 18:40.
 * @WebStorm
 */


import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

// component
export default class PriceText extends React.Component {

    static propTypes = {
        priceStyle: React.PropTypes.style,
        isShowRMB: React.PropTypes.bool,
        rmbStyle: React.PropTypes.style,
        price: React.PropTypes.string
    }
    static defaultProps = {
        priceStyle: {
            color: '#3dbfae',
            fontSize: 16,
        },
        rmbStyle: {
            color: '#3dbfae',
            fontSize: 12,
            marginBottom: 1,
        },
        isShowRMB: true,

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.rmbContainer}>
                    <Text style={this.props.rmbStyle}>{(this.props.isShowRMB ? '¥' : '')}</Text>
                </View>
                <Text style={this.props.priceStyle}>{this.props.price}</Text>
            </View>
        )
    }
}
// styles
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    rmbContainer: {
        margin: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'column'
    }
})