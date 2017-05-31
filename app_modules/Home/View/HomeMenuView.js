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

    state: {
        currentPage: number,
    }
    onPageControlIndicatorPress(index: number) {
        if (this.state.currentPage != index) {
            //TODO: scrollView 自动翻页
            // this.refs.menu.scrollView.scrollToOffset({animated: true, offset: index*Screen.screenWidth});
            this.setState({
                currentPage: index,
            })
        }
    }
    onScroll(e: any) {
        let x = e.nativeEvent.contentOffset.x;
        let currentPage = x/Screen.screenWidth;
        if (this.state.currentPage != currentPage) {
           this.setState({
                currentPage: currentPage,
            })

        }
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
            (info, i) => (
                <HomeMenuItem
                    key={info.title}
                    title={info.title}
                    icon={info.icon}
                    onPress={() => {
                        onMenuSelected && onMenuSelected(i)
                    }}
                />
            )
        )
        let menuViews = []
        let pageCount = Math.ceil(menuItems.length / 10)

        for (let i = 0; i < pageCount; i++) {
            let length = menuItems.length < (i * 10) ? menuItems.length - (i * 10) : 10
            let items = menuItems.slice(i * 10, i * 10 + length)

            let menuView = (
                <View style={styles.itemsView} key={i}>
                    {items}
                </View>
            )
            menuViews.push(menuView)
        }
        return (
            <View ref = 'menu' style={styles.container}>
                <ScrollView
                    ref = 'scrollView'
                    contentContainerStyle={styles.contentContainer}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    onScroll={(e) => this.onScroll(e)}
                >
                    <View style={styles.menuContainer}>
                        {menuViews}
                    </View>
                </ScrollView>

                <PageControl
                    style={styles.pageControl}
                    numberOfPages={pageCount}
                    currentPage={this.state.currentPage}
                    hidesForSinglePage
                    pageIndicatorTintColor='gray'
                    currentPageIndicatorTintColor='#06C1AE'
                    indicatorSize={{width: 8, height: 8}}
                    onPageIndicatorPress={(index) => this.onPageControlIndicatorPress(index)}
                >
                </PageControl>
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


export default HomeMenuView;
























