/**
 * MineScreen
 * meituandemo
 * Created by peng on 2017/5/23 13:30.
 * @WebStorm
 */

import React from  'react'
import {
    View,
    Text,
    SectionList,
    FlatList,
    TouchableHighlight,
    Touchable,
    PanResponder,
    StyleSheet,
    processColor,
} from 'react-native'
var CIRCLE_SIZE = 80;

export default class MineScreen extends React.Component {
    static navigationOptions = ((navigation) => ({
        headerStyle: {backgroundColor: '2cc0ae'}
    }))

    constructor() {
        super();

    }

    statics: {
        title: 'PanResponder Sample',
        description: 'Shows the use of PanResponder to provide basic gesture handling.',
    }


    _panResponder: {}

    _previousLeft: 0
    _previousTop: 0

    _circleStyles: {}



    componentWillMount() {
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder,
            onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder,
            onPanResponderGrant: this._handlePanResponderGrant,
            onPanResponderMove: this._handlePanResponderMove,
            onPanResponderRelease: this._handlePanResponderEnd,
            onPanResponderTerminate: this._handlePanResponderEnd,
        });
        this._previousLeft = 20;
        this._previousTop = 84;
        this._circleStyles = {
            style: {
                left: this._previousLeft,
                top: this._previousTop,
                backgroundColor: 'green',
            }
        };
    }

    componentDidMount() {
        this._updateNativeStyles();
    }


    render() {
        return (
            <View
                style={styles.container}>
                <View
                    ref={(circle) => {
                        this.circle = circle;
                    }}
                    style={styles.circle}
                    {...this._panResponder.panHandlers}
                />
            </View>
        );
    }


    _highlight() {
        this._circleStyles.style.backgroundColor = 'blue';
        this._updateNativeStyles();
    }


    _unHighlight() {
        this._circleStyles.style.backgroundColor = 'green';
        this._updateNativeStyles();
    }


    _updateNativeStyles() {
        this.circle && this.circle.setNativeProps(this._circleStyles);
    }


    _handleStartShouldSetPanResponder(e: Object, gestureState: Object) {
        // Should we become active when the user presses down on the circle?
        return true;
    }


    _handleMoveShouldSetPanResponder(e: Object, gestureState: Object) {
        // Should we become active when the user moves a touch over the circle?
        return true;
    }

    _handlePanResponderGrant(e: Object, gestureState: Object) {
        this._highlight().bind(this);
    }

    _handlePanResponderMove(e: Object, gestureState: Object) {
        this._circleStyles.style.left = this._previousLeft + gestureState.dx;
        this._circleStyles.style.top = this._previousTop + gestureState.dy;
        this._updateNativeStyles();
    }

    _handlePanResponderEnd(e: Object, gestureState: Object) {
        this._unHighlight();
        this._previousLeft += gestureState.dx;
        this._previousTop += gestureState.dy;
    }

}

const styles = StyleSheet.create({
    circle: {
        width: CIRCLE_SIZE,
        height: CIRCLE_SIZE,
        borderRadius: CIRCLE_SIZE / 2,
        position: 'absolute',
        left: 0,
        top: 0,
    },
    container: {
        flex: 1,
        paddingTop: 64,
    },
});
