/**
 * PageControl
 * meituandemo
 *
 * Created by peng on 2017/5/23 16:59.
 * @WebStorm
 */

import React from 'react';

import { View, StyleSheet, TouchableOpacity, } from 'react-native';

import assign from 'object-assign';

export default class  PageControl extends React.Component {
    static propTypes = {
        numberOfPages: React.PropTypes.number.isRequired,
        currentPage: React.PropTypes.number,
        hidesForSinglePage: React.PropTypes.bool,
        pageIndicatorTintColor: React.PropTypes.string,
        currentPageIndicatorTintColor: React.PropTypes.string,
        indicatorSize: React.PropTypes.object,
        indicatorStyle: React.PropTypes.style,
        currentPageIndicatorStyle: React.PropTypes.style,
        onPageIndicatorPress: React.PropTypes.func
    }

    static defaultProps = {
        numberOfPages: 0,
        currentPage: 0,
        hidesForSinglePage: false,
        pageIndicatorTintColor: 'gray',
        currentPageIndicatorTintColor: "#ffffff",
        indicatorSize: {width:8,height:8},
        indicatorStyle: {},
        currentPageIndicatorStyle: {},
        onPageIndicatorPress: function () {}
    }
    onPageIndicatorPress(index: number){
        this.props.onPageIndicatorPress(index);
    }
    render (){
        var  {style, ...props} = this.props;
        var defaultStyle = {
            height: this.props.indicatorSize.height
        };
        var  indicatorItemStyle = {
            width: this.props.indicatorSize.width,
            height: this.props.indicatorSize.height,
            borderRadius: this.props.indicatorSize.width/2,
            marginLeft: 5,
            marginRight: 5
        }
        var indicatorStyle = assign({}, indicatorItemStyle, this.props.indicatorStyle,{
            backgroundColor: this.props.pageIndicatorTintColor,
        })
        var currentIndicatorStyle = assign({}, indicatorItemStyle, this.props.currentIndicatorStyle,{
            backgroundColor: this.props.currentPageIndicatorTintColor
        })
        var  pages = [];
        for (var  i = 0; i < this.props.numberOfPages; i++) {
            pages.push(i);
        }
        return (
            this.props.hidesForSinglePage && pages.length <= 1 ? null :
                <View style={[styles.container, defaultStyle,style]}>
                    {
                     pages.map((el,i) => <TouchableOpacity key = {i} onPress={this.onPageIndicatorPress.bind(this,i)}>
                         <View
                             style={i == this.props.currentPage ? currentIndicatorStyle: indicatorStyle}
                         ></View>
                     </TouchableOpacity>)}
                </View>
        )
    }

}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#ffffff',
        alignItems : 'center',
        justifyContent : 'center',
        flexDirection: 'row'
    }
})
