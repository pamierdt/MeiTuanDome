/**
 * HomeGuideView
 * meituandemo
 *
 * Created by peng on 2017/5/25 17:01.
 * @WebStorm
 */


import React from 'react';
import {View, Image, StyleSheet, Text, Button} from 'react-native';
import Screen from '../../Tools/Screen'
import HomeGuideItem from './HomeGuideItem'

// component
export default class HomeGuideView extends React.Component {
    static propTypes = {
        infos: React.PropTypes.array,
        onGuidSelected: React.PropTypes.func
    }

    static defaultProps = {
        infos: [],
        onGuidSelected: function () {}
    }

    render() {

        return (
            <View style={styles.container}>
                {this.props.infos.map((info,index) => (
                    <HomeGuideItem
                        info={info}
                        key= {index}
                        onPress= {() => this.props.onGuidSelected(index)}
                    />
                    ))}
            </View>
        )
    }

}
// styles
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        borderColor: '#e8e8e8',
        borderLeftWidth: 1/Screen.scale,
        borderTopWidth: 1/Screen.scale
    }
})