/**
 * WebScreen
 * meituandemo
 *
 * Created by peng on 2017/5/24 11:35.
 * @WebStorm
 */

import  React from  'react';

import  { StyleSheet,InteractionManager,WebView,View} from  'react-native';

import Screen from './Screen'

export default class WebScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
        headerStyle : {backgroundColor: '#ffffff'},
        title: navigation.state.params.title,
    })
    state :{
        source: Object
    }
    constructor(props: Object){
        super(props)
        this.state = {
            source : {}
        }
        this.props.navigation.setParams({title: '加载中'})
    }

    onWebViewLoadStart(e: any) {
        console.log(e);
    }
    onWebViewLoadEnd(e: any) {
        console.log(e);
        if (e.nativeEvent.title.length > 0) {
            this.props.navigation.setParams({title: e.nativeEvent.title});
        }
    }
    onWebViewLoadError(e: any){
        console.log(e);
    }
    componentWillMount() {
        InteractionManager.runAfterInteractions(() => {
            this.setState({
                source:{uri: this.props.navigation.state.params.url}
            })
        })
    }
    componentDidMount() {

    }
    render(){
        return(
            <View style={styles.container}>
                <WebView
                    automaticallyAdjustContentInsets={false}
                    source={this.state.source}
                    onLoadStart={(e) => this.onWebViewLoadStart(e)}
                    onLoadEnd={(e) => this.onWebViewLoadEnd(e)}
                    onError={(e) => this.onWebViewLoadError(e)}
                    style={styles.webView}
                    scalesPageToFit={true}
                />
            </View>
        )
    }
}

const  styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#2c3e50'
    },
    webView:{
        flex: 1,
        backgroundColor: '#ffffff'
    }
});