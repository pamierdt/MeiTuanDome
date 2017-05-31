/**
 * StarsView
 * meituandemo
 *
 * Created by peng on 2017/5/31 13:08.
 * @WebStorm
 */


import React from 'react';
import {View, Image, StyleSheet, Text, Button} from 'react-native';
import StarItem from './StarItem'
var MAX_STAR_COUNT = 5.0;
// component
export default class StarsView extends React.Component {
    static propTypes = {
        canTouchEnable: React.PropTypes.bool,
        score: React.PropTypes.number,
        supportDecimals: React.PropTypes.bool,
        isBigStar: React.PropTypes.bool
    }

    static defaultProps = {
        canTouchEnable: false,
        score: 0,
        supportDecimals: false,
    }
    state: {
        score: number
    }

    render() {
        this.state = {
            score: this.props.score
        }
        if (this.props.canTouchEnable) {

        }
    }
}
// styles
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: ''
    }
})

export function getBigStarsViewWithScore(score: number, style: React.PropTypes.style, supportDecimals: bool, canTouchEnable: bool) {

    return <StarsView supportDecimals={supportDecimals ? supportDecimals : this.prop.supportDecimals}
                      canTouchEnable={canTouchEnable ? canTouchEnable : this.props.canTouchEnable} score={score}
                      style={style && styles.container} isBigStar={true}/>
}

export function getLittleStarsViewWithScore(score: number, style: React.PropTypes.style, supportDecimals: bool, canTouchEnable: bool) {

    return <StarsView supportDecimals={supportDecimals ? supportDecimals : this.prop.supportDecimals}
                      canTouchEnable={canTouchEnable ? canTouchEnable : this.props.canTouchEnable} score={score}
                      style={style && styles.container} isBigStar={false}/>
}