/**
 * HomeMenuView
 * meituandemo
 * Created by peng on 2017/5/23 11:53.
 * @WebStorm
 */
import React from 'react';

import {View, Text, StyleSheet, ScrollView,} from 'react-native';

import HomeMenuItem from './HomeMenuItem'

import PageControl from './PageControl'

import Screen from '../../Tools/Screen'
class HomeMenuView extends React.Component {

    //noinspection JSAnnotator
    state = {
        currentPage: number,
    }

    onScroll (e) {

    }
    constructor() {
        super();
        this.state = {
            currentPage: 0
        }
    }

    render() {
        let {menuInfos, onMenuSelected} = this.props
        let menuItems = menuInfos.map(
            (info, i) => {
                <HomeMenuItem
                    key={info.title}
                    title={info.title}
                    icon={info.icon}
                    onPress={() => {
                        onMenuSelected && onMenuSelected(i)
                    }}
                />
            }
        )
        let menuViews = []
        let pageCount = Math.ceil(menuItems.length() / 10)

        for (let i = 0; i < pageCount; i++) {
            let length = menuItems.length() < (i * 10) ? menuItems.length() - (i * 10) : 10
            let items = menuItems.slice(i * 10, i * 10 + length)

            let menuView = (
                <View style={styles.itemView} key={i}>
                    {items}
                </View>
            )
            menuView.push(menuView)
        }
        return (
            <View style={styles.container}>
                <ScrollView
                    contentContainerStyle={styles.contentContainer}
                    horizontal= {true}
                    showsHorizontalScrollIndicator = {false}
                    pagingEnabled={true}
                    onScroll={(e) => this.onScroll(e)}
                >
                    <View style = {styles.menuContainer}>
                        {menuViews}
                    </View>
                </ScrollView>

                <PageControl
                    style:{styles.pageControl}
                    numberOfPages={pageCount}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
    },
    contentContainer: {},
    menuContainer: {
        flexDirection: 'row',
    },
    itemsView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: Screen.screenWidth,
    },
    pageControl: {
        margin: 10,
    },

})



























