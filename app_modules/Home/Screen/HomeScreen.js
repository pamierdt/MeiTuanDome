/**
 * HomeScreen
 * meituandemo
 * Created by peng on 2017/5/23 13:30.
 * @WebStorm
 */

import React from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button,
    StyleSheet,
    Image,
    ListView,
    TextInput,
    RefreshControl,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import {
    StackNavigator,
    TabNavigator,
} from 'react-navigation';
import Screen from '../../Tools/Screen';
import SpaceView from '../../Tools/SpaceView'
import APIManager from '../../Tools/APIManager'
import RefreshListView from '../View/RefreshListView'
import HomeMenuView from  '../View/HomeMenuView'
import HomeGuideView from '../View/HomeGuideView'
import GroupInfoItem from '../View/GroupInfoItem'
import RefreshState from '../View/RefreshState'

// homeScreen
export default class HomeScreen extends React.Component {

    state: {
        discounts: Array<Object>,
        dataSource: ListView.DataSource
    }

    static navigationOptions = ({navigation}) => ({
        headerTitle: (
            <View>
                <TextInput style={styles.searchBar} placeholder=' search'>

                </TextInput>
            </View>
        ),
        headerRight: (
            <TouchableOpacity >
                <Image source={require('../../Image/Home/icon_navigationItem_message_white@2x.png')}
                       style={{justifyContent: 'flex-start'}}>
                </Image>
            </TouchableOpacity>

        ),
        headerLeft: (
            <TouchableOpacity >
                <Text style={{justifyContent: 'flex-end'}}>
                    深圳
                </Text>
            </TouchableOpacity>
        ),
        headerStyle: {backgroundColor: '#2cc0ae'},
    })


    constructor() {
        super();
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        this.state = {
            discounts: [],
            dataSource: ds.cloneWithRows([]),
        }
    }

    loadData() {
        this.loadHeaderData();
        this.loadListData();
    }

    loadHeaderData() {
        fetch(APIManager.discount)
            .then((response) => response.json())
            .then((json) => {
                console.log(JSON.stringify(json));
                this.setState({discounts: json.data})
            })
            .catch((error) => {
                alert(error)
            })
    }

    loadListData() {
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
                        price: info.price,
                        rating: info.rating
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
                alert(error);
                this.refs.listView.endRefresh(RefreshState.Failure)
            })
    }

    onMenuSelected(index: number) {
        alert(index);
    }

    onGuideSelected(index: number) {
        let guideInfo = this.state.discounts[index]
        if (guideInfo.type == 1) {
            let location = guideInfo.tplurl.indexOf('http')
            let url = guideInfo.tplurl.slice(location)
            this.props.navigation.navigate('Web', {url: url})
        }
    }

    _onScroll(e: any) {
        let x = e.nativeEvent.contentOffset.x;

    }

    componentWillMount() {
    }

    componentDidMount() {
        this.refs.listView.startHeaderRefresh()
    }

    renderHeaderView() {
        return (
            <View>
                <HomeMenuView
                    menuInfos={APIManager.menuInfos}
                    onMenuSelected={(index) => this.onMenuSelected(index)}
                />

                <SpaceView/>
                <HomeGuideView infos={this.state.discounts} onGuidSelected={(index) => this.onGuideSelected(index)}/>
                <SpaceView/>
            </View>)
    }

    _renderRow(rowData, sectionId, rowId) {
        return (
            <GroupInfoItem onPress={() => {
                this.props.navigation.navigate('Group', {groupInfo: rowData});
            }} info={rowData}/>
        )
    }

    render() {
        return (
            // <RefreshListView/>
            <View style={styles.container}>
                <RefreshListView
                    ref='listView'
                    dataSource={this.state.dataSource}
                    renderHeader={() => this.renderHeaderView()}
                    renderRow={(rowData, sectionId, rowId) => this._renderRow(rowData, sectionId, rowId)}
                    onHeaderRefresh={() => this.loadData()}
                    onScroll={(e) => this._onScroll(e)}
                />
            </View>
        )
    }

}

// style
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    searchBar: {
        width: Screen.screenWidth * 0.7,
        height: 30,
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        alignSelf: 'center'
    },
    inputText: {
        fontSize: 20,
        color: 'gray',
    },
    topText: {
        flex: 1,
        paddingLeft: 23,
        backgroundColor: '#e8e8e8',
    }
})

