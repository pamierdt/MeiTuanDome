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
import GroupInfoItem from '../View/GroupInfoItem'
import RefreshState from '../View/RefreshState'
import Screen from '../../Tools/Screen'
import SpaceView from '../../Tools/SpaceView'
import {groupPurchaseHeaderUrl} from  '../../Tools/APIManager'
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
                if (this.refs.list) {
                    this.refs.list.startHeaderRefresh();
                }
            }
        )
    }

    renderHeader() {
        let info = this.props.navigation.state.params.groupInfo
        return (
            <View>
                <Image source={{uri:info.imageUrl.replace('w.h','480.0')}} style={{width:Screen.screenWidth,height:200}} resizeMode={'cover'}/>
                <SpaceView/>
            </View>

        )
    }

    _renderRow(rowData, sectionID, rowID) {
        return (
            <GroupInfoItem info={rowData} onPress={() => {
                this.props.navigation.navigate('Group', {groupInfo: rowData});
            }}/>
        )
    }

    loadData() {
        let info = this.props.navigation.state.params.groupInfo
        console.log(groupPurchaseHeaderUrl(info.id))
        fetch(groupPurchaseHeaderUrl(info.id))
            .then((response) => response.json())
            .then((json) => {
                console.log(JSON.stringify(json.data));
                let dataList = json.data.deals.map((info) => {
                    return {
                        id: info.id,
                        imageUrl: info.imgurl,
                        title: info.title,
                        subtitle: `[${info.range}]${info.title}`,
                        price: info.price
                    }
                })
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(dataList)
                });
                setTimeout(() => {
                    this.refs.list.endRefresh(RefreshState.NoMoreData)
                }, 600)
            })
            .catch((error) => {
                this.refs.list.endRefresh(RefreshState.Failure)
                alert(error);
            })
    }

    render() {
        return (
            <RefreshListView
                ref='list'
                renderHeader={() => this.renderHeader()}
                dataSource={this.state.dataSource}
                renderRow={(rowData, sectionID, rowID) => this._renderRow(rowData, sectionID, rowID)}
                onHeaderRefresh={() => this.loadData()}
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