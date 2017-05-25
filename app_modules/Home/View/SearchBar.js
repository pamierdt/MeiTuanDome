/**
 * SearchBar
 * meituandemo
 *
 * Created by peng on 2017/5/24 14:50.
 * @WebStorm
 */

import React from 'react';
import {View,TextInput,StyleSheet,Keyboard} from 'react-native';
import Screen from '../../Tools/Screen'
export default class SearchBar extends React.Component {
    static propsTypes = {
        width: React.PropTypes.number,
        height: React.PropTypes.number,
        backgroundColor: React.PropTypes.string,
        placeholder: React.PropTypes.string,
        placeholderTextColor: React.PropTypes.string,
        onBeginEditing: React.PropTypes.func,
        onTextChanged: React.PropTypes.func,
        onEndEditing: React.PropTypes.func,
        style: React.PropTypes.object,
        searchText: React.PropTypes.string
    }
    static defaultProps = {
        width: Screen.screenWidth * 0.8,
        height: 30,
        backgroundColor: '#ffffff',
        placeholder: 'search',
        placeholderTextColor: 'gray',
    }

    constructor() {
        super();
        this.setState({
            text: this.props.searchText,
        })
    }

    render() {
        return (
            <View>
            </View>
        )
    }
}