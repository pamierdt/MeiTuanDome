/**
 * StarItem
 * meituandemo
 *
 * Created by peng on 2017/5/31 18:39.
 * @WebStorm
 */


import React from 'react';
import {View, Image, StyleSheet, Button, TouchableOpacity} from 'react-native';
var LITTLE_STAR_SIZE = 10;
var BIG_STAR_SIZE = 20;
// component
export default class StarItem extends React.Component {
    static propTypes = {
        isSelected: React.PropTypes.bool,
        score: React.PropTypes.number,
        canTouchenable: React.PropTypes.bool,
        isBigStar: React.PropTypes.bool
    }
    static defaultProps = {
        score: 0,
        canTouchenable: false,
        isBigStar: false
    }

    render() {
        return (
            <TouchableOpacity style={styles.container}>
                <Image style={this.props.isBigStar ? styles.bigIcon : styles.littleIcon} source= { this.props.isSelected ? require('../../Image/Public/icon_star_big_red@2x.png'):require('../../Image/Public/icon_star_big_gray@2x.png')}/>
            </TouchableOpacity>
        )
    }
}
// styles
const styles = StyleSheet.create({
    container: {
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    littleIcon: {
        width: LITTLE_STAR_SIZE,
        height: LITTLE_STAR_SIZE
    },
    bigIcon: {
        width: BIG_STAR_SIZE,
        height: BIG_STAR_SIZE
    }
})