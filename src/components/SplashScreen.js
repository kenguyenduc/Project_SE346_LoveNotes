import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image,
    Animated
    } from 'react-native';

export default class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { fadeAnimations: new Animated.Value(0) }
    }

    componentDidMount() {
        Animated.timing(
            this.state.fadeAnimations,
            {
                toValue: 1,
                duration: 3400
            }
        ).start();
    }
    render() {
        const opacity = this.state.fadeAnimations;
        return (
            <View style={style.container}>
                <View style={style.containerimages}>
                    <Animated.View style={{opacity}}>
                        <Image source={require('../assets/imgApp/txtln.png')}/>
                    </Animated.View>
                    <Image style={{marginTop:25, marginLeft:15}} source={require('../assets/imgApp/imgcp.png')}/>
                </View>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',
        backgroundColor:'#92dae7'
    },
    containerimages:{
        alignItems:'center',
        justifyContent:'center',
        flex:1
    },
})
