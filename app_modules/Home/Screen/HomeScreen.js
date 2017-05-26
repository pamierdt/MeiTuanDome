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
import HomeMenuView from  '../View/HomeMenuView'
import HomeGuideView from '../View/HomeGuideView'

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
                <Image source={require('../../Image/Home/icon_navigationItem_message_white@2x.png')}>
                </Image>
            </TouchableOpacity>

        ),
        headerLeft: (
            <TouchableOpacity >
                <Text>
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

    }

    onMenuSelected(index: number) {
        alert(index);
    }

    onGuideSelected(index: number) {

    }

    componentDidMount() {
        this.loadHeaderData();
    }
    render() {
        return (
            <ScrollView>
                <HomeMenuView
                    menuInfos={APIManager.menuInfos}
                    onMenuSelected={(index) => this.onMenuSelected(index)}
                />

                <SpaceView/>
                <HomeGuideView infos={this.state.discounts} onGuidSelected={(index) => this.onGuideSelected(index)}/>
                <SpaceView/>

            </ScrollView>
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

