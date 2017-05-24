import React from 'react';
import {AppRegistry, Text, View, Button, StyleSheet, Image, ListView, TextInput, RefreshControl,} from 'react-native';
import {
    StackNavigator,
    TabNavigator,
} from 'react-navigation';

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text> hello </Text>
                <Button
                    onPress={() => navigate('Chat', {user: 'good for you'})}
                    title="chat with good"
                />
            </View>
        );
    }
}

class ChatScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        const {state, setParams} = navigation;
        const isInfo = state.params.mode === 'info';
        const {user} = state.params;
        return {
            title: isInfo ? `${user}’s contact info` : `chat with ${state.params.user}`,
            headerRight: (<Button
                title={isInfo ? 'done' : `${user}’s info`}
                onPress={() => setParams({mode: isInfo ? 'none' : 'info'})}
            />),
        };
        // title: `chat with ${navigation.state.params.user}`,
        // headerRight: <Button title = "info"/>,
    };

    render() {
        const {params} = this.props.navigation.state;
        return (
            <View>
                <Text> chat with {params.user}</Text>
            </View>
        )
    }
}

class RecentChatScreen extends React.Component {
    constructor() {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(['jonhn', 'jj', 'sfas', 'saj'])
        };
    }

    render() {
        const {navigate} = this.props.navigation;
        let imageurl = {uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'};
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'stretch',
                padding: 20,
            }}>
                <Text> Recent-Chat-Screen </Text>
                <Button
                    onPress={() => navigate('Chat', {user: 'good'})}
                    title="chat with good "
                />
                <View style={{
                    backgroundColor: '#efefef',
                    borderBottomColor: '#000000',
                    borderBottomWidth: 1 }}>
                    <TextInput
                    style={{height: 40}}
                    placeholder="Type here to translate!"
                    keyboardType='decimal-pad'
                    maxLength={6}
                    // secureTextEntry={true}
                    multiline = {true}
                    onChangeText={(text) => this.setState({text})}
                    />
                </View>
                <View>
                    <Image source={imageurl} style={{width: 193, height: 110, margin: 100,flex:0,}}/>
                </View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Text style={
                        {fontSize: 45}
                    }>{rowData}</Text>}
                    showsVerticalScrollIndicator = {true}
                />
            </View>
        )
    }
}

class AllContactsScreen extends React.Component {
    constructor() {
        super();
        const dss = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: dss.cloneWithRows(['jonhn', 'jj', 'sfas', 'saj'])
        }
    }

    render() {
        return <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <Text style={
                {fontSize: 30}
            }>{rowData}</Text>}
            refreshControl={
                <RefreshControl
                    onRefresh={this.onRefresh.bind(this)}
                    refreshing={this.state.isLoading}
                    colors={['#0000ff', '#00ff00', '#ff0000']}
                    enabled={true}
                />
            }
            showsVerticalScrollIndicator = {false}
        />
    }

    onRefresh() {
        console.log('onRefresh');
        this.loadData();
    }

    loadData() {
        try {

        } catch (e) {

        } finally {

        }
    }
}


const style = StyleSheet.create({
    topText: {
        flex: 1,
        paddingLeft: 23,
        backgroundColor: '#f2f2f2',
    }
})
const style1 = StyleSheet.create({
    text: {
        fontSize: 30,
        color: 'red',
    }
})

const MainScreenNavigator = TabNavigator({
    Recent: {screen: RecentChatScreen},
    All: {screen: AllContactsScreen},
});

const meituandemo = StackNavigator({
    Home: {screen: MainScreenNavigator},
    Chat: {screen: ChatScreen},
})

AppRegistry.registerComponent('meituandemo', () => meituandemo);
