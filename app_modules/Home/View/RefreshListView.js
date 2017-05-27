/**
 * RefreshListView
 * meituandemo
 *
 * Created by peng on 2017/5/25 15:06.
 * @WebStorm
 */

import React from 'react'

import {ListView, View, Text, StyleSheet, RefreshControl, ActivityIndicator, TouchableOpacity} from 'react-native'

import RefreshState from './RefreshState'

class RefreshListView extends React.Component {
    // prop
    static propTypes = {
        onHeaderRefresh: React.PropTypes.func,
        onFooterRefresh: React.PropTypes.func,
    }
    static defaultProps = {}
    // Function
    constructor(props: Object) {
        super(props);
        this.state = {
            headerState: RefreshState.Idle,
            footerState: RefreshState.Idle
        }
    }

    startHeaderRefresh() {
        this.setState({headerState: RefreshState.Refreshing})
        this.props.onHeaderRefresh && this.props.onHeaderRefresh()
    }

    startFooterRefresh() {
        this.setState({footerState: RefreshState.Refreshing})
        this.props.onFooterRefresh && this.props.onFooterRefresh()
    }

    shouldStartHeaderRefresh() {
        if (this.state.headerState == RefreshState.Refreshing ||
            this.state.footerState == RefreshState.Refreshing) {
            return false;
        }
        return true;
    }

    shouldStartFooterRefresh() {
        if (this.state.headerState == RefreshState.Refreshing ||
            this.state.footerState == RefreshState.Refreshing) {
            return false;
        }
        if (this.state.footerState == RefreshState.Failure ||
            this.state.footerState == RefreshState.NoMoreData) {
            return false;
        }
        if (this.props.dataSource.getRowCount() == 0) {
            return false;
        }
        return true;
    }

    onHeaderRefresh() {
        if (this.shouldStartHeaderRefresh()) {
            this.startHeaderRefresh()
        }
    }

    onFooterRefresh() {
        if (this.shouldStartFooterRefresh()) {
            this.startFooterRefresh()
        }
    }
    endRefresh(state: RefreshState) {
        if (state == RefreshState.Refreshing){
            return
        }
        let footerState = state
        if (this.props.dataSource.getRowCount() == 0 ){
            footerState = RefreshState.Idle
        }
        this.setState({
            headerState: RefreshState.Idle,
            footerState: footerState
        })
    }

    headerState() {
        return self.state.headerState;
    }

    footerState() {
        return self.state.footerState;
    }

    // Render
    render() {
        return (
            <ListView
                {...this.props}
                enableEmptySections
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.headerState == RefreshState.Refreshing}
                        onRefresh={() => this.onHeaderRefresh()}
                        tintColor={'gray'}
                    />}
                renderFooter={() => this.renderFooter()}
                onEndReachedThreshold={10}
                onEndReached={() => this.onFooterRefresh()}
            />)
    }

    renderFooter() {
        let footer = null;
        let footState = this.state.footerState;
        switch (footState) {
            case RefreshState.Idle:
                break;
            case RefreshState.Failure: {
                footer =
                    <TouchableOpacity style={styles.footerContainer} onPress={() => this.startFooterRefresh()}>
                        <Text style={styles.footerText}>
                            点击重新加载
                        </Text>
                    </TouchableOpacity>
                break;
            }
            case RefreshState.Refreshing: {
                footer =
                    <View style={styles.footerContainer}>
                        <ActivityIndicator size={'small'} color={'#888888'}/>
                        <Text style={styles.footerText}>加载中...</Text>
                    </View>
                break;
            }
            case RefreshState.NoMoreData: {
                footer =
                    <View style={styles.footerContainer}>
                        <Text style={styles.footerText}>没有更多数据</Text>
                    </View>
                break;
            }
        }
        return footer;
    }

}


const styles = StyleSheet.create({
    footerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    footerText: {
        fontSize: 14,
        color: '#111111'
    }
})
export default RefreshListView;
