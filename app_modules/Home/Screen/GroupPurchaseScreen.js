/**
 * GroupPurchaseScreen
 * meituandemo
 *
 * Created by peng on 2017/5/27 10:41.
 * @WebStorm
 */


import React from 'react';
import {View, Image, StyleSheet, Text, InteractionManager, ListView} from 'react-native';

import RefreshListView from '../View/RefreshListView'
import RefreshState from '../View/RefreshState'
import Screen from '../../Tools/Screen'
import SpaceView from '../../Tools/SpaceView'
import APIManager from '../../Tools/APIManager'
// component
export default class GroupPurchaseScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: '团购详情',
    })
    state: {
        info: Object,
        dataSource: ListView.DataSource
    }

    constructor(props) {
        super(props);
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        this.state = {
            info: {},
            dataSource: ds.cloneWithRows([]),
        }
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
                if (this.refs.listView) {
                    this.refs.listView.startHeaderRefresh();
                }
            }
        )
    }

    renderHeader() {
        return (
            <View>
                <SpaceView/>
            </View>

        )
    }

    _renderRow(rowData, sectionId, rowId) {
        return (
            <GroupInfoItem info={rowData}/>
        )
    }

    loadData() {
        fetch(APIManager.recommend)
            .then((response) => response.json())
            .then((json) => {
                console.log(JSON.stringify(json.data));
                let dataList = json.data.map((info) => {
                    return {
                        id: info.id,
                        imageUrl: info.squareimgurl,
                        title: info.mname,
                        subtitle: `[${info.range}]${info.title}`,
                        price: info.price
                    }
                })
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(dataList)
                });
                setTimeout(() => {
                    this.refs.listView.endRefresh(RefreshState.NoMoreData)
                }, 600)
            })
            .catch((error) => {
                this.refs.listView.endRefresh(RefreshState.Failure)
                alert(error);
            })
    }

    render() {
        return (
            <RefreshListView
                ref='listView'
                renderHeader={this.renderHeader}
                dataSource={this.state.dataSource}
                renderRow={(rowData, rowId, sectionId) => this._renderRow(rowData, rowId, sectionId)}
                onHeaderRefresh={this.loadData}
            />
        )
    }

}

// styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f2f2f2'
    },
    postIcon: {
        width: Screen.screenWidth,
        height: Screen.screenWidth / 2,
        backgroundColor: 'red',
    }
})